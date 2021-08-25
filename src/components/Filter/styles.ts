import styled from 'styled-components';

export const Container = styled.div`



    width: 100vw;
    max-width: 690px;
    
     height: 60px;
    //margin: 20px 25px; 

   
   
`


export const Content = styled.div`
 

        .menu_hamburguer{
            //background: red;
            display: block;
            width: 100%;
            max-width: 5rem;
            height: 100%;
            max-height: 3.5rem;
            margin-left: 2rem;
           
           
  
 
 
      .one{
        width: 3rem;
        height: 2px;
        border-radius: 5px;
        margin-top: 0.7rem;
        background: var(--white-gray);
       
      }
     
      .two{
        width: 3rem;
        height: 2px;
        border-radius: 5px;
        margin-top: 0.6rem;
        background: var(--white-gray);
      }
     

      .three{
        width: 3rem;
        height: 2px;
        border-radius: 5px;
        margin-top: 0.6rem;
        background: var(--white-gray);
      }
     
      @media (max-width: 639px) {
        transition: color 0.2s; 
        &:hover {
        filter: brightness(0.7);
        cursor: pointer;
      }

      }

      @media (max-width: 639px) {
        .active{
            
            background: var(--yellow-500);
        }
         
  }


        
    }

    display: flex;
    align-items: center;
    width: 100%;
    max-width: 670px;
    height: 60px;
    //margin: 20px 25px; 
   
   
  
   //background: var(--gray-850); 
   
    
    
svg {
  width: 100%;
  max-width: 3.5rem;
  height: 100%;
  max-height: 3.5rem;
  margin-left: 2rem;
  cursor: pointer;
  transition: color 0.2s;
  
  &:hover {
        filter: brightness(0.7);
        cursor: pointer;
      }

     
}

    h3 {
       
        font-size: 2.3rem;
        color: var(--yellow-500);
        margin-left: 0.2rem
      
}

select {
    margin-left: 1.5rem;
    width: 100%;
    max-width: 120px;
    height: 37px;
    font-size: 1.8rem;
    text-align: start;
    padding-left: 8px;
    background: var(--gray-800);
    border-radius: 4px;
    border: none;
    font-weight: bold;
    outline: 0;

    transition: color 0.2s;
    &:hover {
            filter: brightness(0.7);
            cursor: pointer;
        }


    &  + select {
        margin-left: 1.8rem;
    }
    



    @media (max-width: 639px) {
       display: none;
         
  }



}
option {
    background: var(--gray-800);
}

#itemspage {
    width: 100%;
    max-width: 193px;
    height: 37px;
}
.activeoption {
    background: #eba417;
}

@media (min-width: 640px) and  (max-width: 648px) {
        #itemspage {
            
    width: 100%;
    max-width: 180px;
   
}
    } 
/* @media (max-width: 1024px)  {
    
    
   
    width: 100%;
    max-width: 990px;
    margin-left: 8px;
   
    svg {
  width: 100%;
  max-width: 27px;
  height: 100%;
  max-height: 27px;
  margin-left: 10px;
}

    h3 {
       
        font-size: 1.8rem;
        color: var(--yellow-500);
        margin-left: 10px;
       
    }

select {
    margin-left: 1.5rem;
    width: 100%;
    max-width: 100px;
    height: 37px;
    font-size: 1.5rem;
    text-align: start;
    padding-left: 8px;
    background: var(--gray-800);
    border-radius: 4px;
    border: none;
    font-weight: bold;

    &  + select {
        margin-left: 1.6rem;
    }
   
}
option {
    background: var(--gray-800);
}

#itemspage {
    width: 100%;
    max-width: 193px;
    height: 37px;
}
.activeoption {
    background: #eba417;
}
  } */

/* @media (max-width: 768px) {
    html {
        font-size: 50%;
    }

    h3 {
       
       font-size: 2rem;
       color: var(--yellow-500);
       margin-left: 10px;
      
   }


} */
/* @media (max-width: 640px) {
   
    width: 100%;
    height: 35px;
    background: none;
   margin-left: 5px;

    svg {
    width: 100%;
    max-width: 30px;
    height: 100%;
    max-height: 30px;
    margin-left: 0px;
  }

} */
   


`;

export const ContainerModal = styled.div`

display: block;
  
    

  
      h3 {
         
          font-size: 1.8rem;
          color: var(--yellow-500);
          margin-left: 1rem;
          margin-top: 1rem;
         
      }
  
  select {
      margin-left: 1rem;
      margin-top: 1.5rem;
      width: 100%;
      max-width: 120px;
      height: 37px;
      font-size: 1.8rem;
      text-align: start;
      padding-left: 8px;
      background: var(--gray-800);
      border-radius: 4px;
      border: none;
      font-weight: bold;
      outline: 0;
  
      &  + select {
          margin-left: 1rem;
      }

     
     
  }


  option {
      background: var(--gray-800);
  }
  
  #itemspage {
      width: 100%;
      max-width: 193px;
      height: 37px;
  }
  .activeoption {
      background: #eba417;
  }
 
  @media (max-width: 320px) {
       
       select {
           width: 100%;
     max-width: 110px;
     height: 33px;
     padding-left: 5px;
     margin-top: 2rem;
    
       }
       #itemspage {
        width: 100%;
     max-width: 110px;
        
     }
     
    
      
   }

@media (max-width: 639px) {
    
    select {
        display: block;
        width: 100vw;
        max-width: 100%;
        padding-left: -1rem;
    }
    #itemspage {
        width: 100vw;
        max-width: 100%;
    }

    /* select {
        display: block;
        width: 100vw;
        max-width: 44.5%;
        padding-left: -1rem;
    }
    #itemspage {
        width: 100vw;
        max-width: 44.5%;
    } */
}

@media (min-width: 640px) {
 display: none;
}



`;

