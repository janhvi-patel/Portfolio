import React, {useState} from "react";
import './App.css';
import Fade from 'react-reveal/Fade';
import { Parallax } from 'react-parallax';
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from 'react-particles-js';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './pages/about/About';
import Skills from "./pages/skills/skills.component";
import Projectstimeline from "./components/projects-timeline/projectstimeline";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";
import Contact from "./pages/contact/contact";
import Brightness4OutlinedIcon from '@material-ui/icons/Brightness4Outlined';


const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  
  
  return (
    <>  
  <Particles
  className="partical-canvas"
    params={{
      particles: {
        number: {
          value:30,
          density: {
            enable: true,
            
          }
        },
        }
    }}

    
  />
 <Navbar />
 <Header />
 
 <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./Profile.jpg")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
        <Container className="container-box rounded">
          <hr />
          <Skills />
          <Projectstimeline />
      </Container>
      </div>
      <Contact />
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <button onClick={() => themeToggler()}><Brightness4OutlinedIcon /></button>
      </StyledApp>
    </ThemeProvider>
    
  
   </>
  );
}

export default App;
