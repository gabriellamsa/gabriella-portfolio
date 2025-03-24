import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import {
  TbBrandCss3,
  TbBrandGit,
  TbBrandHtml5,
  TbBrandJavascript,
} from "react-icons/tb";

export const Technologies = () => {
  return (
    <div className="pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-8">
        <TbBrandHtml5 className="text-7xl text-orange-400" />
        <TbBrandCss3 className="text-7xl text-sky-400" />
        <TbBrandJavascript className="text-7xl text-amber-400" />
        <RiReactjsLine className="text-7xl text-cyan-400" />
        <RiTailwindCssFill className="text-7xl text-cyan-400" />
        <TbBrandGit className="text-7xl text-red-400" />
      </div>
    </div>
  );
};
