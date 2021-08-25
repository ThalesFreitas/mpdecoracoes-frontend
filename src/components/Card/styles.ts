import styled from 'styled-components';



export const Container = styled.section`


    /* width: 95%;
    max-width: 100vw;
    margin-left:20px;
    background: var(--black);
    padding-bottom: 20px;
    padding-top: 20px; */

  

    
        width: 100%;
        max-width: 460px;
        height: 100%;
        max-height: 430px;
        border-radius: 6px 6px 5px 5px;
        background: red;
        margin-left: 25px;
       
       
      

        img{
            width: 100%;
            max-width: 480px;
            height: 100%;
            max-height: 400px;
            border-radius: 5px 5px 0 0; 
            //object-fit: cover;
        }
        div {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: var(--yellow-500);
            width: 100%;
            max-width: 480px;
           
            height: 60px;
            border-radius: 0 0 5px 5px;
            margin-top: -32px;

        p {
            font-size: 2.4rem;
            margin-left: 10px;
            color: var(--gray-850);
            
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

`