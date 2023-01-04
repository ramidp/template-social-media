import styled from 'styled-components'
import {useEffect, useState} from 'react'
import {ReactComponent as InstagramLogo} from '../../tools/images/icons/instagram.svg'


const InstagramSection = () => {

    const image = require('../../tools/images/instabanner.png') 

    const token_id = 'IGQVJVcW8yTXAzVHh5MnUzdWo0d2sxb1NoZAktIaEotYlVnS1BhZAnRIUWhVMlREY0hXaWZAYeHFVVjhJQ3ZAwTWRaeS1aTXZAfV3VXWnVRN09NUEpraGZAkd3dMMVFGZAjg1Y25GOWlDbU90OXFscGRlUVZAycgZDZD'
    
    const user = "talestoldby"

    const baseURL = `https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=${token_id}` 

    const LOCAL_STORAGE_KEY = 'posts'

    const [posts, setPosts] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [])

    useEffect(() => {
        (async () => {
            const items = await fetch(baseURL)
            .then(response => response.json());
            setPosts(items.data)
        })();
    },[]);



    return (
        <>
        <span id="instagramsect"></span>
        
            <InstagramContainer>
            <div className="banner">
                <InstagramLogo/>
            </div>

            <div className="insta-card-box">
                {posts.slice(0,10).map(post =>
                (
                    <div key={post.id} className="insta-card">
                        <a href={`https://www.instagram.com/${user}`} target="_blank">
                        <img src={post.media_url} alt="" />
                        {/* <p className='ig_title'>{post.caption}</p> */}
                        </a>
                    </div>
                ))}

            </div>

            <a 
            className="btn"
            target="_blank"
            href={`https://www.instagram.com/${user}`}>Want to see more? @{user}</a>
            </InstagramContainer>
        </>
     );
}
 
export default InstagramSection;

const InstagramContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

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
    
    .btn {
        width: 100%;
        font-size: 1.5em;
        text-decoration: none;
        padding-bottom: 20px;
        color: ${props => props.theme.fontPrim};
        &:hover {
            font-weight: bold;
        }
        @media (max-width: 650px ) {
            font-size: 1em;
        }
    }

    .insta-card-box {
        width: 100%;
        height: 70%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 3px;

        .insta-card {
            width: 15vw;
            height: 30vh;
            display: flex;
            justify-content: center;
            flex-direction: column;
            
            &:hover {
                filter: contrast(80%);
                cursor: pointer;
            }
            a {
                p {
                    font-size: 13px;
                    overflow: auto;
                    height: 200px;
                }
                img {
                    height: 30vh;
                    width: 100%;
                    margin-bottom: 20px;
                    object-fit: cover;
                    margin: 0;
                    &:hover {
                        box-shadow: -1px -1px 5px 7px rgba(0,0,0,0.08);
                    }
                }
            }
        }
    }

`