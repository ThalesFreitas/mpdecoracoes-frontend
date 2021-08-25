import styled from 'styled-components';

// export const Container = styled.div`

// width: 100vw;
// height: 100%;
// padding-bottom: 5rem;
// background: red;
// align-items: center;
// justify-content: center;

// `



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


export const ContainerSlug = styled.div`
width: 100vw;
height: 100vh;



display: flex;
align-items: center;
justify-content: center;


//background: red;

`

export const ContentSlug = styled.div`
   
    width: 100vw;
    max-width: 950px;
    height: 100vh;
    max-height: 95vh;
    margin-top: 2rem;
    border-radius: 5px;
    background: var(--gray-850);
   

    
    h2 {
           color: var(--yellow-500);
           text-align: center;
           margin-top: .7em;
           font-size: 2rem;
       }

    .container_create_slug{
        display: flex;
        align-items: center;
        width: 100%;
        height: 11vh;
       border-bottom: 1px solid #C4C4C4;
       padding-left: 2rem;
       padding-bottom: 1rem;
      


       span {
           margin-top: 1rem;
           font-size: 1.8rem;
        
           
       }
       input {
        width: 25rem;
        height: 3.5rem;
        border: none;
        border-radius: 5px;
       
        background: #C4C4C4;
        outline: none;
        padding-left: 1rem;
        font-size: 1.7rem;
       
        margin-left: 1rem;
        margin-top: 1rem;

        &:focus{
            border: 2.5px solid var(--yellow-500);
            
        }
        &::placeholder{
           color: #7B7B7B;
        }
       }
       > svg {
        
           width: 4rem;
           height: 3.5rem;
           color: rgb(0,179,101);
           margin-top: 1rem;
           margin-left: 1rem;
        
          margin-bottom: .5rem;
          cursor: pointer;
          transition: color 0.2s;
          
          &:hover {
        filter: brightness(0.7);
        cursor: pointer;
      }
          
       }

       .pagination {
           margin-top: auto;
          margin-left: auto;
          margin-right: 2.4rem;
          margin-bottom: 0.5rem;
       }   
    }

    .container_edit_slug{
        display: flex;
        align-items: center;
        width: 100%;
        height: 11vh;
       border-bottom: 1px solid #C4C4C4;
       padding-left: 2rem;
       padding-bottom: 1rem;
      


       span {
           font-size: 1.8rem;
           margin-top: 1rem;
        
           
       }
       input {
        width: 25rem;
        height: 3.5rem;
        border: none;
        border-radius: 5px;
       
        background: #C4C4C4;
        outline: none;
        padding-left: 1rem;
        font-size: 1.7rem;
        margin-top: 1rem;
        margin-left: 1rem;

        &:focus{
            border: 2.5px solid var(--yellow-500);
            
        }
        &::placeholder{
           color: #7B7B7B;
        }
       }

       .close_edit {
        width: 4rem;
           height: 3.5rem;
           color: rgb(255,104,96);
           margin-top: 1.4rem;
           margin-left: 1rem;
           //background: gray;
          margin-bottom: .5rem;
          cursor: pointer;
          transition: color 0.2s;
          
          &:hover {
        filter: brightness(0.7);
        cursor: pointer;
      }
       }
       .salve_edit {
        
           width: 4rem;
           height: 3.5rem;
           color: rgb(0,179,101);
           margin-top: 1rem;
           margin-left: 1rem;
           //background: gray;
          margin-bottom: .6rem;
          cursor: pointer;
          transition: color 0.2s;
          
          &:hover {
        filter: brightness(0.7);
        cursor: pointer;
      }
          
       }

       .pagination {
           margin-top: auto;
          margin-left: auto;
          margin-right: 2.4rem;
          margin-bottom: 0.5rem;
       }   
    }


////////////////////////////////////////
    .list_slugs {

  position: relative ;
 height: 100vh;
        max-height: 80vh;
        
        border-radius:  0 0 5px 5px;
       

 display: grid;
 grid-template-columns: repeat(2,  0.5fr); 
padding: 1rem;
 //grid-gap: -30px 28px;
// quantidade de card


.container_loading{
    position: absolute;
    
    width: 100%;
    height: 100%;
    border-radius:  0 0 5px 5px;
    background: #29292E;
    .loading {
    width: 100%;
    height: 20px;
   
   margin-left: 50%;
   margin-top: 20%;
   
           
}
}



 section {
        display: flex;
        align-items: center;
      margin-left: 0.7rem;
      margin-top: 1rem;
        width: 100vw;
        max-width: 45rem;
        height: 100vh;
        max-height: 8rem;
        border-radius: 5px 4px 4px 5px;
        background: var(--yellow-500);
       
       
        .container-img {
        display: block;
        width: 100vw;
     
        max-width: 9.5rem;
        height:100vh;
        max-height: 8rem;
        background: var(--gray-100);
        border-radius: 5px 0px 0 5px;
 
        img{
            width: 100%;
            height: 100%;
            border-radius: 4px 0px 0 4px; 
            object-fit: cover;
           
        }
        }

        p {
           font-size: 2.4rem;
           margin-left: 10px;
           color: var(--gray-850);
           font-weight: bold;
           
       }
   
      
       .edit_post {
           margin-left: auto;
           transition: color 0.2s;
           &:hover {
               filter: brightness(0.8);
               cursor: pointer;
               color: rgb(0,179,101);
           }
       }
       svg {
           margin-right: 15px;
           font-size: 2.7rem;
           color: var(--gray-850);
           transition: color 0.2s;
           

           &:hover {
               filter: brightness(0.8);
               cursor: pointer;
           }

           & + svg {
            &:hover {
               color: rgb(255,104,96)
           }
           }
          
       }
       
        
        
        
        }
 
         }
         

`


