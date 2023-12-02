import { Stack } from '@mantine/core';
import Header from './Components/Header';
import Projects from './Components/Projects';
import AboutMe from './Components/AboutMe';

function App() {
  return (
    <Stack className='bg-white-bg'>
      <Header />  
      <Projects />
      <AboutMe />  
    </Stack>  
  );
}

export default App;
