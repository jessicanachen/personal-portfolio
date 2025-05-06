import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Linkedin, Github, FileText, Hexagon } from "lucide-react";
import { useState } from "react";

interface TimelineItem {
  title: string;
  date: string;
  location: string;
  description: string;
}

export default function Home() {
  const tabs = ["Work", "Education"];
  const [activeTab, setActiveTab] = useState("Work");

  const workTimeline: TimelineItem[] = [
    {
      title: "Lorem Ipsum",
      date: "Jan 2022 - Present",
      location: "Lorem Ipsum Dolor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Lorem Ipsum",
      date: "Jun 2020 - Dec 2021",
      location: "Lorem Ipsum Dolor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const educationTimeline: TimelineItem[] = [
    {
      title: "Lorem Ipsum",
      date: "Summer 2019",
      location: "Lorem Ipsum Dolor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Lorem Ipsum",
      date: "2018 - 2019",
      location: "Lorem Ipsum Dolor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const renderTimeline = (timeline: TimelineItem[]) => (
    // the before makes the timeline line
    <div className="relative m-4 pl-2 space-y-8 before:absolute before:left-0 before:top-4 before:bottom-0 before:w-0.5 before:bg-gray-400">
      {timeline.map((item, idx) => (
        <div key={idx} className="relative pl-4">
          <div className="absolute left-[-.8rem] top-3 w-3 h-3 bg-gray-400 rounded-full border-2"></div>
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <span className="text-gray-400">{item.date}</span>
          </div>
          <p className="text-gray-500 italic pt-1">{item.location}</p>
          <p className="pt-4">{item.description}</p>
        </div>
      ))}
    </div>
  );

  return (
    <Layout>
      {/* Top Header */}
      <div className="flex flex-row items-center space-x-8 py-8">
        <div className="py-4">
          <h1>Jessica Chen</h1>
          <h3>Software Engineer</h3>
          <p className="py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex flex-row space-x-2 items-center text-lg pt-2 pb-4">
            <MapPin />
            <p>South Carolina</p>
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
                activeTab === tab ? "text-gray-100" : "text-gray-500"
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
            ? renderTimeline(workTimeline)
            : renderTimeline(educationTimeline)}
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
            <li>Languages</li>
            <li>Frontend</li>
            <li>Backend</li>
            <li>Testing</li>
            <li>Devops</li>
          </ul>
        </div>
      </div>

      {/* About Me */}
      <div className="w-full py-4">
        <h2>About Me</h2>
      </div>
    </Layout>
  );
}
