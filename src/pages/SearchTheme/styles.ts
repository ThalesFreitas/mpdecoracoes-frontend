import styled from 'styled-components';

export const Header = styled.header` //Container de exibição do Cabeçalho do site
    display: flex;
    height: 80px;
    width: 100vw;
    padding: 0 1.8rem;
    align-items: center;
    border-bottom: 1px solid var(--gray-850);
    margin: 0 auto;

    img {
        margin-left: 1.5rem;
        width: 19rem;
        &:hover {
            cursor: pointer;
        }      
    } 

    nav {
        height: 5rem;
        font-size: 1.8rem;
        margin-left: 5rem;
           
        a {
            display: inline-block;
            position: relative;
            height: 6.4rem;
            padding: 0 0.5rem;
            margin-top: 1.2px;
            line-height: 5rem;
            color: var(--gray-300);
            font-size: 1.8rem;
            transition: color 0.2s;
           
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
                font-weight: bold;
            }

            &.inativ::after {
                content: '';
                position: absolute;
                width: 100%;
                height: 3px;
                bottom: 1px;
                left: 0;
                border-radius: 3px 3px 0 0;
                background: var(--gray-300);
            }
        }

    
    }

//Responsividade do Container do Header
    @media (min-width: 320px) and (max-width: 765px) {
        height: 8.7rem;
        width: 100vw;
        position: relative;

    img {
        width: 14.5rem;
        margin-left: 1rem;
        margin-bottom: 4rem;
    } 

    nav {
        height: 4.5rem;
        margin-left: -14.9rem;
        margin-top: 2.6rem;
        
        a {
            height: 5rem;
            line-height: 4rem;
            font-size: 1.6rem;
            margin-top: 2px;
 
        }
    }
    }
`;


export const ContainerPagination = styled.div` //Container de exibição do filtro e paginação
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
    //background: var(--gray-850); 
    
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
   
    
`









