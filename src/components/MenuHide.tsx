import styled from "styled-components";



const MenuHide = () => {


    return ( 
        <MenuHideContainer>
            <div className="submenu">
                <a href="#product1"><h3>Tapeo</h3></a>
                <a href="#product2"><h3>LPM</h3></a>
                <a href="#product3"><h3>CDT</h3></a>
            </div>
        </MenuHideContainer>
     );
}
 
export default MenuHide;

const MenuHideContainer = styled.div`
    .submenu {
        padding-right: 100px;
        display: flex;
        justify-content: flex-end;
        background-color: ${props => props.theme.primary};
        a {
            text-decoration: none;
            padding: 10px 15px;
            h3 {
                font-size: 15px;
                color: ${props => props.theme.fontPrim};
                &:hover {
                    color: ${props => props.theme.fontSecond};
                }
        }
    }
@media (max-width: 991px) {
    display: none;
}
}
`