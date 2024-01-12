export interface ContributerApiInterface {
  login: string;
  avatar_url?: string;
  html_url: string;
}
export const getGithubContributers = async (
  user_name: string,
  repo_name: string,
) => {
  const res = await fetch(
    `https://api.github.com/repos/${user_name}/${repo_name}/contributors?anon=true`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  return (await res.json()) as ContributerApiInterface[];
};
