import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


const LikeCounter = () => {
    
    

    // How to save a countdown with LocalStorage and transforming it into integer
    const [counter, setCounter] = useState(() => {
        
        const saved = localStorage.getItem("counter");

        const initialValue = JSON.parse(saved);

        return initialValue;
    })
    
    parseInt(localStorage.setItem('counter', JSON.stringify(counter)))

    const handleBtn = () => {
        setCounter(counter + 1)
    }
    



    return ( 
        <LikeCounterContainer>
            <h1>Counter: {counter}</h1>
            <button onClick={handleBtn}>Like</button>
        </LikeCounterContainer>
     );
}
 
export default LikeCounter;


const LikeCounterContainer = styled.div`
    display: flex;
    h1 {
        font-size: 30px;
        padding: 0 20px;
        color: white;
    }
    
`