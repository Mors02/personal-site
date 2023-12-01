import { Stack } from '@mantine/core';
import Header from './Components/Header';
import Projects from './Components/Projects';
import { Container } from '@mantine/core';
import AboutMe from './Components/AboutMe';

function App() {
  return (
    <Stack className=''>
      <Header />  
      <Projects />
      <AboutMe />      
    </Stack>  
  );
}

export default App;
