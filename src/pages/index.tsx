import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Linkedin, Github, FileText, Hexagon } from "lucide-react";
import { useState } from "react";

import header from "@/data/header.json";
import work from "@/data/work.json";
import education from "@/data/education.json";
import skills from "@/data/skills.json";

interface WorkTimelineItem {
  title: string;
  date: string;
  company: string;
  location: string;
  description: string[];
}

interface EducationTimelineItem {
  title: string;
  date: string;
  major: string;
  gpa: string;
  awards: string;
  coursework: string;
}

interface SkillItem {
  name: string;
  icon: string;
}

type SkillsData = Record<string, SkillItem[]>;

export default function Home() {
  // Json File Stuff
  const headerData = header[0];
  const workTimeline = work as WorkTimelineItem[];
  const educationTimeline = education as EducationTimelineItem[];
  const skillsData = skills as SkillsData;

  // Work and Education Timelne Stuff
  const tabs = ["Work", "Education"];
  const [activeTab, setActiveTab] = useState("Work");

  // Skills Stuff
  const skillTabs: (keyof SkillsData)[] = Object.keys(
    skills
  ) as (keyof SkillsData)[];
  const [activeSkillTab, setActiveSkillTab] = useState<keyof SkillsData>(
    skillTabs[0]
  );

  const renderWorkTimeline = (timeline: WorkTimelineItem[]) => (
    // the before makes the timeline line
    <div className="relative m-4 pl-2 space-y-8 before:absolute before:left-0 before:top-4 before:bottom-0 before:w-0.5 before:bg-gray-400">
      {timeline.map((item, idx) => (
        <div key={idx} className="relative pl-4">
          <div className="absolute left-[-.8rem] top-3 w-3 h-3 bg-gray-400 rounded-full border-2"></div>
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <span className="text-gray-400">{item.date}</span>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray-500 italic pt-1">{item.company}</p>
            <p className="text-gray-500 italic pt-1">{item.location}</p>
          </div>
          <ul className="mt-4 list-disc list-outside pl-4 space-y-2">
            {item.description.map((desc, idx) => (
              <li key={idx}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  const renderEducationTimeline = (timeline: EducationTimelineItem[]) => (
    // the before makes the timeline line
    <div className="relative m-4 pl-2 space-y-8 before:absolute before:left-0 before:top-4 before:bottom-0 before:w-0.5 before:bg-gray-400">
      {timeline.map((item, idx) => (
        <div key={idx} className="relative pl-4">
          <div className="absolute left-[-.8rem] top-3 w-3 h-3 bg-gray-400 rounded-full border-2"></div>
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <span className="text-gray-400">{item.date}</span>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray-500 italic pt-1">{item.major}</p>
            <p className="text-gray-500 italic pt-1">{item.gpa}</p>
          </div>
          <div className="grid gap-y-2 mt-4">
            <div className="flex">
              <p className="font-bold min-w-[8rem] max-w-[8rem]">Awards:</p>
              <p>{item.awards}</p>
            </div>
            <div className="flex">
              <p className="font-bold min-w-[8rem] max-w-[8rem]">Coursework:</p>
              <p>{item.coursework}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <Layout>
      {/* Top Header */}
      <div className="flex flex-row items-center space-x-8 py-8 w-full">
        <div className="py-4 w-full">
          <h1>Jessica Chen</h1>
          <h3>{headerData.title}</h3>
          <p className="py-4">{headerData.about}</p>
          <div className="flex flex-row space-x-2 items-center text-lg pt-2 pb-4">
            <MapPin />
            <p>{headerData.place}</p>
          </div>
          <div className="flex flex-row space-x-2">
            <Link
              href="https://www.linkedin.com/in/jessicanachen/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="border rounded-full flex items-center justify-center w-8 h-8"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/jessicanachen/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
              className="border rounded-full flex items-center justify-center w-8 h-8"
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/jessicanachen/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume"
              className="border rounded-full flex items-center justify-center w-8 h-8"
            >
              <FileText size={20} />
            </Link>
          </div>
        </div>
        <Image
          src="/globe.svg"
          width={250}
          height={250}
          alt="Picture of the author"
        />
      </div>

      {/* Work / Education Tab */}
      <div className="w-full py-4">
        <div className="flex flex-row w-full">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`${
                activeTab === tab ? "text-foreground" : "text-gray-500"
              } w-[50%] border ${
                tab === "Work"
                  ? "rounded-tl-lg rounded-bl-lg"
                  : "rounded-tr-lg rounded-br-lg"
              } font-heading text-lg py-2`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="w-full border rounded-lg my-4 p-4 border-gray-500">
          {activeTab === "Work"
            ? renderWorkTimeline(workTimeline)
            : renderEducationTimeline(educationTimeline)}
        </div>
      </div>

      {/* Featured Projects */}
      <div className="w-full py-4">
        <h2>Featured Projects</h2>
      </div>

      {/* Skills */}
      <div className="w-full py-4">
        <div className="w-full items-baseline justify-between flex flex-row">
          <div className="flex flex-row space-x-4 items-center">
            <h2>Skills</h2>
            <div className="border-l pl-4">
              <button
                aria-label="Skill Tree"
                className="border rounded-full flex items-center justify-center w-6 h-6 border-gray-500 text-gray-500"
              >
                <Hexagon size={16} />
              </button>
            </div>
          </div>
          <ul className="flex flex-row space-x-4 text-small text-gray-500">
            {skillTabs.map((tab) => (
              <button
                key={tab}
                className={`cursor-pointer ${
                  activeSkillTab === tab ? "text-foreground font-semibold" : ""
                }`}
                onClick={() => setActiveSkillTab(tab)}
              >
                {tab}
              </button>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-4 gap-4 pt-6">
          {skillsData[activeSkillTab].map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center text-center"
            >
              <Image
                src={`/images/skicons/${activeSkillTab.toLowerCase()}/${
                  skill.icon
                }`}
                alt={skill.name}
                width={32}
                height={32}
                className="mb-2"
              />
              <span className="text-sm">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* About Me */}
      <div className="w-full py-4">
        <h2>About Me</h2>
      </div>
    </Layout>
  );
}
