import React from 'react';
import styled from 'styled-components'


const wallpaper = require('../tools/images/wall1.jpg')


const Fondo = () => {
    return ( 
        <div className="p-0 m-0">
        <Img src={wallpaper} alt="" />
        </div>
     );
}
 
export default Fondo;


const Img = styled.img`
    position: absolute;
    z-index: -1;
    width: 88%;
    height: 100vh;
    object-fit: cover;
`