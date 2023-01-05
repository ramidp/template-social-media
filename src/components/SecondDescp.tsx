import { useState, useEffect } from "react";
import styled from "styled-components";
import {ReactComponent as YouTubeLogo} from '../tools/images/icons/youtube.svg'
import {ReactComponent as TwitterLogo} from '../tools/images/icons/twitter.svg'
import {ReactComponent as InstagramLogo} from '../tools/images/icons/instagram.svg'
import { Timeline, Tweet } from 'react-twitter-widgets'
import LikeCounter from "./LikeCounter";



const SecondDescp = () => {


    // Instagram Info
    const token_id = "IGQVJVcW8yTXAzVHh5MnUzdWo0d2sxb1NoZAktIaEotYlVnS1BhZAnRIUWhVMlREY0hXaWZAYeHFVVjhJQ3ZAwTWRaeS1aTXZAfV3VXWnVRN09NUEpraGZAkd3dMMVFGZAjg1Y25GOWlDbU90OXFscGRlUVZAycgZDZD"
    const user = "talestoldby"
    const baseUrl2 = `https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=${token_id}` 

    //YouTube Info
    const baseUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3D'
    const [videoTitle, setVideoTitle] = useState<string>('');
    const [videoLink, setVideoLink] = useState<string>('');
    const [videoThumbnail, setVideoThumbnail] = useState<string>('');
    const [currentChannelId, setCurrentChannelId] = useState<string>('UCbkC9UuWRxsnMVHmgExEVYQ') // Aca va el CHANNEL ID de Youtube

    useEffect(() => {
        (async () => {
            const data = await fetch (`${baseUrl}${currentChannelId}`)
            .then(response => response.json());
            
            setVideoTitle(data.items[0].title); 
            setVideoLink(data.items[0].link); 
            setVideoThumbnail(data.items[0].thumbnail); 
        })();
    },[currentChannelId]);


    const [id, setId] = useState<string>('');
    const [mediaURL, setMediaURL] = useState<string>('');
    const [caption, setCaption] = useState<string>('');

    useEffect(() => {
        (async () => {
            const items = await fetch(baseUrl2)
            .then(response => response.json());
            setId(items.data[0].id)
            setMediaURL(items.data[0].media_url)
            setCaption(items.data[0].caption)
        })();
    },[baseUrl2]);



    return (
        <SecondDescpContainer>
                {/* <Logo src={logo} alt="" /> */}
                        <h3 className="m-0">LASTESTS SOCIAL MEDIA MOVEMENT</h3>
                        {/* <LikeCounter/> */}
                    <div className="news-box">
                        <div className="news-video">
                                <YouTubeLogo/>
                                <a className="btn"
                                rel="noreferrer"
                                href={videoLink} target="_blank">
                                    Watch
                                </a>
                                <h1 className="video-title m-0">{videoTitle}</h1>
                                <img className="video-thumbnail"src={videoThumbnail} alt="" />
                        </div>
                        <div className="news-video">
                                <InstagramLogo/>
                            <a 
                            target="_blank"
                            href={`https://www.instagram.com/${user}`}>@{user}</a>
                            <div className="insta-card-box">
                                <div key={id} className="insta-card">
                                    <img src={mediaURL} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="news-video">
                            <TwitterLogo/>
                            {/* <Timeline
                            dataSource={{
                                sourceType: 'profile',
                                screenName: 'Rojankhzxr',
                            }}
                            options={{
                                height: '400',
                                width: '400',
                                tweetLimit: '1',
                                chrome: 'noheader nofooter noscrollbar'
                            }}
                            /> */}
                        </div>
                    </div>
        </SecondDescpContainer>
    );
}
 
export default SecondDescp;


const SecondDescpContainer = styled.div`
    height: 72%;
    width: 95%;
    display: flex;
    padding-top: 30px;
    align-items: center;
    justify-content: center;
    z-index: 1;
    gap: 10px;
    flex-direction: column;
    background-color: ${props => props.theme.primary};

        h3 {
        font-weight: bold;
        text-align: center;
        color: ${props => props.theme.fontFour};
        width: 90%;
        padding-bottom: 5px;
        border-bottom: 2px solid ${props => props.theme.fontFour};
            @media (max-width: 550px) {
                font-size: 1.2em;
            }
        }
    .news-box {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        gap: 3px;
        padding: 0 10px;

        @media (max-width: 991px) {
            flex-direction: column;
            width: 100%;
            padding-top: 0px;

        }

        .news-video {
            width: 33vw;
            padding: 10px;
            text-align: center;
            height: 55vh;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            background: ${props => props.theme.primary};


            @media (max-width: 991px) {
            height: 18vh;   
            width: 100%;
            flex-direction: row;
            justify-content: space-between;
            gap: 20px;
            }

            &:hover {
                /* box-shadow: -1px -1px 5px 7px rgba(0,0,0,0.08); */
                /* filter: contrast(70%); */
                border: 1px solid #a1a0a0;
            }

            h3 {
                color: ${props => props.theme.fontPrim};
                font-size: 1.5em;
                margin: 0;
            }
            a {
                text-decoration: none;
                padding: 0;
                color: ${props => props.theme.fontFour};
                font-size: 20px;
                &:hover {
                    font-weight: bold;
                }
            }
            .video-thumbnail {
                margin-top: 15px;
                width: 70%;
                object-fit: scale-down;

                @media (max-width: 991px) {
                    height: 100%; 
                    margin-top: 0;
                }

            }
            .video-title {
                color: ${props => props.theme.fontFour};
                font-size: 30px;
                @media (max-width: 991px) {
                    display: none;
                }
            }
        }
    }
    svg {
        filter: invert(100%);
        height: 50px;
    }

    .insta-card-box {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        @media (max-width: 991px) {
                width: 50%;
                margin-top: 0;
            }
        
        .insta-card {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            p {
                font-size: 15px;
            }
            img {
                padding: 10px;
                height: 100%;
                width: 50%;
                object-fit: cover;
                @media (max-width: 991px) {
                    height: 100%;
                    width: 100%;
                }
            }
        }
    }

`