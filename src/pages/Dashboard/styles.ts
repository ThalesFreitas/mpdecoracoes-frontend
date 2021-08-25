import styled from 'styled-components';

export const Header = styled.header`
height: 80px;
width: 100vw;
border-bottom: 1px solid var(--gray-850);
//background: red;

    display: flex;
   
    margin: 0 auto;
    padding: 0 1.8rem;
    align-items: center;
    

    img {
        margin-left: 1.5rem;
        width: 19rem;
        
        &:hover {
                cursor: pointer;
            }
    } 


    nav {
        margin-left: 5rem;
        
        height: 5rem;
        font-size: 1.8rem;
        
        a {
            display: inline-block;
            position: relative;
            padding: 0 0.5rem;
            height: 6.4rem;
            line-height: 5rem;
            color: var(--gray-300);
            font-size: 1.8rem;
            transition: color 0.2s;
            margin-top: 1.2px;

            & + a {
                margin-left: 2rem;
            }

            &:hover {
                filter: brightness(0.8);
                cursor: pointer;
            }
            &.active{
                color: var(--gray-100);
                font-weight: bold;
            }

            &.active::after {
                content: '';
                height: 3px;
                border-radius: 3px 3px 0 0;
                width: 100%;
                position: absolute;
                bottom: 1px;
                left: 0;
                background: var(--yellow-500);
            }
           
            &.inativ{
                //color: var(--gray-100);
                font-weight: bold;
            }

            &.inativ::after {
                content: '';
                height: 3px;
                border-radius: 3px 3px 0 0;
                width: 70%;
                position: absolute;
                bottom: 1px;
                left: 11px;
                background: var(--gray-300);
            }
        }

    
    }

    strong {
        align-items: center;
        margin: 0 auto;
       margin-bottom: 25px;
        margin-right: -28rem;
    }

    @media (min-width: 320px) and (max-width: 1024px) {
        height: 90px;
        width: 100vw;
        border-bottom: 1px solid var(--gray-850);
//background: red;

    display: flex;
   
   
    //margin: 0 auto;
    //padding: 0 1.8rem;
    align-items: center;
    

    img {
        
        width: 14.5rem;
        margin-left: -0.4rem;
        margin-bottom: 4rem;
       
        
        &:hover {
                cursor: pointer;
            }
    } 


    nav {
        margin-left: -14.9rem;
        //margin-right: auto;
        height: 5rem;
        font-size: 1.8rem;
        margin-top: 2.6rem;
        
        a {
            display: inline-block;
            position: relative;
            padding: 0 0.5rem;
            height: 5.4rem;
            line-height: 4rem;
            color: var(--gray-300);
            font-size: 1.6rem;
            transition: color 0.2s;
            margin-top: 2px;

            & + a {
                margin-left: 2rem;
            }

            &:hover {
                filter: brightness(0.8);
                cursor: pointer;
            }
            &.active{
                color: var(--gray-100);
                font-weight: bold;
            }

            &.active::after {
                content: '';
                height: 3px;
                border-radius: 3px 3px 0 0;
                width: 100%;
                position: absolute;
                bottom: 1px;
                left: 0;
                background: var(--yellow-500);
            }
           
            &.inativ{
                //color: var(--gray-100);
                font-weight: bold;
            }

            &.inativ::after {
                content: '';
                height: 3px;
                border-radius: 3px 3px 0 0;
                width: 100%;
                position: absolute;
                bottom: 1px;
                left: 0;
                background: var(--gray-300);
            }
        }

    
    }

    strong {
        align-items: center;
        margin: 0 auto;
       margin-bottom: 25px;
        margin-right: -28rem;
    }
    
    }

   

`;


export const Container = styled.main`

//width: 100%;
//height: 100%;


//background: gray;
 display: grid;

 justify-content: center;
 justify-items: center;
 grid-gap: 39px 25px;
        grid-template-columns: repeat(auto-fit, minmax(400px, 480px) ); // quantidade de card
        //grid-template-columns: repeat(3,1fr); // quantidade de card
       
       /* grid-column-gap: 15px;
       grid-row-gap: 18px; */
    
//padding: 20px 25px 50px 25px;
padding-top: 6vh;
margin-bottom: 20px;
//padding-bottom: 25vh;
padding-bottom: 5vh;
padding-right: 3.1rem;





    section {
       
        width: 100vw;
        min-width: 300px;
        max-width: 480px;
        height: 100vh;
        min-height: 300px;
        max-height: 400px;
        
       
        
        border-radius: 6px 6px 5px 5px;
       
       
        .container-img {
        display: block;
        width: 100vw;
        min-width: 320px;
        max-width: 480px;
        height:100vh;
        min-height: 300px;
        max-height: 345px;
        background: var(--gray-100);
        border-radius: 5px 5px 0 0;

        img{
            width: 100%;
            height: 100%;
            border-radius: 5px 5px 0 0; 
            object-fit: cover;
           
        }
        }
        .container-footer {
           
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: var(--yellow-500);
            width: 100%;
           
           
            height: 56px;
            border-radius: 0 0 5px 5px;
          

        p {
            font-size: 2.4rem;
            margin-left: 10px;
            color: var(--gray-850);
            font-weight: bold;
            
        }
        .edit_post {
            margin-left: auto;
        }
        svg {
            margin-right: 15px;
            font-size: 3rem;
            color: var(--gray-850);
            transition: color 0.2s;

            &:hover {
                filter: brightness(0.8);
                cursor: pointer;
            }
           
        }
    } 


   

    .loader {
  
  position: absolute;
  margin-left: 45%;
  margin-top: 5%;
  border: 8px solid var(--gray-100); 
  border-top: 8px solid var(--yellow-500); 
  border-radius: 50%; 
  width: 45px;
  height: 45px;
  animation: spin 1.5s linear infinite;
  
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); 
  
}

}
.unload {
    display: none;
}

    }

   

@media (min-width: 1025px) and (max-width: 1440px)  {

    display: grid;

 justify-content: center;
 justify-items: center;
 grid-gap: 25px 5px;
 grid-template-columns: repeat(3, 435px); 
    padding-left:1.2rem ;
        //padding-right: 2.8rem;
        section {
      
       width: 100vw;
      
       max-width: 420px;
       height: 100vh;
      
       max-height: 400px;
       
      
       
       border-radius: 6px 6px 5px 5px;
      
      
       .container-img {
       display: block;
       width: 100vw;
       min-width: 320px;
       max-width: 420px;
       height:100vh;
       min-height: 300px;
       max-height: 345px;
       background: var(--gray-100);
       border-radius: 5px 5px 0 0;

       img{
           width: 100%;
           height: 100%;
           border-radius: 5px 5px 0 0; 
           object-fit: cover;
          
       }
       }
       .container-footer {
          
           display: flex;
           align-items: center;
           justify-content: space-between;
           background: var(--yellow-500);
           width: 100%;
          
          
           height: 56px;
           border-radius: 0 0 5px 5px;
         

       p {
           font-size: 2.4rem;
           margin-left: 10px;
           color: var(--gray-850);
           font-weight: bold;
           
       }

       svg {
           margin-right: 15px;
           font-size: 3rem;
           //color: green;
           transition: color 0.2s;

           &:hover {
               filter: brightness(0.8);
               cursor: pointer;
           }
       }
       }
       }
       

    }

    /* @media (max-width: 640px) {
       
      
       section {
      
      width: 20vw;
      height: 100vh;
      min-height: 300px;
      max-height: 400px;
      border: 1px solid red;
     
      
      border-radius: 6px 6px 5px 5px;
     
     
      .container-img {
      display: block;
      width: 100vw;
      min-width: 100px;
      max-width: 100px;
      height:100vh;
      min-height: 300px;
      max-height: 345px;
      background: var(--gray-100);
      border-radius: 5px 5px 0 0;

      img{
          width: 100%;
          height: 100%;
          border-radius: 5px 5px 0 0; 
          object-fit: cover;
         
      }
      }
      .container-footer {
         
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: var(--yellow-500);
          width: 100%;
         
         
          height: 56px;
          border-radius: 0 0 5px 5px;
        

      p {
          font-size: 2.4rem;
          margin-left: 10px;
          color: var(--gray-850);
          font-weight: bold;
          
      }

      svg {
          margin-right: 15px;
          font-size: 3rem;
          color: green;
          transition: color 0.2s;

          &:hover {
              filter: brightness(0.8);
              cursor: pointer;
          }
      }
  } 


 

  .loader {

position: absolute;
margin-left: 45%;
margin-top: 5%;
border: 8px solid var(--gray-100); 
border-top: 8px solid var(--yellow-500); 
border-radius: 50%; 
width: 45px;
height: 45px;
animation: spin 1.5s linear infinite;

}
  
}
} */



    @media (min-width: 320px) and (max-width: 1024px) {
        display: grid;
        //background: red;
 justify-content: center;
 justify-items: center;
 grid-gap: 39px 25px;
        grid-template-columns: repeat(auto-fit, minmax(400px, 480px) ); 
        padding-right: 2.2rem;
        padding-top: 2rem;
        section {
       
       width: 100vw;
      
       max-width: 90vw;
       height: 100vh;
      
       max-height: 400px;
       margin-left: 1.8rem;
      
      
       border-radius: 6px 6px 5px 5px;
      
      
       .container-img {
       display: block;
       width: 100vw;
       min-width: 320px;
       max-width: 90vw;
       height:100vh;
       min-height: 300px;
       max-height: 345px;
       background: var(--gray-100);
       border-radius: 5px 5px 0 0;

       img{
           width: 100%;
           height: 100%;
           border-radius: 5px 5px 0 0; 
           object-fit: cover;
          
       }
       }
       .container-footer {
          
           display: flex;
           align-items: center;
           justify-content: space-between;
           background: var(--yellow-500);
           width: 100%;
          
          
           height: 56px;
           border-radius: 0 0 5px 5px;
         

       p {
           font-size: 2.2rem;
           margin-left: 10px;
           color: var(--gray-850);
           font-weight: bold;
           
       }

       svg {
           margin-right: 15px;
           font-size: 3rem;
           //color: green;
           transition: color 0.2s;

           &:hover {
               filter: brightness(0.8);
               cursor: pointer;
           }
       }
       }
       }
       

    }



`;
export const ThemesContainer = styled.div`


width: 100%;

height: 100%;
 
`;