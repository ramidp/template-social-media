import styled from "styled-components";
import { Timeline, Tweet } from 'react-twitter-widgets'
import { eagerLoadTwitterLibrary } from "react-twitter-widgets";
import {useState, useEffect} from 'react'
import {ReactComponent as TwitterLogo} from '../../tools/images/icons/twitter.svg'



const TwitterSection = () => {

    eagerLoadTwitterLibrary();

    const [width, setWidth] = useState(1200);
    const [height, setHeight] = useState(700);

    return ( 
        <>      
        <span id="twittersect"></span>
        <TwitterContainer>
        <div className="banner">
                <TwitterLogo/>
            </div>
        {/* <Tweet tweetId="1508956003852824584" 
        /> */}
            <div className="timelimetw">
            {/* <Timeline
                dataSource={{
                    sourceType: 'profile',
                    screenName: 'Rojankhzxr',
                }}
                options={{
                    height: `${height}`,
                    width: `${width}`,
                    tweetLimit: '3',
                    chrome: 'noheader nofooter noscrollbar',
                    dnt: 'false'
                }}
                /> */}
            </div>
        </TwitterContainer>
        </>

    )
}
 
export default TwitterSection;

const TwitterContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;
    align-items: center;
    flex-direction: column;
    background-color: ${props => props.theme.fourth};

    .banner {
        background-color: ${props => props.theme.primary};
        width: 100%;
        height: 15%;
        display: flex;
        align-items: center;
        svg {
            padding-left: 10%;
            height: 80%;
            filter: invert(100%);
            }
        }

    .timelinetw {
        width: 100%;
        height: 70%;
    }
`