

import { Container,NoTheme} from "./styles";
import {SiWhatsapp} from 'react-icons/si'
import ReactLoading from 'react-loading'

interface Themes {
   id: number;
   descricaoPostagem: string;
   urlImg: string;
 }
 interface ThemeParams {
   themes: Themes[];
 }

// eslint-disable-next-line @typescript-eslint/no-redeclare
export function Themes(props:ThemeParams)  {
   
   
   const {themes} = props;
   
   //const {themes} = useThemes();
    
    return (
       <>
        
            {/* {themes.length === 0 &&
               <ThemeNoExists>
                <h2>Nenhum tema encontrado!</h2>  
             </ThemeNoExists>
            } */}
             

           {/* <div className={`${ThemeExists ? 'loader' : 'unload'}`} /> */}
           
           {/* {themes.length === 0 ?  */}
{/*            
            <NoTheme>
               <ReactLoading type={"spokes"} width="44px" height="44px" color="#f7f7f7" className="loading"/>
            </NoTheme> */}
            
           
           
           
           <Container>
          

              {themes.length === 0 &&
              (
             <NoTheme>
              <ReactLoading type={"spokes"} width="44px" height="44px" color="#f7f7f7" className="loading"/>
           </NoTheme> 
              )}

             

              {themes.map((theme:any) => 
               <section key={theme.id}>
                 
                   
                     <div className="container-img">
                     <img src={theme.urlImg} alt={theme.descricaoPostagem}  /> 
                     </div>
                    
                     <div className="container-footer">
                        <p>{theme.descricaoPostagem}</p>
                        <SiWhatsapp/>
                     </div> 
                  </section>
               
            )} 
            
            
         
           </Container> 

           
      
        
         </>
    )

}