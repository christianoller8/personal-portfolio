import Image from "next/image"
import Link from "next/link"
import myLogo from "@/assets/mylogo.jpg"
import { IoMdReturnLeft } from "react-icons/io"

import Container from "@/components/Container"

import SocialSideBar from "./components/SocialSideBar"

function PageAbout() {
  return (
    <Container>
      <div className="sm:px-8">
        <div className="mb-12 flex items-center justify-between px-0 lg:px-16">
          <h2 className="flex w-max flex-col pb-4 text-3xl font-bold leading-10 tracking-tighter text-zinc-100 dark:text-zinc-100 sm:pb-6 md:text-6xl">
            About Me
            <span className="mt-2 inline-flex h-2 w-full rounded-md bg-emerald-500 md:mt-4" />
          </h2>
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-2 rounded-md bg-emerald-500 px-3 py-2 text-sm font-extrabold text-zinc-900 outline-offset-2 transition hover:bg-zinc-100 active:bg-emerald-500 active:text-zinc-900/60 active:transition-none dark:bg-emerald-500 dark:text-zinc-200 dark:hover:bg-emerald-700 dark:hover:text-zinc-50 dark:active:bg-emerald-500 dark:active:text-zinc-50/70 md:px-4 md:py-3 md:text-base lg:text-lg"
          >
            <IoMdReturnLeft className="mr-2 text-lg" />
            Go Back
          </Link>
        </div>
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
              <div className="lg:pl-20">
                <div className="max-w-xs px-2.5 lg:max-w-none">
                  <Image
                    src={myLogo}
                    className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                    width={500}
                    alt="my logo"
                  />
                </div>
              </div>
              <div className="lg:order-first lg:row-span-2">
                <h2 className="text-4xl font-bold tracking-tighter text-zinc-100 dark:text-zinc-100 sm:text-5xl sm:leading-[3.5rem]">
                  I’m Christian Oller. Software developer.
                </h2>
                <div className="mt-6 space-y-7 text-base text-zinc-200 dark:text-zinc-400">
                <p className=" pt-4 text-justify">
              At 33 years old and residing in the vibrant city of Barcelona, I have been immersed in the world of programming and software development for the past 2 years. My focus and dedication lies not only in writing efficient code, but also in thoroughly understanding the needs and challenges faced by companies in the digital era. This has allowed me to develop technology solutions that are not only innovative, but also highly effective.
            </p>
            <p className="text-justify">
              My journey as a software developer began driven by curiosity and the desire to create. Barcelona, with its constantly growing technology ecosystem, has been the perfect setting for my professional development. Here, I have had the opportunity to work on diverse projects ranging from web applications to complex software solutions, gaining valuable experience in various technologies and working methodologies.
            </p>
            <p className="text-justify">
              What motivates me every day is the possibility of transforming ideas into tangible realities through programming. My goal is to continue growing as a professional, expanding my knowledge and skills to lead technological projects that not only solve specific problems, but also bring value and improvement to society. I am convinced that software development has the power to change the world, and I want to be part of that change.
            </p>
            <p className="text-justify">
              Outside of the keyboard, I am an enthusiast for discovering new foods and recipes, which leads me to experiment with flavors from different cultures in my kitchen. This passion for gastronomy is complemented by my love for continuous contact with nature, always looking for moments to reconnect with the natural environment, whether through hikes, walks on the beach or simply enjoying a sunset in the mountains. I strongly believe in the balance between professional and personal life, and I strive to find inspiration in my experiences and my surroundings to apply it in my work. My ambition is to continue to grow and learn every day, hoping to collaborate on projects that not only challenge my technical skills, but also enrich my perspective of the world.
            </p>
                  
                </div>
              </div>
              <SocialSideBar />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default PageAbout
