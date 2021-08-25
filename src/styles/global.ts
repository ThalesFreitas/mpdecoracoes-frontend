import {createGlobalStyle} from 'styled-components'




export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
:root {
    --white-gray: rgba(255, 255, 255, 0.5);

    --gray-100: #e1e1e6;
    --gray-200: #C4C4C4;
    --gray-300: #a8a8b3;
    --gray-800: rgba(168, 168, 179, 0.7);
    --gray-850: #29292E;

    --black: #121414;
    

    --yellow-500: #eba417;
    
}

//nenhum tema encontrado


/* @media (max-width: 1080px) {
    html {
        font-size: 93.75%;
    }
}

@media (max-width: 720px) {
    html {
        font-size: 87.5%;
    }
} */


html {
    font-size: 62.5%;// cada 1rem será considerado 10px
   
} 

 @media  (max-width: 490px) {
    html {
        font-size: 50%;
    }
} 

 @media  (max-width: 420px) {
    html {
        font-size: 55%;
    }
} 
@media  (min-width: 320px) and (max-width: 340px) {
    html {
        font-size: 40%;
    }
}
@media  (min-width: 341px) and (max-width: 360px) {
    html {
        font-size: 40%;
    }
}
@media  (min-width: 361px) and (max-width: 390px) {
    html {
        font-size: 50%;
    }
} 

/* @media  (max-width: 375px) {
    html {
        font-size: 40%;
    }
} */
/* @media  (max-width: 485px) {
    html {
        font-size: 55%;
    }
} */

//////////ate aqui

/* @media  (max-width: 320px) {
    html {
        font-size: 45%;
    }
}
@media (min-width: 321px) and (max-width: 330px) {
    html {
        font-size: 42%;
    }
}
@media (min-width: 331px) and (max-width: 340px) {
    html {
        font-size: 42%;
    }
}
@media (min-width: 341px) and (max-width: 350px) {
    html {
        font-size: 44%;
    }
}
@media (min-width: 351px) and (max-width: 360px) {
    html {
        font-size: 49%;
    }
}
@media (min-width: 361px) and (max-width: 370px) {
    html {
        font-size: 49%;
    }
}

@media (min-width: 371px) and (max-width: 400px)  {
    html {
        font-size: 50%;
    }
}
@media (min-width: 401px) and (max-width: 430px) {
    html {
        font-size: 50%;
    }
}

@media (max-width: 500px) {
    html {
        font-size: 50%;
    }
} */



body {
    background: var(--black);
    color: var(--white-gray);
    font-size: 62.5%;
    
}

body, input, textarea, select, button {
   font: 400 1rem "Roboto", sans-serif;
   
}

button {
    cursor: pointer;
}

a {
    //inherit => asssume a cor do elemento que ta por volta dele
    color: inherit;
    text-decoration: none;
}


.react-modal-overlay {
    
   
    //background: rgba(0,0,0, 0.5);
   /* background: var(--black); */
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center; 
    //margin-top: 5.1rem;
    
     
 }
 .react-modal-overlay-img{
    
   
    background: rgba(0,0,0, 0.5);
   /* background: var(--black); */
   
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center; 
    //margin-top: 5.1rem;
    
     
 }
 .react-modal-overlay-mobile{
    
   
    //background: rgba(0,0,0, 0.5);
   /* background: var(--black); */
   
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center; 
    //margin-top: 5.1rem;
    
     
 }
 .react-modal-overlay-information{
   
   //background: rgba(0,0,0, 0.5);
   //background: yellow;
   /* background: var(--black); */
   
   position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center; 
    //margin-top: 5.1rem;
   
   
   
    //margin-top: 5.1rem;
 
 }
 .react-modal-overlay-slug {
    
   
    background: rgba(0,0,0, 0.5);
   /* background: var(--black); */
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center; 
    //margin-top: 5.1rem;
    
     
 }

////////////////////////////
.react-modal-content {
    width: 100%;
     height: 100%; 
    max-width: 500px;
    max-height: 550px; 
    margin-top: auto;
    margin-bottom: 5.9rem;
    margin-left: auto;
    margin-right: 11rem;

    background: #29292E; 
    /* padding: 3rem; */
   
    position: relative;
    border-radius: 0.25rem;
 
   
}

.react-modal-content-img {
    width: 100%;
     height: 100%; 
    max-width: 405.5px;
    max-height: 370px; 
    margin-top: auto;
    margin-bottom: 23.7rem;
    margin-left: -14rem;
    

    background: #C4C4C4; 
    /* padding: 3rem; */
   
    position: relative;
    border-radius:  0 0 5px 5px; 
}

.react-modal-content-mobile {
    //position: fixed;
    width: 100%;
    height: 100%; 
    max-width: 180px;
    max-height: 170px; 
    //margin-top: auto;
    margin-right: auto;
    margin-left: 2.4rem;
    margin-bottom: auto;
    margin-top: 18rem;
   //padding: 1rem;
   
   // margin-bottom: -50rem;

   background: var(--gray-850); 
   outline: 0;
  
    /* padding: 3rem; */
   
    position: relative;
    border-radius:  0 0 7px 7px;
   


    @media (max-width: 639px) {
    width:100%;
    max-width: 210px;
    height: 100%;
    max-height: 190px;
    margin-left: 2.5rem;
    margin-bottom: 470px;
    padding: 1rem;
    padding-right: 3rem;
  
    }

    @media (max-width: 360px) {
    width:100%;
    max-width: 210px;
    height: 100%;
    max-height: 165px;
    margin-left: 2.5rem;
    margin-bottom: 500px;
    padding: 1rem;
    padding-right: 3rem;
  
    }

    @media (min-width: 640px) {
    display: none;
}

 
   
}

.react-modal-content-information {
    //position: fixed;
    width: 100%;
    height: 100%; 
    max-width: 580px;
    max-height: 100px; 
   
    margin-right:100vw;
    margin-left: 46vw;
   
   
    margin-bottom: 30vh;
    //margin-top: 17.5rem;
   
   
   // margin-bottom: -50rem;

   background: var(--gray-850); 
   outline: 0;
  
    /* padding: 3rem; */
   
    position: absolute;
    border-radius:  0 0 7px 7px;
 
   
}

.react-modal-content-slug {
    width: 100%;
     height: 100%; 
    max-width: 400px;
    max-height: 160px; 
    margin-top: auto;
    margin-bottom: auto;
   
    margin-right: 11rem;

    background: var(--gray-300); 
    /* padding: 3rem; */
   
    position: relative;
    border-radius: 0.25rem;
    outline: 0;
    header {
        display: flex;
        //align-items: center;
        justify-content: space-between;
        
        padding: 1rem;

        div {
            padding: 1rem;
            width: 87%;
           
        }
        strong {
            font-size: 1.8rem;
        color: var(--black);
    }



       svg {
           width: 25px;
           height: 25px;
           color: var(--gray-850);
           transition: color 0.2s;
       
           &:hover {
               filter: brightness(0.5);
               color: var(--black);
               cursor: pointer;
           }
          
       }

    }

    .btn-container {
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
       
        
        //background: yellow;
        button {
            width: 75px;
            height: 37px;
            font-size: 1.8rem;
           
            border: none;
          margin-bottom: 1rem;
            border-radius: 0.25rem;
            margin-right: 3rem; 

            transition: color 0.2s;
       
       &:hover {
           filter: brightness(0.8);
           cursor: pointer;
       }
        }
        .btn-yes {
           color: var(--gray-850);
            background:rgb(0,179,101);
        }
            .btn-no {
                color: var(--gray-850);
                background:rgb(255,104,96);
            }
        

    }
   
 
   
}
`;
