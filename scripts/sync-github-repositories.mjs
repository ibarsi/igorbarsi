import { access, writeFile } from 'node:fs/promises';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const username = 'ibarsi';
const outputPath = fileURLToPath(
  new URL('../src/data/github.generated.json', import.meta.url)
);

const selectedRepositories = [
  {
    slug: 'typewhisper-mac',
    category: 'Privacy AI',
    description:
      'On-device speech-to-text for macOS, built with privacy as a first principle.',
  },
  {
    slug: 'homebrew-cask',
    category: 'macOS tooling',
    description:
      'A CLI workflow for managing macOS applications distributed as binaries.',
  },
  {
    slug: 'gemini-cli',
    category: 'Developer tools',
    description:
      'An open-source AI agent that brings Gemini directly into the terminal.',
  },
];

function formatUpdatedDate(value) {
  return new Intl.DateTimeFormat('en', {
    month: 'short',
    timeZone: 'UTC',
    year: 'numeric',
  }).format(new Date(value));
}

async function fetchRepository(repository) {
  const response = await fetch(
    `https://api.github.com/repos/${username}/${repository.slug}`,
    { headers: { Accept: 'application/vnd.github+json' } }
  );

  if (!response.ok) {
    throw new Error(`${repository.slug}: GitHub returned ${response.status}`);
  }

  const data = await response.json();

  return {
    category: repository.category,
    description: repository.description,
    language: data.language,
    name: repository.slug,
    updatedLabel: formatUpdatedDate(data.pushed_at),
    url: data.html_url,
  };
}

try {
  const repositories = await Promise.all(
    selectedRepositories.map(fetchRepository)
  );
  await writeFile(outputPath, `${JSON.stringify(repositories, null, 2)}\n`);
  console.log(`Synced ${repositories.length} GitHub repositories.`);
} catch (error) {
  try {
    await access(outputPath);
    console.warn(
      `GitHub sync skipped: ${error.message}. Using existing snapshot.`
    );
  } catch {
    throw error;
  }
}
