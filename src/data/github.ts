type GitHubRepositoryResponse = {
  description: string | null;
  html_url: string;
  language: string | null;
  pushed_at: string;
};

type RepositoryDefinition = {
  category: string;
  description: string;
  slug: string;
};

export type SelectedRepository = {
  category: string;
  description: string;
  language: string | null;
  name: string;
  url: string;
  updatedLabel: string;
};

const username = 'ibarsi';

const selectedRepositories: RepositoryDefinition[] = [
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

function formatUpdatedDate(value: string) {
  return new Intl.DateTimeFormat('en', {
    month: 'short',
    timeZone: 'UTC',
    year: 'numeric',
  }).format(new Date(value));
}

function fallbackRepository(
  repository: RepositoryDefinition
): SelectedRepository {
  return {
    category: repository.category,
    description: repository.description,
    language: null,
    name: repository.slug,
    url: `https://github.com/${username}/${repository.slug}`,
    updatedLabel: 'GitHub project',
  };
}

async function fetchRepository(repository: RepositoryDefinition) {
  const response = await fetch(
    `https://api.github.com/repos/${username}/${repository.slug}`,
    {
      headers: {
        Accept: 'application/vnd.github+json',
      },
    }
  );

  if (!response.ok) {
    throw new Error(
      `GitHub returned ${response.status} for ${repository.slug}`
    );
  }

  const data = (await response.json()) as GitHubRepositoryResponse;

  return {
    category: repository.category,
    description: data.description ?? repository.description,
    language: data.language,
    name: repository.slug,
    url: data.html_url,
    updatedLabel: formatUpdatedDate(data.pushed_at),
  } satisfies SelectedRepository;
}

export async function getSelectedRepositories(): Promise<SelectedRepository[]> {
  return Promise.all(
    selectedRepositories.map(async (repository) => {
      try {
        return await fetchRepository(repository);
      } catch {
        return fallbackRepository(repository);
      }
    })
  );
}
