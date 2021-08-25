import styled,{css} from 'styled-components';

interface ContainerProps {
    isError: boolean 
    
}

export const Container = styled.div`
    height: 100vh;
    padding: 1rem;
    position: relative;
    .back{
        display: block;
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
    
    
`
export const Content = styled.div<ContainerProps>`
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
    max-height: 500px;
    padding: 1.5rem;

    ///responsividade
    @media (max-width: 558px ) {
        max-width: calc(100vw - 10vw);
        max-height: 100vw;
        min-height: 410px;
    } 

    img {
        margin-top: 80px;
        width: 23rem;
    }

    form {
        margin: 70px 0;
        width: 100%;
        max-width: 340px;
        text-align: center;
       
        h1{
            margin-bottom: 24px;
            color: #F4EDE8;
        }
       
        .container_message{
           height: 25px;
           display: flex;
           span {
               font-size: 1.3rem;
               margin-left: auto;
               margin-right: 10px;
               margin-top: auto;
               margin-bottom: 5px;
               color: rgb(0,179,101);
               ${(props) => props.isError &&
            css`
            color: rgb(255,104,96);
            `}
            
           }
        }
        .container_message_none{ 
          visibility: hidden;
          height: 16px;
        }
       
        .container_input{
            display: flex;
            align-items: center;
            background: #232129;
            color: #F4EDE8;
            font-size: 1.8rem;
            border-radius: 10px;
            border: 2px solid #232129;
          
           ${(props) => props.isError &&
            css`
            border: 2px solid rgb(255,104,96);
            `}
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
            color: #EBA417;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 35px;
            font-size: 1.5rem;
            transition: color 0.2s;

                &:hover {
                    filter: brightness(0.8);
                    cursor: pointer;
                }

                svg {
                    width: 1em;
                    margin-right: 16px;
                    transition: color 0.2s;
                    &:hover {
                    filter: brightness(0.8);
                    cursor: pointer;
                }
                }
        }
        
    }  
`