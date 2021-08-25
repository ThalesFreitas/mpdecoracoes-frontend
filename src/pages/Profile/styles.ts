import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    padding: 1rem;
    position: relative;
  
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    place-content: center;
    position: absolute;
    
    margin: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background: var(--gray-850);
    border-radius: 5px;
    width: 100%;
    max-width: 550px;
    height: 100%;
    max-height: 620px;
    padding: 1.5rem;

    @media (max-width: 558px ) {
    max-width: calc(100vw - 10vw);
    }
   
    form {
        
        width: 100%;
        max-width: 340px;
        text-align: center;
        margin-bottom: auto;
        
        h1{
            display: flex;
            justify-content: flex-start;
            margin-left: 5px;
            margin-bottom: 15px;
            
            color: #F4EDE8;
        }
      
        .container_error{
           height: 1.5rem;
           display: flex;
           span {
               font-size: 1.3rem;
               margin-left: auto;
               margin-right: 20px;
               margin-top: auto;
               margin-bottom: 5px;
               color: rgb(255,104,96);
            
           }
        }
        .container_error_none{ 
          visibility: hidden;
          height: 0.5rem;
        }
      
        .container_input{
            display: flex;
            align-items: center;
            background: #232129;
            color: #F4EDE8;
            font-size: 1.8rem;
            border-radius: 10px;
            border: 2px solid #232129;
            
            
            padding: 16px;
            width: 100%;
            max-width: 340px;
            height: 56px;
          
            input{
                background: transparent;
                color: #F4EDE8;
                border: 0;
                flex: 1;
                outline: 0;
                font-size: 1.8rem;
                    &::placeholder{
                        color: #666360
                    } 
                }
            svg {
                margin-right: 16px;
                color: #666360;
                width: 1em;
            }

            .eye_password{
               width: 1em;
               margin-left: 16px;
               margin-right: 0;
               transition: color 0.2s;

            &:hover {
                filter: brightness(0.8);
                cursor: pointer;
            }

            }
         
            & + div {
                margin-top: 1rem;
            }

          

        }
        button {
            background: #EBA417;
            height: 56px;
            border-radius: 10px;
            border: 0;
            padding: 0 16px;
            color: #312E38;
            width: 100%;
            font-size: 1.8rem;
            font-weight: bold;
            margin-top: 16px;
            transition: color 0.2s;

            &:hover {
                filter: brightness(0.8);
                cursor: pointer;
            }
        }

        > a {
            color: #F4EDE8;
            display: block;
            margin-top: 24px;
            font-size: 1.5rem;
            transition: color 0.2s;

                &:hover {
                    filter: brightness(0.8);
                    cursor: pointer;
                }
        }
        
    }  

   
`
export const AvatarInput = styled.div`
    margin-bottom: auto;
    position: relative;
    align-self: center;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
   
    .back{
        position: absolute;
        left: 0;
        top: 0;
    svg {
       width: 3.2rem;
       height: 3.2rem;
       margin-left: 1rem;
       margin-top: 1rem;
       transition: color 0.2s;
            &:hover {
                filter: brightness(0.8);
                cursor: pointer;
            }
    }
  
}
    img {
        width: 12rem;
        height: 12rem;
        border-radius: 50%;
        object-fit: cover;
        transition: color 0.2s;
    &:hover {
        filter: brightness(0.8);
       
        
    }
    }
    .no_phone {
        width: 12rem;
        height: 12rem;
        border-radius: 50%;
        background:#C4C4C4 ;
        color: #A8A8B3;
    }
    

    label {
        position: absolute;
        width: 4rem;
        height: 4rem;
        background: #eba417;
        border-radius: 50%;
        right: 50%;
        left: 53%;
        bottom: 0;
        bottom: 0;
        border: 0;
        cursor: pointer;
        transition: background-color 0.2s;

        display: flex;
        align-items: center;
        justify-content: center;

    input {
      display: none;
    }

    svg {
      width: 1.8rem;
      height: 1.8rem;
      color: #312e38;
      
    }
    }

`