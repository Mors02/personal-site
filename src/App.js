import { Stack } from '@mantine/core';
import Header from './Components/Header';
import Projects from './Components/Projects';
import { Container } from '@mantine/core';

function App() {
  return (
    <Stack className='bg-white-bg'>
      <Header />  
      <Projects />
      <Container className="mt-[500px]" id="about-me">
        asdasdasd
      </Container>  
    </Stack>  
  );
}

export default App;
