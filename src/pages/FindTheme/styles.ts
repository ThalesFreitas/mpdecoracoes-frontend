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


export const ContainerPagination = styled.div`

/* margin-left: 39.8rem;
margin-top: 1.8rem;
width: 565px;
height: 33px; */

width: 100%;
//height: 8vh;
margin-top: 2rem;

`;

export const ThemesContainer = styled.div`


width: 100%;

height: 100%;
 
`;



