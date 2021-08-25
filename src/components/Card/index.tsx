 import { Container } from "./styles"
 import {SiWhatsapp} from 'react-icons/si'

 import {useThemes} from '../../hooks/useThemes';


 export function Card() {
   const {themes} = useThemes();
   
    return (
     <>
         {themes.map(theme => 
               <Container key={theme.id}>
                     <img src={theme.urlImg} alt={theme.descricaoPostagem}  />

                     <div>
                        <p>{theme.descricaoPostagem}</p>
                        <SiWhatsapp/>
                     </div> 
                  </Container>
               
            )}
      </>
     
     )
 }