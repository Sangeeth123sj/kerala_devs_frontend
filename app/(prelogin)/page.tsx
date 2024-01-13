import { ContributionAvatar } from "@/components/Avatar";
import {
  backendRepoName,
  frontendRepoName,
  githubUsername,
} from "@/constants/api/github";
import { getGithubContributers } from "@/utils/api/github";
import AboutSection from "./_components/aboutSection/aboutSection";
import { aboutSectionData } from "./_data";

export default async function Home() {
  const frontendContributers = await getGithubContributers(
    githubUsername,
    frontendRepoName,
  );
  const backendContributers = await getGithubContributers(
    githubUsername,
    backendRepoName,
  );
  const totalContributers = [...frontendContributers, ...backendContributers];
  return (
    <div className="flex flex-col gap-5 p-2 flex-1">
      {/* Intro section starts here */}
      <div className="min-h-[200px] text-center p-3 flex flex-col gap-3 justify-center border-b-[1px]">
        <h1 className="text-3xl font-bold">
          Welcome to Our OpenSource Kerala Developers Gig/Job Platform
        </h1>
        <p className="text-xl">
          Our platform is dedicated to the growth of the Python community. It
          serves as a hub for freelancers and job seekers, offering
          opportunities and fostering collaboration within the community.
        </p>
      </div>
      {/* Intro section ends here */}
      {/* About section starts here */}
      <div className="p-3 flex flex-col gap-y-20">
        {aboutSectionData.map((props) => (
          <AboutSection {...props} />
        ))}
        <hr />
      </div>
      {/* About section ends here */}
      {/* Contributers section starts here */}
      <div className="p-3 mt-auto">
        <h1 className="text-xl font-bold">Contributers</h1>
        <div className="mt-2 flex gap-3 overflow-hidden flex-wrap p-3">
          {totalContributers.map((props, i) => (
            <ContributionAvatar
              {...props}
              key={props?.avatar_url + i.toString()}
            />
          ))}
        </div>
      </div>
      {/* Contributers section ends here */}
    </div>
  );
}
