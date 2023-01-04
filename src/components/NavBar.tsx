import styled from 'styled-components';
import { OffCanvasTop } from './OffCanvasTop';
import {ReactComponent as InstagramLogo} from '../tools/images/icons/instagram.svg'
import {ReactComponent as TwitterLogo} from '../tools/images/icons/twitter.svg'
import {ReactComponent as YouTubeLogo} from '../tools/images/icons/youtube.svg'
import {ReactComponent as HomeLogo} from '../tools/images/icons/home.svg'
import {ReactComponent as NoteLogo} from '../tools/images/icons/note.svg'


const MenuNav = () => {


  return (
    <MenuNavContainer>
            <a href="#">
            <HomeLogo/> 
            </a>
            {/* <a href="#aboutme">
              About Me
            </a> */}
            <div className="media">
              <a href="#youtubesect">
                <YouTubeLogo/></a>
            </div>
            <div className="media">
              <a href="#instagramsect">
                <InstagramLogo/></a>
            </div>
            <div className="media">
              <a href="#twittersect">
              <TwitterLogo/></a>
            </div>
            <a href="#contacto">
              <NoteLogo/> </a>
    </MenuNavContainer>
  );
}

export default MenuNav;

const MenuNavContainer = styled.div`
    width: 100%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
    flex-direction: column;
    p {
      text-align: center;
    }

    a {
      text-decoration: none;
        margin: 0;
        font-size: 20px;
        color: ${props => props.theme.fontTert};
        padding: 30px 0;
        cursor: pointer;

        &:hover > svg, &:active > svg{
          width: 33px;
          height: 33px;
        }
        &:hover{
          filter: invert(20%);
        }
    }
    
    .change {
    @media (max-width: 991px) {
        display: none;
      }
  }
  svg {
        filter: invert(100%);
        width: 30px;
        height: 30px;

        @media (max-width:991px) {
          width: 20px;
        }
      }
      .media {
        display: flex;
        flex-direction: row;
        &:hover {
            filter: invert(0%)
          }
      }
`

