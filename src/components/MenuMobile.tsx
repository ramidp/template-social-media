import styled from 'styled-components'
import NavBar from './NavBar';


const MenuMobile = () => {
    return ( 
        <MenuMobileContainer>
            {/* <NameInfoBrand/> */}
            <NavBar/>
            {/* <SMedia/> */}
        </MenuMobileContainer>
     );
}

export default  MenuMobile;

const MenuMobileContainer = styled.div`
        width: 10%;
        min-width: 40px;
        position: fixed;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        flex-direction: column;
        background: linear-gradient(60deg, ${props => props.theme.fifth} 5%, ${props => props.theme.primary} 70%);

`