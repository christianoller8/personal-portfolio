import Image from "next/image"
import { BsArrowDownShort } from "react-icons/bs"
import logoVU from "../assets/vu-logo.png"
import SuitcaseIcon from "../icons/SuitcaseIcon"

function Experience2() {
  return (
    <div className="mt-1 flex flex-col gap-7 md:px-8 lg:px-14">
      <div className="mx-auto flex flex-col gap-6 lg:flex-row">
        <div className="flex max-w-xl flex-1 flex-col rounded-2xl border border-indigo-400/70 p-6 shadow-inner transition-shadow duration-500 dark:border-zinc-700/40 dark:shadow-zinc-700/40 dark:hover:shadow-transparent md:gap-2">
          <div className="flex items-center gap-3">
            <SuitcaseIcon />
            <h2 className="flex text-lg font-semibold text-zinc-100 dark:text-zinc-100 md:text-xl">
              Company
            </h2>
          </div>
          <ul className="mt-6 flex flex-col gap-4">
            <li className="flex items-center gap-4">
              <div className="relative mt-1 flex h-14 w-14 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-[#FACC00] dark:ring-0 md:h-24 md:w-24">
                <Image

                  className="rounded-3xl"
                  layout="fill"
                  objectFit="cover"
                  src={logoVU}
                  alt="logo vueling"
                />
              </div>
              <div className="flex w-full flex-col gap-1">
                <p className="w-full flex-none font-medium text-zinc-100 dark:text-zinc-100 md:text-[26px] md:font-bold">
                  Vueling Airlines
                </p>
                <div className="flex flex-wrap items-center justify-between gap-1">
                  <p className="text-sm text-zinc-100 dark:text-zinc-400 md:text-lg">
                    Front-end Developer
                  </p>
                  <p className="text-sm text-zinc-200 dark:text-zinc-400 md:text-base">
                    Mar 2023 - May 2023
                  </p>
                </div>
              </div>
            </li>
          </ul>
          <p className="mt-2 text-sm text-zinc-100 dark:text-zinc-300/90 sm:text-base md:pl-1 md:text-base">
            Vueling is a leading European airline in technological innovation, specializing in the development of web and software solutions to optimize the travel experience and operational efficiency. Its commitment to advanced technology and continuous improvement of its digital platforms stands out in the airline industry, offering users an exceptional and accessible flight experience.
          </p>
        </div>
        <div className="flex max-w-xl flex-1 flex-col rounded-2xl border border-indigo-400/70 p-6 shadow-inner transition-shadow duration-500 dark:border-zinc-700/40 dark:shadow-zinc-700/40 dark:hover:shadow-transparent md:gap-2">
          <div className="flex items-center gap-3">
            <SuitcaseIcon />
            <h2 className="flex text-lg font-semibold text-zinc-100 dark:text-zinc-100 md:text-xl">
              Responsibilities
            </h2>
          </div>
          <div className="mt-7 flex flex-col gap-4">
            <div className="flex w-full flex-col gap-1">
              <p className="w-full flex-none font-medium text-zinc-100 dark:text-zinc-100 md:text-[26px] md:font-bold">
                {/* OpenBootcamp */}
              </p>
              <p className="text-sm text-zinc-200 dark:text-zinc-400 md:text-lg">
                {/* Front-end Developer */}
              </p>
            </div>
          </div>
          <ul className="mt-2 flex list-disc flex-col gap-3 pl-5 text-zinc-100 dark:text-zinc-300/90">
            <li className="text-sm md:text-[15px]">
            Outstanding participation in the Angular Web Development course at Vueling University.
            </li>
            <li className="text-sm md:text-[15px]">
            Acquisition of solid knowledge in JavaScript and Typescript and its application in web application development.
            </li>
            <li className="text-sm md:text-[15px]">
            Practical experience in creating dynamic and attractive applications.
            </li>
            <li className="text-sm md:text-[15px]">
            Proficiency in integrating and consuming data from external services through APIs and the use of Postman for testing and debugging.
            </li>
          </ul>
        </div>
        
        


      </div>
    </div>
  )
}

export default Experience2
