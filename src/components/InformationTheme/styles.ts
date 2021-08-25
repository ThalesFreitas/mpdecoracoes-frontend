import styled from 'styled-components'


export const Information = styled.section`
padding-top: 2px;
font-size: 1.8rem;
//background: red;

.title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 1.3rem;


    p {
       
       & + p {
        &::before {
        content: '|';
        margin-right: 2.8rem;
      }
       }   
    }
    
    svg {
       margin-left: -2rem;
      width: 26px;
      height: 26px;
       color: var(--yellow-500);
       cursor: pointer;
       transition: color 0.2s;

       &:hover {
        filter: brightness(0.7);
        cursor: pointer;
      }
    }
}

    .number {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 1.3rem;

 

    p {
       color: var(--yellow-500);
       transition: color 0.2s;
        margin-left: 1.5rem;

     & + p {
         margin-right: 2rem;
     }
     &:nth-child(2){
        
         margin-right: 0.5rem
     }
     &:nth-child(4){
        
         margin-right: 0rem
     }

     &:nth-child(5){
         
         margin-right: 4.3rem
     }
     
       &:hover {
        filter: brightness(0.7);
        cursor: pointer;
      }

     
       }
     
    }
        
    


`;



export const Container = styled.form`
display: flex;
flex-direction:column;
height: 100%;
padding-left: 2.3rem;
font-size: 1.8rem;


/* h2{
   text-align: center;
   margin-top: 0px;
   
   
   & + label {
    margin-top: 18px;
   }
    
    
} */
.cad-close{
    display: flex;
     h2 {
        
         margin-top: 8px;
         margin-left: auto;
         
     }
     button {
        margin-left: auto;
        width: 20px;
        height: 20px;
        margin-right: 10px;
        margin-top: 10px;
        border: none;
        background: none;
       
     }

}


strong {
   color: var(--yellow-500);
   margin-top: 15px;
   
   font-size: 1.8rem;
         

   & + input {
       //background: var(--white-gray);
       background: var(--gray-100);
       margin-top: 10px;
       width: 80%;
       height: 35px;
       border: none;
       border-radius: 0.25rem ;
       padding: 1rem;
       font-weight: bold;
       font-size: 1.8rem;

       &:focus{
           outline: 0;
           
        
       }
       &::placeholder{
        color: rgba(117,117,117,1);
       }
      
   }
   
}

.slug {
   
    display: flex;
    align-items: center;
    height: 65px;
    

    input{
        background: var(--gray-100);
       margin-top: 0px;
       margin-bottom: 10px;
       width: 80%;
       height: 35px;
       border: none;
       border-radius: 0.25rem ;
       padding: 1rem;
       font-weight: bold;
       font-size: 1.8rem;
         

       &:focus{
           outline: 0;
           
        
       }
       /* & + svg {
           align-items: center;
           margin-top: 10px;
           margin-left: 5px;
           width: 40px;
           height: 35px;
           color: var(--yellow-500);
           cursor: pointer;
           

       } */

       & + img + svg {
           align-items: center;
           margin-top: 0px;
           margin-bottom: 20px;
           margin-left: 10px;
           width: 30px;
           height: 22px;
           color: var(--yellow-500);
           cursor: pointer;
           

       }
     
    }

    img {
        align-items: center;
        margin-left: 14px;
        margin-top: 0px;
        margin-bottom: 8px;
        width: 20px;
        height: 15px;
        
    }
   
}

.fileimg {
   display: flex;
   
   height: 49px;
   
   input[type="file"]{
       display: none;
   }
   label {
    white-space: nowrap; //evita que o texto ultrapasse a caixa
    overflow: hidden;   //evita que o texto ultrapasse a caixa     
    text-overflow: ellipsis; //evita que o texto ultrapasse a caixa

       margin-top: 10px;
       display: flex;
       align-items: center;
       width: 53%;
       height: 35px;
       background: var(--gray-100);
       color: rgba(117,117,117,1);
       font-weight: bold;
       border-radius: 0.25rem ;
       padding: 1rem;

   }
    img {
       margin-left: 11px;
       margin-top: 8px;
       width: 40px;
       height: 35px;
       cursor: pointer;
   }


}
#button-add-img{
    margin-left: 5px;
    width: 20%;
    display: flex;
    align-items: center;
   
    
  label {
    background: none;
    img{
       
       margin-left: -12px;
       margin-bottom: 8px;
      
       
   }
  }
  .upload-icon{
    
    margin-top: 15px;
    height: 26px;
    //background: red;
    margin-left: -5px;
    //border-bottom: 1px solid ;
     
    white-space: nowrap; //evita que o texto ultrapasse a caixa
    overflow: hidden;   //evita que o texto ultrapasse a caixa     
    text-overflow: ellipsis; 
     
    svg {
      width: 27px;
      height: 27px;
      margin-top: 20px;
      margin-left: -3px;
    
    animation-name: slidein;
    animation-duration: 1.3s ;
    animation-timing-function: ease-in-out;
    animation-delay: 1s;
    animation-iteration-count: infinite;
    
   
}
@keyframes slidein {
    0% {
        transform: translateY(0px);
    }

    100% {
        transform: translateY(-44px);
        
    }

}
  }
 

/* @keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); 
  
} */

}

input {
    
   
/*     
    margin-right: 55px; 
    width: 100%;
    height: 60px;
    padding: 0 1.5rem;
    height: 5rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem; */

 
 
}


/* .categoria {
    margin-top: 25px;
    align-items: center;
    justify-content: center;
  
    
    
    
    input[type="radio"]{
        
        width: 20px;
        height: 20px;
        margin-top: 10px;
        margin-right: 10px;
    

    }
   label {
       margin-left: 5px;
       display: flex;
       align-items: center;
       text-align: center;
       
   }
} */
.categoria {
    margin-top: 6px;;
}
.form-group{
    margin-left: 8px;
    display: flex;
    align-items: center;
    margin-top: 10px;

    label {
        cursor: pointer;
    }
}
.radio {
    appearance: none;
    
    width: 20px;
    height: 20px;
  
    margin-right: 10px;
    cursor: pointer;
    border-radius: 50%;
    outline: none;
    border: 2px solid var(--white-gray);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
   

    &::before{
        content: '';
        position: absolute;
        height: 10.9px;
        width: 10.9px;
        background: var(--yellow-500);
        border-radius: 50%;
        opacity: 0;
        transition: all 300ms ease-in-out;
    
    }
    &:checked::before{
        opacity: 1;
    }
     &:focus{
        box-shadow: 0px 0px 3px var(--yellow-500);
    } 
}
.modelo {
    margin-top: 25px;;
}

button[type="submit"]{


display: flex;
align-items: center;
margin-left: auto;
margin-right: 12px;
font-size: 1.8rem;

justify-content: center;
width: 80px;
height: 40px;
margin-top: -24px;


background: var(--yellow-500);
color: black;
font-weight:bold;
border: none;
border-radius: 0.25rem;
}



#combo-box-demo-forms {
   
    margin-top: 15px;
    background: white;

    div {
       
       
        display: flex;
           align-items: center;
           justify-content: space-between;
          
        & + svg {
         
          
           width: 40px;
           height: 35px;
           color: var(--yellow-500);
           cursor: pointer;
           /* margin-left: auto;
           margin-right: -50px;
           margin-top: -32px; */
           

       }
        
      input {
          padding-left: 0.8rem;
          background: var(--gray-100);
          color: black;
          
          font-weight: bold;
          height: 21px;
          width: 100%;
          font-size: 1.8rem;

          &::placeholder{
            color: rgba(117,117,117,1);
            opacity: unset;
            
          }
      }
      &::before {
         display: none;
        
      }
      &::after {
        display: none;
       
      }
     
     

    }
  
    input:holver {
        border: none;
    }
    /* svg {
        display: none;
    } */
    & {
        background: var(--gray-100);
       margin-top: 10px;
       width: 80%;
       height: 35px;
       padding: 0.1rem;
       border: none;
       border-bottom: none;
       border-radius: 0.25rem ;
       //padding: 1rem;
       font-weight: bold;
       &::placeholder{
           margin-left: 10px;
       }
     

       &:focus{
           outline: 0;
       }

      
      
    }

}
.slug-title{
        display: flex;
        align-items: center;
        margin-top: 10px;
        
        
        span {
            
            margin-top: 20px;
           margin-left: 130px;
           animation-name: spanview;
           animation-duration: 1.5s ;
           animation-timing-function: ease-in-out;
           //animation-iteration-count: infinite;
          
           
        }
       
        @keyframes spanview {

           
           
            from {
                transform: translateY(-20px);
                
             }

}
    }

 
      .container {
       
        display: flex;
        //background: gray;
      }

      .add-slug {
       display: block;
        width: 75px;
        height: 65px;
        margin-left: 8px;
        
      //background: red;
      
        
        svg {
         
          display: block;
         margin-left: auto;
         margin-right: 23px;
         margin-top: 11.5px;
         width: 38px;
         height: 33px;
         color: var(--yellow-500);
         cursor: pointer;
         
         

     }
     span {
         font-size: 12px;
         margin-left: 8px;
         margin-bottom: 5px;
     }
          
      }

      /* .container-toast {
        position: absolute;
        white-space: nowrap; //evita que o texto ultrapasse a caixa
        overflow: hidden;   //evita que o texto ultrapasse a caixa     
        text-overflow: ellipsis;
        width: 330px;
        height: 60px;
          border: 1px solid red;
          margin-right: 0px;
          display: flex;
          right: 0;
          margin-top: 265px;

         

          > div {
            position: relative;
            background: #e6fffa;
            border-radius: 10px;
            box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
            width: 300px;
            display: flex;
            
            //padding: 15px ;
            margin-left: 265px;
            animation: show 4.6s ease forwards;
            animation-iteration-count: infinite;
          
        
             strong{
              margin-left: auto;
              //margin-right: 5px;
              color: #2e656a;
              margin-bottom: 10px;
          }

          }
      } */


      





        @keyframes show {
            0% {
                transform: translateX(0%);
            }
            40% {
                transform: translateX(-105%);
            }
            80% {
                transform: translateX(0%);
            }
            100% {
                transform: translateX(0px);
                
            }
        }

        /* @keyframes show {
            0% {
                transform: translateX(-104%);
            }
            40% {
                transform: translateX(-104%);
            }
            80% {
                transform: translateX(0%);
            }
            100% {
                transform: translateX(0px);
                
            }
        } */

`;

export const ContainerToast = styled.div`
position: absolute;
right: 0;
top: 0;
padding: 15px;
overflow: hidden;
//background: red;
height: 100px;
width: 330px; ;
margin-top: 235px;
display: flex;
align-items: center;



`;

export const Toast = styled.div`
width: 320px;
position: relative;
padding: 20px 30px 20px 16px;
border-radius: 10px;
box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
display: flex;
align-items: center;

background: #e6fffa;
//animation: toast-slug 2s ease forwards, toast-slug-back 2s ease forwards;

-webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
animation: fadein 0.5s, fadeout 0.5s 2.5s;
//animation-iteration-count: infinite;
//transition-duration: 2s;
color: #3172b7;

> svg {
    margin: 0 12px 0 0;
    display: flex;
    align-items: center;
}

div {
    flex: 1;

    strong {
        color: #2e656a;
    }
}
button {
    position: absolute;
    right: 8px;
    top: 8px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  
}

@keyframes toast-slug {
         
            0% {
                
                transform: translateX(320px);
                
            }
            50% {
                
                transform: translateX(0px);
                
            }
            
        }
        @keyframes toast-slug-back {
         
         100% {
             
             transform: translateX(320px);
             
         }
         
     }   


@-webkit-keyframes fadein {
  from {transform: translateX(320px); opacity: 0;}
  to {transform: translateX(0px); opacity: 1;}
}

@keyframes fadein {
  from {transform: translateX(320px); opacity: 0;}
  to {transform: translateX(0px); opacity: 1;}
}

@-webkit-keyframes fadeout {
  from {transform: translateX(0px); opacity: 1;}
  to {transform: translateX(320px); opacity: 0;}
}

@keyframes fadeout {
  from {transform: translateX(0px); opacity: 1;}
  to {transform: translateX(320px); opacity: 0;}
}






`;
