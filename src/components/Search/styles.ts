import styled from 'styled-components'



export const ContainerSearch = styled.div`
  
   position: relative;
   display: flex;
   align-items: center;
   justify-content: space-between;
   width:100vw;
   max-width: 330px;
   height: 100%;
   margin-left: 7.5rem;
   top: 0px;
  
   .MuiInputBase-root { //input principal
      
      width:100vw;
      max-width: 320px;
      height: 56px ;
      bottom: 7px;
      left: 5px;
      padding-top : 15px;
      padding-left: 2px;
      color: var(--white-gray);
      font-size: 1.8rem;
      outline: 0;
      border-bottom: 1px solid var(--gray-800);
     
  
      input:focus { //muda a cor do texto quando digitado 
         color: white;
         font-size: 1.8rem;
         
      }
      
   }

   .MuiInput-underline { //Cor da borda o input quando ta com foco
     
    
      &::after {
      content: '';
         border-bottom: 2px solid var(--yellow-500);
         margin-bottom: -2px;
      }
   }

   .MuiSvgIcon-root { //remove seta do input de busca
      display: none;
   }

   .button_search { //botao de busca de temas
      position: absolute;
      left: 300px;
      top: 18px;
      width: 2.2rem;
      height: 2.2rem;
      border: none;
      transition: color 0.2s;
     
      &:hover {
         cursor: pointer;
         filter: brightness(0.8);
      } 
}
   @media (max-width: 1120px) {
     left: 0px;
    
     height: 50px;
     top: 15px;
      .MuiInputBase-root { 
         top: 12px;
         left: 9px;
      }
      .button_search {
           top: 10px;
           left: 304px;
      }
   }
      @media (max-width: 840px) {
         top: 23px;
         left: -55px;
         max-width: 250px;
       
      

      .MuiInputBase-root {
         left: 5px;
         top: 12px;
         max-width: 240px;
         }
         .button_search {
            width: 1.9rem;
            height: 1.9rem;
            left: 222px;
            top: 15px;
      }
   }
   
   @media (max-width: 550px) {
   //background: red;
   top: 22px;
   left: -62px;
   .MuiInputBase-root { 
         top: 15px;
         left: 0px;
      }
      .button_search {
           top: 15px;
           left: 218px;
      }

   }

   @media  (max-width: 490px) {
      top: 22px;
      left: -52px;
      max-width: 180px;
      

   .MuiInputBase-root { 
         top: 15px;
         left: 0px;
         max-width: 170px;
      }
      .button_search {
           top: 20px;
           left: 152px;
      }

   }

 
  
   

     
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