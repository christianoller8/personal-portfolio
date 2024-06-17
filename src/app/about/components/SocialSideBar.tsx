import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { IoMdMail } from 'react-icons/io'

function SocialSideBar () {
  return (
    <div className='lg:pl-20'>
      <ul className='flex flex-col gap-4' role='list'>
        <li className='flex items-center'>
          
        </li>
        <li className='flex items-center'>
          <a
            target='_blank'
            href='https://github.com/christianoller8'
            className='group flex text-sm font-medium text-zinc-200 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500'
            rel='noreferrer'
          >
            <BsGithub className='h-5 w-5 flex-none fill-zinc-200 transition group-hover:fill-teal-500 dark:fill-zinc-500' />
            <span className='ml-4'>Follow on GitHub</span>
          </a>
        </li>
        <li className='flex items-center'>
          <a
            target='_blank'
            href='https://www.linkedin.com/in/christian-oller/'
            className='group flex text-sm font-medium text-zinc-200 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500'
            rel='noreferrer'
          >
            <BsLinkedin className='h-5 w-5 flex-none fill-zinc-200 transition group-hover:fill-teal-500 dark:fill-zinc-500' />
            <span className='ml-4'>Follow on LinkedIn</span>
          </a>
        </li>
        <li className='flex items-center'>
          <a
            target='_blank'
            href='mailto:christianoller.dev@gmail.com'
            className='group flex text-sm font-medium text-zinc-200 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500'
            rel='noreferrer'
          >
            <IoMdMail className='h-5 w-5 flex-none fill-zinc-200 transition group-hover:fill-teal-500 dark:fill-zinc-500' />
            <span className='ml-4'>christianoller8@gmail.com</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SocialSideBar
