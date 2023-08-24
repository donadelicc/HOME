import React from "react"
import Image from "next/image"

const skills = [
  { skill: "Python" },
  { skill: "JavaScript" },
  { skill: "GenAI Applications" },
  { skill: "Unity ML-Agents" },
  { skill: "React, Next.js, Flask & Spring Boot" },
  { skill: "Process automation - RPA, Web Scraping & API's" },
  { skill: "Excel, Macros, PowerBi, SQL & JSON " },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Preben and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> individual who is
              passionate about technology and innovation.
            </p>
            <br />
            <p>
              I graduated from Kristiania University College with a Bachelor&#39;s
              degree in Economics and Digitalization. I am currently at my last
              year of my Bachelor&#39;s degreer in Computer Engineering at the Western
              Norway University of Applied Sciences.
            </p>
            <br />
            <p>
              I have a passion for{" "}
              <span className="font-bold text-teal-500">{"machine learning"}</span>{" "}
              and lately I have been working on a lot of{" "}
              <span className="font-bold text-teal-500">{"GenAI"}</span>{" "}
              projects. 

            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left relative">
            <h1 className="text-2xl font-bold mb-6">Selfproclaimed technical skills </h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/monkey.png"
              alt=""
              width={200}
              height={200}
              className="hidden md:block absolute bottom-0 right-0"
              />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
