import styled from 'styled-components'

export const ContainerLogged = styled.div`
   
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 2rem;
    padding-top: 0.5rem;
    margin-bottom: 15px;
  
    .user_name{
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      max-width: 180px;
      height: 100%;
      padding-bottom: 1.5rem;
      

      span {
        color: var(--gray-800);
        font-size: 1.8rem; 
      }
      a {
        
        color: var(--yellow-500);
        font-size: 1.8rem;
        transition: color 0.2s;

        &:hover {
            filter: brightness(0.8);   
        }
      }
   

    }
    .user_photo{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      max-width: 60px;
      height: 100%;
   
      
      a {
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        
        
        img{
          
          margin: 0 auto;
          //width: 5.4rem;
          width: 54px;
          height: 54px;
          //height: 5.4rem; 
          margin-top: -3px;
          border-radius: 50%;
          object-fit: contain;
          transition: color 0.2s;
          &:hover {
          filter: brightness(0.8);
          }

      }
      .no_photo{
        background:#C4C4C4 ;
        border-radius: 50%;
        width: 54px;
        height: 54px;
        color: #A8A8B3;
        transition: color 0.2s;
        margin-top: -7px;
        &:hover {
            filter: brightness(0.8);   
        }
      }
      }
     

      button {
        
        width: 5rem;
        height: 2rem;
        margin-top: 3px;
        margin-right: 5px;
        background: transparent; 
        border: transparent;
        color: var(--white-gray);
        font-size: 1.2rem;
        transition: color 0.2s;
        &:hover {
            filter: brightness(0.8);   
        }
      }

     
    }

    @media (max-width: 1120px) {
      .user_photo{
        margin-top: 10px;
        button {
         margin-top: -2px;
      }
      }
     
    }
    @media (max-width: 840px) {
    
    .user_name{
        margin-bottom:10px;
        span {
        font-size: 1.6rem;
        }
        a {
        font-size: 1.6rem;
        }
      }
    }
    @media (max-width: 725px) {
      //background: red;
      .user_name{
        padding: 0;
        //background: green;
        margin-bottom: auto;
        width: 140px;
        height: 100%;
        
        span {
        font-size: 1.5rem; 
        margin-top: -25px;
       
        }
        a {
          font-size: 1.5rem;
          //margin-left: 5rem;
        }
      }
      .user_photo{
       
        margin-right: -18px;
        margin-bottom: -8px;
      }
    }
    @media (max-width: 665px) {
    //background: cornsilk;
     width: 100px;
      .user_name{
       display: none;
      }
    }
    @media (max-width: 550px) {
    //background: rebeccapurple;
    width: 200px;
    margin-left: -70px;
   
    }
    @media (max-width: 530px) {
    //background: red;
    }
   
`;

export const ContainerNoLogged = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    padding-right: 2rem;
    padding-bottom: 0.4rem;
    
   

    svg {
      width: 4.6rem;
      height: 4.6rem;
      margin-bottom: 5px;
      color: #eba417;
    }
    a {
      font-size: 1.2rem;
      margin-right: 6px;
      transition: color 0.2s;
      
      &:hover {
        filter: brightness(0.8);
       
      }
  }
  @media (min-width: 320px) and (max-width: 765px) {
  //margin-bottom: 8rem;
  //background: coral;
  margin-left: 1rem;
  
  svg {
    margin-right: -12px;
  }
  a{
    margin-right: -7px;
  }
  //height: 40px;
  }

`;