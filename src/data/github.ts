import githubRepositories from './github.generated.json';

export type SelectedRepository = {
  category: string;
  description: string;
  language: string | null;
  name: string;
  updatedLabel: string;
  url: string;
};

export function getSelectedRepositories(): SelectedRepository[] {
  return githubRepositories.map((repository) => ({ ...repository }));
}
