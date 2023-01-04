import styled from "styled-components";
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {

    const facebookLogo = require('../tools/images/icons/facebook.svg')
    const instagramLogo = require('../tools/images/icons/instagram.svg')
    const twitterLogo = require('../tools/images/icons/twitter.svg')

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [telephone, setTelephone] = useState<string | number>('')
    const [message, setMessage] = useState<string>('')
    const [showAlert, setShowAlert] = useState<boolean>(false)


    // handleSubmit para enviar formulario
    // Le falta agregarle los caracteres para cada input, ya que no son iguales, nombre, tel, correo y msg

    const handleSubmit = (e : React.FormEvent) => {
        e.preventDefault()

        if (name !== "" && email !== "" && telephone !== "" && message !== "") {

            console.log('Here you add database where you send your form')
            setShowAlert(false)
            alert('Form was sent successfully')
            
        } else {
            setShowAlert(true)
        }
        setName('')
        setEmail('')
        setTelephone('')
        setMessage('')
        setTimeout(setShowAlert,3000)
    }
    
    return ( 
        <>
        <span id="contacto"></span>
        <span id="getintouch"></span>
            <FooterContainer className="col-12 m-0 d-flex flex-column">
                        <div className="row m-0 d-flex justify-content-center">
                            <div className="p-3 hide card col-3 m-0">
                                <h1>Think you can join me?</h1>
                                <p>You can send your info and Resume here:</p>
                                <p>example@example.com</p>
                                <a href="mailto:exmaple@example.com">Direct e-mail here</a>
                            </div>
                            <div className="card card-input col-6 m-0">
                                <h1>Get in touch</h1>
                                <form onSubmit={handleSubmit}>
                                    <input 
                                    className="inputname" 
                                    type="text" 
                                    name="nombre" 
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}/>  

                                    <input 
                                    className="inputcorreo" 
                                    type="text" 
                                    name="correo"   
                                    placeholder="E-mail"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}/>  

                                    <input 
                                    className="inputtel" 
                                    type="number" 
                                    name="telefono" 
                                    placeholder="Telephone"
                                    value={telephone}
                                    onChange={(e) => setTelephone(e.target.value)}/>

                                    <input 
                                    className="inputmsg"  
                                    type="text" 
                                    name="mensaje" 
                                    placeholder="Write your message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)} />

                                    
                                    <button type="submit">Send</button>

                                    {showAlert ?
                                    <div className="alert">You must complete all the fields to send your form</div>
                                    :
                                    <></>
                                    }

                                </form> 
                        </div>
                    </div>
            </FooterContainer>
        </>
     );
}
 
export default Footer;

const FooterContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .hide{ 
        @media (max-width: 991px) {
            display: none!important;
        }
    } 

    .row {
        width: 100%;
        gap: 5px;
    }

    .card {
        gap: 20px;
        border: none;        
        text-align: center;
        height: 50vh;
        background: ${props => props.theme.primary} ;
        color: ${props => props.theme.fontFour};
        border-radius: 0;
        padding: 10px;
   
        a {
            text-decoration: none;
            color: ${props => props.theme.fontFive};
        }
        h1 {
            display: inline;
            margin: 0;
            font-size: 30px;
        }
    }
    .card-input {
        justify-content: flex-start;

    @media (max-width: 991px) {
        width: 100%!important;
    }
    
        input {
            width: 70%;
            padding: 10px 0;
            padding-left: 10px;
            margin: 15px 0;
        }
        form {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center ;
            z-index: 20;
            
            button {
                margin-top: 15px;
                width: 20%;
                background-color: ${props => props.theme.fifth};
                border: 1px solid ${props => props.theme.primary};
                color: ${props => props.theme.fontPrim};
                &:hover {
                    background-color: ${props => props.theme.primary};
                    color: ${props => props.theme.fontFive};
                }
            }
        }
    }
    .social-media {
        height: 5vh;
        gap: 15px;
        a {
        img {
            height: 30px;
            &:hover {
                filter: invert(50%)
                }
            }
        }    
    }

    .signature {
        width: 100%;
        padding-right: 10px;
        text-align: right;
        color: ${props => props.theme.fontPrim};
        font-weight: bold;
        background-color: ${props => props.theme.primary};
        cursor: pointer;
        &:hover {
            color: ${props => props.theme.fontSecond};
        }
    }
    .alert {
        margin-top: 10px;
        color: ${props => props.theme.primary};
    }

`