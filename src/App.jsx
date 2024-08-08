import styled from 'styled-components'
import './App.css'
import Layout from './components/Layout'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'

const StyledApp = styled.div`
  background: url('02-home.avif') repeat scroll center center / cover;
  height: 100vh;
  background-color: #858384;

  &::before {
      content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: black;
        opacity: 0.4;
        z-index: 0;
        top: 0;
        left: 0;
    }
`

function App() {

  return (
    <StyledApp className=''>
      <Layout />
      <About />
      <Skills />
      <Projects />
    </StyledApp>
  )
}

export default App
