import Head from 'next/head'
import About from '../components/About'
import Aboutt from '../components/Aboutt'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Javoh from '../components/Javoh'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Mugambi Javan</title>
        <meta name="description" content="I’m a Software Engineer" />
        <link rel="icon" href="/fav.png" />
      </Head>
    <Main />
    <About />
    <Aboutt />
    <Skills />
    <Projects />
    <Javoh />
    </div>
  )
}
