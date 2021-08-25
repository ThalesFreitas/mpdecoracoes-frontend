import styled from 'styled-components';



export const Container = styled.footer`

display: flex;
align-items: center;
justify-content: left;
background: var(--gray-850);
padding: 1rem;
padding-left: 2rem;
width: 100%;

.whatsapp {
    
    width: 4rem;
    height: 4rem;
    background: none;
    transition: color 0.2s;

  &:hover {
   filter: brightness(0.8);
  } 
    
}
.facebook {
    margin-left: 3rem;
    width: 3.5rem;
    height: 3.5rem;
    transition: color 0.2s;

  &:hover {
   filter: brightness(0.8);
  } 
}

`