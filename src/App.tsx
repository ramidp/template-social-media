import './App.css';
import BrandMain from './components/BrandMain';
import Menu from './components/Menu';
import Footer from './components/Footer';
import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import SecondDescp from './components/SecondDescp';
import YouTubeVideos from './components/products/Youtube';
import TwitterSection from './components/products/Twitter';
import InstagramSection from './components/products/Instagram';

function App() {

  const [theme, setTheme] = useState({
    primary: '#0d1e61',
    secondary: 'black',
    tertiary: '#c05050',
    fourth: 'white',
    fifth: '#f3f3f3',
    fontPrim: '#0d1e61',
    fontSecond: 'black',
    fontTert: '#c05050',
    fontFour: 'white',
    fontFive: '#f3f3f3',
    mainFont: "Red Hat Display", // Fuente 1
})

  return (
    <AppContainer>
      <ThemeProvider theme={theme}>
        <div className="menu">
            <Menu/>
        </div>
        <div className="center">
          <div className="brand-desc">
            <BrandMain/>
            <SecondDescp/>
          </div>
          <YouTubeVideos/>
          <InstagramSection/>          
          <TwitterSection/>
          <Footer/>
        </div>
    </ThemeProvider>
    </AppContainer>
);
}

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  .menu {
    width: 10%;
  }
  .center {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;

  }
  .brand-desc {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    width: 100%;
  }
`
