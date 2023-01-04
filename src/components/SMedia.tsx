import styled from "styled-components";
import {ReactComponent as FacebookLogo} from '../tools/images/icons/facebook.svg'
import {ReactComponent as InstagramLogo} from '../tools/images/icons/instagram.svg'
import {ReactComponent as TwitterLogo} from '../tools/images/icons/twitter.svg'
import {ReactComponent as YouTubeLogo} from '../tools/images/icons/youtube.svg'

const SMedia = () => {

    return ( 
        <SMediaContainer>
                <FacebookLogo/>
                <InstagramLogo/>
                <TwitterLogo/>
                <YouTubeLogo/>
        </SMediaContainer>
     );
}
 
export default SMedia;

const SMediaContainer = styled.div`
    margin: 0 auto;

    svg {
        filter: invert(100%);
        padding: 5px;
        width: 50px;
        cursor: pointer;
        &:hover {
            filter: invert(0%);
        }
    }
    
`