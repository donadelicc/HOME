import React from "react"
import Image from "next/image"
import Link from "next/link"
//import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "My Spotify",
    description:
      "Platform for all things spotify. Your music statistics and your very own playlist generator using AI!",
    image: "/spotipy_edit.png",
    github: "https://github.com/donadelicc/my_spotify",
    link: "https://myspotify.azurewebsites.net/",
  },
  {
    name: "Web Chat",
    description: "GenAI Web Chat. OpenAI's GPT-3.5-turbo takes in the HTML code of the website and will only let you ask questions based on that exact content.",
    image: "/webChatt.png",
    github: "https://github.com/donadelicc/web-chat",
    link: "https://google.com/",
  },
  {
    name: "Doc Digitizer",
    description: "A web app that takes in a scanned PDF's and returns a digitized new PDF version",
    image: "/ocrNettside.png",
    github: "https://github.com/donadelicc/poc_ocr-for-pdf",
    link: "https://docdigitizer.azurewebsites.net/",
  }

]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx} className="flex flex-col md:flex-row md:space-x-12">
              <div className="md:w-1/2">
                <Link href={project.link}>
                  <Image
                    src={project.image}
                    alt=""
                    width={1000}
                    height={1000}
                    className="rounded-xl shadow-xl hover:opacity-70"
                  />
                </Link>
              </div>
              <div className="mt-8 md:w-1/2">
                <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                  {project.description}
                </p>
                <div className="flex flex-row align-bottom space-x-4">
                  <Link href={project.github} target="_blank">
                    <BsGithub
                      size={30}
                      className="hover:-translate-y-1 transition-transform cursor-pointer"
                    />
                  </Link>
                  <Link href={project.link} target="_blank">
                    <BsArrowUpRightSquare
                      size={30}
                      className="hover:-translate-y-1 transition-transform cursor-pointer"
                    />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ProjectsSection
