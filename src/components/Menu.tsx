import styled from "styled-components";
import MenuHide from "./MenuHide";
import MenuMobile from "./MenuMobile";
import React from 'react'


const Menu = () => {


    return ( 
        <MenuContainer>
                    <div className="">
                        <MenuMobile/>
                        {/* <MenuHide/> */}
                    </div>
        </MenuContainer>
     );
}
 
export default Menu;

const MenuContainer = styled.div`
    padding: 0;
    margin: 0;
    z-index: 100;
    `
    