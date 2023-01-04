import React, { useEffect } from "react";
import { useState } from "react";

const Context = React.createContext({});

type Types = {
    videos: unknown[],
    channelName: string,
    currentChannelId: string, 
    children: any;
}

const ContextSocialMedia = ({children} : Types) => {

    const baseUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3D'
    const [videos, setVideos] = useState(['']);
    const [channelName, setChannelName] = useState('');
    const [currentChannelId, setcurrentChannelId] = useState('UCN1uKoxszK8mgaMvT4dBAcw') // Aca va el CHANNEL ID de Youtube

    useEffect(() => {
        (async () => {
            const data = await fetch (`${baseUrl}${currentChannelId}`)
            .then(response => response.json())
            setVideos(data.items); 
            setChannelName(data.items[0].author); 
        })();
    },[]);


    return ( 
        <Context.Provider
        value={{videos, channelName, currentChannelId }}>
            {children}
        </Context.Provider>
     );
}
 
export {ContextSocialMedia, Context};