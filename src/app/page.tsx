import FeaturedProjects from '@/components/FeaturedProjects'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import SkillsBoard from '@/components/SkillsBoard'
import Experience from '@/components/Experience'
import Experience2 from '@/components/Experience2'
import Experience3 from '@/components/Experience3'
import Experience4 from '@/components/Experience4'
import Container from '@/components/Container'

export default function Home () {
  return (
    <Container>
      <Hero />
      <Experience />
      <Experience2 />
      <Experience3 />
      <Experience4 />
      {/* <FeaturedProjects /> */}
      <SkillsBoard />
      <Contact />
    </Container>
  )
}
