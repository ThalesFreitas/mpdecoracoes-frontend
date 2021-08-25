import styled from 'styled-components';

// export const Container = styled.div`
// height: 100%;
// background: red;

// .loading {
//     margin: 0 auto;
//     margin-top: 30vh;
// }

// `

export const NoTheme = styled.div`

height: 100vh;
.loading {
     margin: 0 auto;
    margin-top: 30vh;
 }

`


export const Container = styled.main`

//width: 100%;
//height: 100%;



 display: grid;

 justify-content: center;
 justify-items: center;
 grid-gap: 39px 25px;
        grid-template-columns: repeat(auto-fit, minmax(320px, 480px) ); // quantidade de card
        //grid-template-columns: repeat(3,1fr); // quantidade de card
       
       /* grid-column-gap: 15px;
       grid-row-gap: 18px; */
    
//padding: 20px 25px 50px 25px;
padding-top: 4rem;
margin-bottom: 20px;
//padding-bottom: 25vh;
padding-bottom: 5vh;
padding-right: 3.1rem;





    section {
       
        /* width: 100vw;
        min-width: 320px;
        max-width: 480px;
        height: 100vh;
        min-height: 300px;
        max-height: 400px; */

        width: 90vw;
        max-width: 48rem;
        height: 100vh;
        max-height: 40rem;
        
       
        
        border-radius: 6px 6px 5px 5px;
       
       
        .container-img {
        display: block;
        width: 90vw;
        max-width: 48rem;
        height:100vh;
        max-height: 34.5rem;
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
           
           
            height: 5.6rem;
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

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); 
  
}

}
.unload {
    display: none;
}

    }
///responsive
 
    @media (max-width: 1032px)  {
       
        padding-left: 3rem;
        grid-template-columns: repeat(2, 1fr); 
    }
    @media (max-width: 1010px)  {
      
        padding-left: 3rem;
        grid-template-columns: repeat(1, 1fr); 
        grid-gap: 8.9rem 2.5rem;
        section {
    

    width: 90vw;
    max-width: 50rem;
    height: 100vh;
    max-height: 37rem;
    
   
    
    border-radius: 6px 6px 5px 5px;
   
   
    .container-img {
    display: block;
    width: 90vw;
    max-width: 50rem;
    height:100vh;
    max-height: 37rem;
    background: var(--gray-100);
    border-radius: 5px 5px 0 0;
    }

}
    }
   

 
  
    
    @media  (min-width: 321px) and (max-width: 450px)  {
        section {
    

    width: 90vw;
    max-width: 50rem;
    height: 100vh;
    max-height: 30rem;
    
   
    
    border-radius: 6px 6px 5px 5px;
   
   
    .container-img {
    display: block;
    width: 90vw;
    max-width: 50rem;
    height:100vh;
    max-height: 30rem;
    background: var(--gray-100);
    border-radius: 5px 5px 0 0;
    }

}
    
    }



    @media  (min-width: 910px) and (max-width: 1010px)  {
       
       
        grid-template-columns: repeat(2, 0.5fr); 
        display: grid;

justify-content: center;
justify-items: center;
grid-gap: 3.9rem 2.5rem;
     
padding-top: 3vh;
margin-bottom: 20px;
//padding-bottom: 25vh;
padding-bottom: 5vh;

        section {
    

       width: 90vw;
       max-width: 43rem;
       height: 100vh;
       max-height: 40rem;
       
      
       
       border-radius: 6px 6px 5px 5px;
      
      
       .container-img {
       display: block;
       width: 90vw;
       max-width: 43rem;
       height:100vh;
       max-height: 34.5rem;
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
          
          
           height: 5.6rem;
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
        }

    }

`;

export const ThemeNoExists = styled.h2`
margin: 20px 40px; 


`
