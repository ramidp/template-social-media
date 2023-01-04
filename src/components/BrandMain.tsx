import styled from "styled-components";
import Fondo from "./Wallpaper";

// const logo = require('../images/ikkenailogo.png')

const BrandMain = () => {

    return (
        <BrandMainContainer>
            {/* <Fondo/> */}
            <span id="main"></span>
            <div className="brand-logo">
                {/* <Logo src={logo} alt="" /> */}
                <div className="brand-info m-0 p-4">
                    <h3>BRAND DESCRIPTION / Logo / Name</h3>
                    <p className="m-0 p-0">
                        Need a website to focus on your influencing brand? You can upload all your stuff here. Last Youtube video,
                        Instagram feeds, News about yourself and your ambient, and of course you can get more subscribers in this web
                        and your Social media as well.
                    </p>
                </div>
            </div>
        </BrandMainContainer>
    );
}
 
export default BrandMain;


const BrandMainContainer = styled.div`
    height: 23%;
    width: 95%;
    /* background: ${props => props.theme.primary}; */
    display: flex;
    justify-content: center;
    align-items: center;

    h3 {
        text-align: center;
        font-weight: bold;
        color: ${props => props.theme.fontFour};
        padding-bottom: 5px;
        width: 90%;
        border-bottom: 2px solid ${props => props.theme.fontFour};
        @media (max-width: 991px) {
            border: none;

        }
    }

    .brand-logo {
        width: 100%;
        height: 90%;
        display: flex;
        justify-content: center;
        z-index: 1;
        background: ${props => props.theme.primary};
        p {
            font-size: 1.5em;
            color: ${props => props.theme.fontFour};
            z-index: 1;
        @media (max-width: 991px) {
            font-size: 1em;
        }
    }
    .brand-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        p {
            @media (max-width: 1120px) {
                font-size: 20px; 
            }
            @media (max-width: 730px) {
                display: none;
            }
        }
    }
}
`

const Logo = styled.img`
    height: 50%;

`