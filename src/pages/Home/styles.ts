import styled from 'styled-components';

export const Header = styled.header` //Container de exibição do Cabeçalho do site
    
  
    display: flex;
    height: 80px;
    width: 100vw;
   padding: 1rem 1.5rem 0rem 1.5rem;
   
    align-items: center;
    border-bottom: 1px solid var(--gray-850);
    margin: 0 auto;
    
    main {
        display: flex;
        align-items: center;
        //height: 68px;
        width: 100%;
        height: 100%;
       
        
        section{
            
           height: 40px;
           width: 100%;
          
            img {
                width: 19rem;
                margin-bottom: 1rem;
                transition: color 0.2s;
                &:hover {
                        filter: brightness(0.8);
                        cursor: pointer;
                }    
            }
        
            .user_name{
                visibility: hidden;
               
                width: 100%;
                height: 20px;
                margin-top: -1px;
               
               margin-top: -15px;
 
                span {
                    color: var(--gray-800);
                    font-size: 1.5rem; 
                     margin-left: auto;
                        
                    }
                a {
                    color: var(--yellow-500);
                    font-size: 1.5rem;
                    transition: color 0.2s;
                    margin-right: 25px;
            
                    &:hover {
                        filter: brightness(0.8);   
                    }
                }
     
 
 }
 @media (max-width: 840px) {
 height: 32px;
}
 @media (max-width: 665px) {
    // background: cornsilk;
           width: 100%;
           height: 33px;
           display: flex;
           align-items: center;
           justify-content: space-between;
          
            .user_name{
                visibility: visible;
            }
    }

    @media (max-width: 510px) {
        .user_name{
            //background: red;
            margin-right: 25px;
        }
    }

        }
       
    div{
        display: flex;
        align-items: center;
        
       
        nav {
       //background: red;
        display: flex;
        align-items: center;
        height: 100%;
        font-size: 1.8rem;
        margin-left: 5rem;
           
        a {
            display: inline-block;
            position: relative;
            height: 64px;
            width: 100%;
            padding-left: 6px;
            padding-right: 6px;
            bottom: 4px;
            line-height: 70px;
            color: var(--gray-300);
            font-size: 1.8rem;
            font-weight: bold;
            transition: color 0.2s;
          
         
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
                width: 100%;
                border-radius: 3px 3px 0 0;
                width: 97%;
                position: absolute;
                bottom: -5px;
                left: 0.5px;
                background: var(--yellow-500);
            }
           
            &.inative::after {
                content: '';
                height: 3px;
                width: 100%;
                border-radius: 3px 3px 0 0;
                width: 97%;
                position: absolute;
                bottom: -5px;
                left: 0.5px;
                background: var(--gray-300);
            }
            
            & + a {
                margin-left: 28px;
                
                &.active::after {
                content: '';
                height: 3px;
                width: 100%;
                border-radius: 3px 3px 0 0;
                width: 100%;
                position: absolute;
                bottom: -5px;
                left: 0.5px;
                background: var(--yellow-500);
            }
                &.inative::after {
                content: '';
                height: 3px;
                width: 100%;
                border-radius: 3px 3px 0 0;
                width: 100%;
                position: absolute;
                bottom: -5px;
                left: 0.5px;
                background: var(--gray-300);
            }
            }
           
        }

    
    }
    }

   
 
    }
    @media (max-width: 1120px) {
        //height: 100px;
        height: 100px;
        
        main{
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            flex-direction: column;

           

            div{
                
               margin-top: -17px;
                nav{
                    margin-left: 0;
                }
            }
        }
    }

    @media (max-width: 840px) {
        main{
        
            section{
                img {
                    width: 14rem;
                    margin-left: -2px;
                }
            }
       
        div{
        
            nav {
         
                a {
                    left: -7px;
                    bottom: 0px;
                    top: 4px;
                    font-size: 1.5rem;
                    & + a {
                        margin-left: 12px;
                    }
        
                }
    
    }
            
        }
        }
    
    
    }

    @media (max-width: 545px) {
        main{
        
            section{
                img {
                width: 13rem;
                margin-left: -2px;
                }
            }
       
        div{
        
            nav {
         
                a {
                    left: -7px;
                    bottom: 0px;
                    top: 4px;
                    font-size: 1.5rem;
                    & + a {
                        margin-left: 12px;
                    }
        
                }
    
    }
            
        }
        }
    
    
    }
   

//Responsividade do Container do Header
    /* @media (min-width: 320px) and (max-width: 765px) {
       // background: cornflowerblue;
       
       main {
           display: flex;
           flex-direction: column;
           align-items: flex-start;
           height: 100%;
           //background: chocolate;
           a {
               //margin-left: 1rem;
            img {
            width: 15rem;
            margin-left: 0.5rem;
            }    
           }
           
        .nav{
       display: flex;
       align-items: flex-start;
       justify-content: flex-start;
       height: 100%;
      //background: red;
        
       

    nav {
        height: 5rem;
        font-size: 1.8rem;
        //margin-left: 5rem;
        display: flex;
        align-items: center;
       
        
        
        a {
            display: inline-block;
            
            position: relative;
            height: 54px;
            width: 60px;
            padding-left: 5px;
           
            right: 50px;
            bottom: 16px;
            line-height: 62px;
            color: var(--gray-300);
            font-weight: bold;
            font-size: 1.5rem;
            transition: color 0.2s;
            //background: ghostwhite;
           
            &.active::after {
                content: '';
                height: 3px;
                border-radius: 3px 3px 0 0;
                width: 80%;
                position: absolute;
                bottom: 0;
                left: 0.5px;
                background: var(--yellow-500);
            }
            &.inative::after {
                content: '';
                height: 3px;
                border-radius: 3px 3px 0 0;
                width: 80%;
                position: absolute;
                bottom: 0;
                left: 0.5px;
                background: var(--gray-300);
            }
            
            
        }
        a + a {
            margin-left: 2rem;
            padding-left: 6px;
            &.active::after {
                content: '';
                height: 3px;
                border-radius: 3px 3px 0 0;
                width: 72%;
                position: absolute;
                bottom: 0;
                left: 0.5px;
                background: var(--yellow-500);
            }
            &.inative::after {
                content: '';
                height: 3px;
                border-radius: 3px 3px 0 0;
                width: 72%;
                position: absolute;
                bottom: 0;
                left: 0.5px;
                background: var(--gray-300);
            }
              
           }
           

    
    }
   }
       
        }
       
       

       

       

       
        
    
    } */

`;


export const ContainerFilterPagination = styled.div` //Container de exibição do filtro e paginação
    display: flex;
    width: 100%;
    height: 80px;

//Responsividade ContainerFilterPagination
    @media (max-width: 1050px) {
        display: flex;
        width: 100%;
        height: 120px;
    }

    .content {
    display: flex;
    align-items: center;
    width: 98%;
    height: 60px;
    background: var(--gray-850); 
    border-radius: 5px;
    margin-left: auto;
    margin-top: auto;
    margin-bottom: 0.3rem;
    margin-right: auto;
    
//Responsividade .content
    @media (max-width: 639px) {
       background: none;
    }
    @media (max-width: 1050px) {
        display: block;
        height: 50%;
        padding-right: 1.4rem;
        margin-top: 1rem;
    }
 
  .pagination {
      
      margin-left: auto;
      margin-right: 3vw;

//Responsividade .pagination     
  @media (max-width: 1050px) {
    margin-top: 1.2rem;
    margin-left: -0.5rem;
    }
}
}`

export const ThemesContainer = styled.div` //Container de exibição dos temas e do footer
    height: auto;
    margin-top: 1rem;
`









