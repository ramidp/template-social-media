import styled from "styled-components";

const NameInfoBrand = () => {
    return ( 
        <NameInfoBrandContainer>
           <div className="row p-0">
                <div className="brandsubcontainer p-0">
                    <h2>Logo</h2>
                    <h1>Ramiro De Palo</h1>
                </div>
            </div>
        </NameInfoBrandContainer>
     );
}
 
export default NameInfoBrand;


const NameInfoBrandContainer = styled.div`
    width: 33%;

    .brandsubcontainer {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;

            h1, h2 {
                margin: 0;
                color: ${props => props.theme.fontPrim};
            }

    }

`