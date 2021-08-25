import  styled from 'styled-components' 


export const Container = styled.div`


    margin-left: 1rem;
    width: 100%;
    max-width: 42rem;
    height: 80%;
    //background: yellow; 
    display: flex; 
    align-items: center;
    justify-content: center;
   
 
 
    .select_page_first {
    //background: green;
    font-size: 1.8rem;
    align-items: center;
    margin-left: 10px;
    transition: color 0.2s;
   
 
  
    &:hover {
        filter: brightness(0.7);
        cursor: pointer;
      }
      .removeselect_page_first{
    display:none;

  }

   

    
  }
 
  .page_first_pipe {
    margin-left: 15px;
    font-size: 1.8rem;
  }
  .arrow-left {
    
    color: var(--yellow-500);
    margin-left: 10px;
    height:2.8rem;
    width:3rem; 
    transition: color 0.2s;
    &:hover {
        filter: brightness(0.7);
        cursor: pointer;
      }
  }
  .arrow-right {
    
    color: var(--yellow-500);
    margin-left: 10px;
    height:2.8rem;
    width:3rem;
    transition: color 0.2s;
    &:hover {
        filter: brightness(0.7);
        cursor: pointer;
      }
  }
    
   
  
  .number_of_pages {
    //background: green;
    margin-left: 3px;
    display: flex;
    width: 13.5rem;
    padding-right: 8px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  
    font-size: 1.8rem;
   
   
  
    & div {
     
      margin-left: 10px;
      color: var(--yellow-500);
      transition: color 0.2s;
     
  
      &:hover {
        filter: brightness(0.7);
        cursor: pointer;
      }
    }
  
    .current {
    
      font-size: 1.8rem;
      color: var(--white-gray);
      transition: color 0.2s;
      &.active{
       
        color: var(--yellow-500);

      &::before{
        content: '[';
        padding: 5px;
      }
      &::after {
        content: ']';
        padding: 5px;
      }
        
    }

    }
    }
   
   
    .last_page {
      //background: red;
      margin-left: 15px;
      transition: color 0.2s;
      font-size: 1.8rem;
      &:hover {
        filter: brightness(0.7);
        cursor: pointer;
      }
  
    }
    .page_first_pipe-rigth {
      margin-left: 10px;
      font-size: 1.8rem;
    }
  
    .page-inactive-next{
      display: none;
    }
    .page-inactive-ult {
      display: none;
    }


    .pagination__item--active{
            background: var(--yellow-500);
            
          }


// # Responsividade

// Screen 320px
@media (max-width: 320px)  {
  .page_first_pipe {
    margin-left: 10px;
    
  }
  .arrow-left {
    
    color: var(--yellow-500);
    margin-left: 5px;
    height:2rem;
    width:3rem;
    transition: color 0.2s;
    &:hover {
        filter: brightness(0.7);
        cursor: pointer;
      }
  }
  .arrow-right {
    
    color: var(--yellow-500);
    margin-left: 12px;
    height: 2rem;
    width:3rem;
    transition: color 0.2s;
    &:hover {
        filter: brightness(0.7);
        cursor: pointer;
      }
  }
  .page_first_pipe-rigth {
      margin-left: 5px;
      
    }
  
    
  }
      
`;


