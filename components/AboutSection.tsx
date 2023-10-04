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
              Who am I?
            </h1>
            <p>
              I am a{" "}
              <span className="font-bold">{"curious"}</span>,
              and <span className="font-bold">{"driven"}</span> individual striving to disrupt and make waves
              by building software that solves real world challenges. 
            </p>
            <br />
            <p>
              I graduated from Kristiania University College with a Bachelor&#39;s
              degree in Economics and Digitalization in 2021. Currently, I&#39;m at my last
              year of my Bachelor&#39;s degree in Computer Engineering at the Western
              Norway University of Applied Sciences where I&#39;m majoring in Machine Learning. 
            </p>
            <br />
            <p>
              I have a strong interested in{" "}
              <span className="font-bold text-teal-500">{"AI"}</span>{" "}
              and its existing applications in the real world. Lately, I&#39;ve been focusing on building{" "}
              <span className="font-bold text-teal-500">{"Generative AI"}</span>{" "}
              applications as well as exploring many different ideas and use-cases for this technology. My next deep dive will be to fine-tune OpenAI&#39;s GPT-3.5-turbo model on a
              custom dataset with the goal of creating a closed-off and flexible chatbot with domain specific knowledge for small businesses.{" "}
              <span className="font-bold text-teal-500">{"Stay tuned!"}</span>{" "}

            </p>
            <br />
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
