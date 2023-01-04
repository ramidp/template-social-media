import { useEffect, useState } from "react";
import styled from "styled-components";
import {ReactComponent as YouTubeLogo} from '../../tools/images/icons/youtube.svg'


const YouTubeVideos = () => {

    const image = require('../../tools/images/youtubebanner2.jpg')

    // Base de Datos de Youtube.
    const baseUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3D'
    // useStates para obtener la info del canal. 
    const [videos, setVideos] = useState<Array<any>>([]);
    const [channelName, setChannelName] = useState('');

    // State que se usa para poner el canal. En este caso esta mi canal.
    const currentChannelId = 'UCbkC9UuWRxsnMVHmgExEVYQ' // Aca va el CHANNEL ID de Youtube

    useEffect(() => {
        (async () => {
            const data = await fetch (`${baseUrl}${currentChannelId}`)
            .then(response => response.json())
            setVideos(data.items); 
            setChannelName(data.items[0].author);
        })();
    },[]);

    return ( 
        <>      
        <span id="youtubesect"></span>  
        <YouTubeVideosContainer>
            {/* <img className="banner" src={image} alt="Channel's Banner" /> */}

            <div className="banner">
                <YouTubeLogo/>
            </div>

            <div className="videos-box">
                {videos.slice(0,8).map (video => 
                    (
                    <div key={video.guid} className="videos-items">
                        <div className="video_image">
                            <img src={`https://i4.ytimg.com/vi/${video.guid.split(':')[2]}/mqdefault.jpg`} alt="" />
                        </div>
                        <div className="footer">
                            <h3>{video.title}</h3>
                        </div>
                        <a className="a1"
                        rel="noreferrer"
                        href={video.link} target="_blank">
                            Watch
                        </a>
                    </div>
                    ))}

            </div>
                <a className="morebtn" href={`https://www.youtube.com/channel/${currentChannelId}`}
                target="_blank"
                rel="noreferrer">
                    Want to see more? {channelName}
                </a>
        </YouTubeVideosContainer>
        </>

    )
}
 
export default YouTubeVideos;

const YouTubeVideosContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
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


        .a1 {
            font-size: 1.25em;
            color: ${props => props.theme.fontPrim};
            width: 30%;
            text-align: center;
            border: none;
            text-decoration: none;
            border-radius: 10px;
            padding: 5px 0;
            &:hover {
                font-weight: bold;
            }
        }
        .morebtn {
            padding-bottom: 20px;
            width: 100%;
            font-size: 1.5em;
            color: ${props => props.theme.fontPrim};
            text-align: center;
            text-decoration: none;
            &:hover {
                font-weight: bold;
            }
            @media (max-width: 650px ) {
            font-size: 1em;
            }


        }

    .videos-box {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 3px;
        height: 70%;
        width: 100%;
        overflow: auto;

        .videos-items {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 3px;
            @media (max-width: 991px) {
                width: 35vw;
            }
            @media (max-width: 780px) {
                width: 40vw;
            }
            @media (max-width: 580px) {
                width: 70vw;
            }
            &:hover {
                box-shadow: -1px -1px 5px 7px rgba(0,0,0,0.08);
                background: ${props => props.theme.primary};
                h3 {
                    color: ${props => props.theme.fontFour};
                }
                .a1 {
                    color: ${props => props.theme.fontFour};
                } 
            }

            .video_image {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 5px;
                img {
                    height: 85%;

                    @media (max-width: 991px) {
                        width: 90%;
                        height: 90%;
                    }

                }
            }
        }
        .footer {
            padding-top: 10px;
            h3 {
                font-size: 1.25em;
                color: ${props => props.theme.fontPrim};
                text-align: center;
                margin: 0;
            }
        @media (max-width: 991px) {
            display: none;
            }
        }
    }
`