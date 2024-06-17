import type { Project } from '@/app/types'

export const projects: Project[] = [
  {
    id: 1,
    name: 'Mapbox App',
    stack: [
      {
        name: 'Angular',
        color: 'dark:border-red-500/40'
      },
      {
        name: 'MapBoxAPI',
        color: 'dark:border-teal-200/40'
      },
      {
        name: 'Bootstrap',
        color: 'dark:border-purple-500/40'
      },
      {
        name: 'TypeScript',
        color: 'dark:border-blue-500/40'
      },
    ],
    description:
      "An interactive mapping website utilizing Mapbox technology to create detailed and customizable maps. This project demonstrates the integration of advanced mapping features and spatial data visualization, catering to users' specific mapping needs.",
      img: '/map-project.png',
    url: 'https://angular-map-app.vercel.app/maps/fullscreen',
    progress: false,
    date: 'April 2024'
  },
  {
    id: 2,
    name: 'Marvel App',
    stack: [
      {
        name: 'Angular',
        color: 'dark:border-red-500/30'
      },
      {
        name: 'Bootstrap',
        color: 'dark:border-purple-500/30'
      },
      {
        name: 'API Rest',
        color: 'dark:border-green-400/30'
      }
    ],
    description:
      "A dynamic website dedicated to the Marvel universe, showcasing heroes, villains, and major events. This site offers character profiles, comic book histories, and multimedia content, celebrating the rich and diverse world of Marvel Comics.",
      img: '/marvel-project.png',
    url: 'https://marvel-api-cov.vercel.app/login',
    progress: false,
    date: 'January 2024'
  },
  {
    id: 3,
    name: 'Heroes App',
    stack: [
      {
        name: 'Angular',
        color: 'dark:border-red-400/40'
      },
      {
        name: 'TypeScript',
        color: 'dark:border-blue-500/40'
      },
      {
        name: 'Angular Material',
        color: 'dark:border-red-700/40'
      }
    ],
    description:
      "A creative platform where users can list and create their own superheroes. This website includes tools for designing superhero profiles, complete with powers, backstories, and visual elements. It provides a fun and interactive way for fans to engage with the superhero genre.",
      img: '/heroes-project.png',
    url: 'https://angular-heroes-cov.vercel.app/auth/login',
    progress: false,
    date: 'November 2023'
  },
  {
    id: 4,
    name: 'Pokemon GRAPHQL',
    stack: [
      {
        name: 'Bootstrap',
        color: 'dark:border-purple-50/40'
      },
      {
        name: 'TypeScript',
        color: 'dark:border-blue-500/40'
      },
      {
        name: 'Angular',
        color: 'dark:border-red-400/40'
      },
      {
        name: 'GRAPHQL',
        color: 'dark:border-gray-500/40'
      }
    ],
    description:
      "A comprehensive Pokédex website for Pokémon enthusiasts, featuring detailed information on all Pokémon species. This site provides stats, abilities, and evolutionary paths, serving as an essential resource for trainers and fans alike.",
      img: '/poke-project.png',
    url: 'https://pokemonapi-angular-graph.vercel.app/',
    progress: false,
    date: 'August 2023'
  },
  {
    id: 5,
    name: 'Angular Gifs App',
    stack: [
      {
        name: 'TypeScript',
        color: 'dark:border-blue-500/40'
      },
      {
        name: 'Angular',
        color: 'dark:border-red-400/40'
      },
      {
        name: 'Bootstrap',
        color: 'dark:border-purple-300/40'
      }
    ],
    description:
      "A user-friendly website for searching and discovering GIFs. This site allows users to find the perfect GIF for any occasion, offering a wide range of categories and an intuitive search function to quickly locate animated images that suit their needs.",
      img: '/gifs-project.png',
    url: 'https://gifs-angular-cov.vercel.app/',
    progress: true,
    date: 'June 2023'
  },
  {
    id: 6,
    name: 'Star Wars Smugglers',
    stack: [
      {
        name: 'Angular',
        color: 'dark:border-red-50/40'
      },
      {
        name: 'TypeScript',
        color: 'dark:border-blue-500/40'
      },
      {
        name: 'Bootstrap',
        color: 'dark:border-purple-400/40'
      }
    ],
    description: "An interactive website dedicated to Star Wars Smugglers, featuring character bios, storyline details, and multimedia content. This project captures the adventurous spirit of the Star Wars universe, allowing fans to dive deeper into the world of smugglers and scoundrels.",
    img: '/starwars-project.png',
    url: 'https://starwars-smugglers.vercel.app/',
    progress: true,
    date: 'April 2023'
  },
  {
    id: 7,
    name: 'Futbol Club Barcelona Teamline',
    stack: [
      {
        name: 'CSS',
        color: 'dark:border-yellow-500/40'
      },
      {
        name: 'Bootstrap',
        color: 'dark:border-purple-400/40'
      },
      {
        name: 'Sass',
        color: 'dark:border-rose-500/30'
      },
    ],
    description:
    "A fan-made website for FC Barcelona featuring the first team template. This site includes player profiles, match schedules, and the latest news, all designed to celebrate and support one of the world's most iconic football clubs.",
    img: '/fcb-project.png',
    url: 'https://fcb-first-team.vercel.app/players',
    progress: false,
    date: 'March 2023'
  },
  {
    id: 8,
    name: 'My Personal Portfolio',
    stack: [
      {
        name: 'Next.js',
        color: 'dark:border-zinc-50/40'
      },
      {
        name: 'Headless UI',
        color: 'dark:border-cyan-400/40'
      },
      {
        name: 'Framer Motion',
        color: 'dark:border-rose-400/40'
      },
      {
        name: 'Tailwind',
        color: 'dark:border-sky-400/40'
      }
    ],
    description:
      "A personal portfolio website showcasing my skills, projects, and experience in web development. This site is designed to reflect my professional journey and provide potential clients and employers with an overview of my capabilities.",
    img: '/portfolio-project.png',
    url: '',
    progress: false,
    date: 'Since January 2024'
  }
]
