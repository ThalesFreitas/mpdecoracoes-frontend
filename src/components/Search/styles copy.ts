import styled, {css} from 'styled-components'

const colorTypeVariations = {
   default: css`
    color: var(--yellow-500);
   `, 
   success: css`
    color: rgb(0,179,101);
   `, error: css`
   color: rgb(255,104,96);
   `,
};

interface ColorSearchProps {
   type?: 'success' | 'error' | 'default';
   
}


export const ContainerSearch = styled.div<ColorSearchProps>`

width:100vw;
max-width: 360px;
height: 100%;

margin-left: 7.5rem;

padding-top: 1rem;


.MuiInputBase-root {
   position: relative;
  
  width:100vw;
  max-width: 350px;
  //background: red;

  
       height: 5.6rem ;
       margin-left: 5px;
        
       padding-top : 12px;
       padding-left: 2px;
       color: var(--white-gray);
       border-bottom: 1px solid var(--gray-800) ; 
       font-size: 1.8rem;
       outline: 0;
       

   //muda a cor do texto quando digitado 
  input:focus {
   color: white;
   font-size: 1.8rem;
  }

 
}


.MuiInput-underline {
  
   &::before{
      content: '';
     display: none;
   }
 
   &::after {
     content: '';
      border-bottom: 2px solid var(--yellow-500);
     // ${(props) => colorTypeVariations[props.type || 'default']}
      margin-bottom: -2px;
    
   }
  
}

.MuiAutocomplete-endAdornment {
   font-size: 1.8rem;
   &::after {
      background:green;
      
   }
   
}
//remove seta do input de busca
.MuiSvgIcon-root {
   display: none;
}



.button_search {
 position: absolute;
 width: 2.2rem;
 height: 2.2rem;
 margin-left: 33rem;
 //margin-top: 1.2rem;
margin-top: -2.8rem;
   

   
   border: none;
  transition: color 0.2s;

  &:hover {
   filter: brightness(0.8);
  } 
}
//nenhuma opção encontrada



@media (max-width: 890px) {
   margin-left: 4rem;
   max-width: 280px;
  
   
   .MuiInputBase-root {
      max-width: 270px;
   }
   .button_search {
      margin-left: 25rem;
}

}

/* @media (max-width: 885px) {
   max-width: 280px;
  
   
   .MuiInputBase-root {
      max-width: 270px;
}
.button_search {
 margin-left: 2.5rem;
}
} */



@media (max-width: 800px) {
   margin-left: 4rem;
  
   //padding-top: 1.2rem;
   
}

@media (max-width: 765px) {
   margin-left: 4rem;
  
   padding-top: 1.7rem;

   .button_search {
}

}

@media (max-width: 700px) {
   margin-left: 4rem;
   //background: red;
   
   max-width: 250px;
   .MuiInputBase-root {
      max-width: 240px;
}
.button_search {
 margin-left: 221px;
}
}

@media (max-width: 450px) {
   margin-left: 4rem;
   //background: red;
   
   max-width: 210px;
   .MuiInputBase-root {
      max-width: 200px;
}
.button_search {
 margin-left: 18rem;
 margin-top: -2.8rem;
}
}

@media (max-width: 420px) {
   margin-left: 4rem;
   //background: red;
   
   max-width: 210px;
   .MuiInputBase-root {
      max-width: 200px;
}
.button_search {
 margin-left: 21rem;
 margin-top: -2.8rem;
}
}



 @media (max-width: 390px) {
   margin-left: 4rem;
   
   
   max-width: 180px;
   .MuiInputBase-root {
      max-width: 170px;
}
.button_search {
 margin-left: 19.3rem;
 margin-top: -2.8rem;
}
}
@media  (max-width: 360px) {
   max-width: 160px;
   
   .MuiInputBase-root {
      max-width: 150px;
}
.button_search {
 margin-left: 21.8rem;
 margin-top: -2.8rem;
}
}
@media  (max-width: 340px) {
   max-width: 160px;
   
   .MuiInputBase-root {
      max-width: 150px;
}
.button_search {
 margin-left: 21.8rem;
 margin-top: -2.8rem;
}
}

/* @media (max-width: 375px) {
   margin-left: 4rem;
   
   
   max-width: 180px;
   .MuiInputBase-root {
      max-width: 170px;
}
.button_search {
 margin-left: 17.5rem;
 margin-top: 1.3rem;
}
}
@media (max-width: 320px) {
   margin-left: 4rem;
   //background: red;
   
   max-width: 150px;
   .MuiInputBase-root {
      max-width: 140px;
}
.button_search {
 margin-left: 20.2rem;
 margin-top: 1.3rem;
}
} */

/* @media (min-width: 320px) and (max-width: 340px) {
  
   width: 100vw;
   max-width: 150px;
   min-width: 140px;
   background: red;
   margin-left: 30px;
   
   

   .MuiInputBase-root {
     
   width: 40vw;
   max-width: 140px;
   min-width: 140px;
   }

   .button_search {
     width: 2.2rem;
     height: 2.28rem;
     margin-left: 31px;
   
   }

  
}

@media (min-width: 341px) and (max-width: 580px) {
   //position: relative;
   display: flex;
   width: 100vw;
   max-width: 58.3%;
   min-width: 140px;
   background: red;
   margin-left: 30px;
  
  //padding-right: 10px;
   
   

   .MuiInputBase-root {
   
   width: 100vw;
   max-width: 46%;
   min-width: 140px;
   background: slateblue;
   

   
   }

    .button_search {
     position: absolute;
     width: 2.2em;
     height: 2.8em;
     margin-left: auto;
     margin-right: -2rem;
     //background: red;
     //margin-right: -6.9rem;
   
   } 


  
} */

///////////////error
/* @media (min-width: 581px) and (max-width: 515px) {
   width: 100vw;
   max-width: 26.6vw;
   min-width: 250px;
   
   margin-left: 5rem;
   background: red;
   

   .MuiInputBase-root {
     
   width: 40vw;
   max-width: 26.6vw;
   min-width: 240px;
   }

   .button_search {
     width: 22px;
     height: 28px;
   
   }
  
}

@media (min-width: 516px) and (max-width: 530px) {
   width: 100vw;
   max-width: 26.6vw;
   min-width: 250px;
   
   margin-left: 8rem;
   background: red;
   

   .MuiInputBase-root {
     
   width: 40vw;
   max-width: 26.6vw;
   min-width: 240px;
   }

   .button_search {
     width: 22px;
     height: 28px;
   
   }
  
}

@media (min-width: 531px) and (max-width: 569px) {
   width: 100vw;
   max-width: 26.6vw;
   min-width: 250px;
   
   margin-left: 9rem;
   background: red;
   

   .MuiInputBase-root {
     
   width: 40vw;
   max-width: 26.6vw;
   min-width: 240px;
   }

   .button_search {
     width: 22px;
     height: 28px;
   
   }
  
}
@media (min-width: 570px) and (max-width: 580px) {
   width: 100vw;
   max-width: 26.6vw;
   min-width: 250px;
   margin-left: 11rem;
  // background: red;
   

   .MuiInputBase-root {
     
   width: 40vw;
   max-width: 26.6vw;
   min-width: 240px;
   }

   .button_search {
     width: 22px;
     height: 28px;
   
   }
  
} */
///////////fim erro

/* @media (min-width: 581px) and (max-width: 640px) {
   width: 100vw;
   max-width: 26.6vw;
   min-width: 250px;
   margin-left: 11rem;
 

   .MuiInputBase-root {
   width: 40vw;
   max-width: 26.6vw;
   min-width: 240px;
   }

   .button_search {
     
     width: 22px;
   
     height: 28px;
   
   }
  
}


@media (min-width: 641px) and (max-width: 830px) {
   width: 100vw;
   max-width: 26.6vw;
   min-width: 300px;
   margin-left: 11rem;
   background: red;

   .MuiInputBase-root {
   width: 40vw;
   max-width: 26.6vw;
   min-width: 290px;
   }

   .button_search {
     
     width: 22px;
   
     height: 28px;
   
   }
  
}

@media (min-width: 831px) and (max-width: 900px) {
   width: 40vw;
   max-width: 26.6vw;
   min-width: 295px;
   //background: red;

   .MuiInputBase-root {
   width: 40vw;
   max-width: 26.6vw;
   min-width: 290px;
   }

   .button_search {
     
     width: 22px;
   
     height: 28px;
   
   }
} */

`;


export const NoneTheme = styled.div`
   font-size: 1.7rem;
   font-weight: bold;
   color: black;

`;

export const LinkTheme = styled.div`
 border-radius: 5px;
 width: 100%;
 div {
    width: 100%;
    color: var(--black);
    font-weight: bold;
    padding: 10px;
    font-size: 1.8rem;
   
}
&:hover{
   background: var(--gray-200);
   width: 100%;
   
}

@media (min-width: 320px) and (max-width: 1024px) {
   
   border-radius: 5px;
 width: 100%;
 div {
    width: 100%;
    color: var(--black);
    font-weight: bold;
    padding: 10px;
    font-size: 1.5rem;
   
}
&:hover{
   background: var(--gray-200);
   width: 100%;
   
}

}


`