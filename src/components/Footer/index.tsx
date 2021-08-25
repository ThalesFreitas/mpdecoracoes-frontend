 import { Container } from "./styles"
 import Whatsapp from "../../assets/logo_whatsapp.svg"
 import Facebook from "../../assets/logo_facebook.svg"


 export function Footer() {
   
    return (
      <Container> 
        <a href="https://api.whatsapp.com/send?phone=5534">
         <img  className="whatsapp"  src={Whatsapp} alt="whatsapp" /> 
        </a>
        
        <a href="https://pt-br.facebook.com/mpdecoracoes">
        <img className="facebook"  src={Facebook} alt="facebook" /> 
        </a>

      </Container>
     
     )
 }