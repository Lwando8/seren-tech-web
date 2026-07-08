import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const projectId = 'prj_gz7d3Z6rWzb5sALqADHybJkAOmWx';
const teamId = 'team_rsXcOlh3F2QpUFG96j0aCx5c';
const domain = 'serentech.co.za';

function getToken() {
  if (process.env.VERCEL_TOKEN) {
    return process.env.VERCEL_TOKEN;
  }

  const candidates = [
    path.join(os.homedir(), '.vercel/auth.json'),
    path.join(os.homedir(), '.local/share/com.vercel.cli/auth.json'),
  ];

  for (const authPath of candidates) {
    if (fs.existsSync(authPath)) {
      const auth = JSON.parse(fs.readFileSync(authPath, 'utf8'));
      if (auth.token) {
        return auth.token;
      }
    }
  }

  throw new Error(
    'No Vercel token found. Run `vercel login` or set VERCEL_TOKEN, then rerun this script.',
  );
}

async function api(method, urlPath, body) {
  const response = await fetch(`https://api.vercel.com${urlPath}`, {
    method,
    headers: {
      Authorization: `Bearer ${getToken()}`,
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  const text = await response.text();
  let data;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = text;
  }

  if (!response.ok) {
    throw new Error(`${method} ${urlPath} failed (${response.status}): ${JSON.stringify(data)}`);
  }

  return data;
}

const domains = await api(
  'GET',
  `/v10/projects/${projectId}/domains?teamId=${teamId}`,
);

console.log('Current domains:');
for (const entry of domains.domains ?? domains) {
  console.log(`- ${entry.name}: redirect=${entry.redirect ?? 'none'}`);
}

const apex = (domains.domains ?? domains).find((entry) => entry.name === domain);
if (!apex) {
  throw new Error(`Domain ${domain} not found on project`);
}

if (!apex.redirect) {
  console.log(`${domain} already serves production (no redirect).`);
} else {
  const updated = await api(
    'PATCH',
    `/v9/projects/${projectId}/domains/${domain}?teamId=${teamId}`,
    { redirect: null, redirectStatusCode: null },
  );
  console.log(`Updated ${domain}: redirect=${updated.redirect ?? 'none'}`);
}
