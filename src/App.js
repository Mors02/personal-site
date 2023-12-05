import { Stack } from '@mantine/core';
import Header from './Components/Header';
import Projects from './Components/Projects';
import AboutMe from './Components/AboutMe';
import BimboAndMe from './Components/BimboAndMe';

function App() {
  return (
    <Stack className='bg-white-bg'>
      <Header />  
      <Projects />
      <AboutMe />
      <BimboAndMe />
    </Stack>  
  );
}

export default App;
