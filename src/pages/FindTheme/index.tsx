import {Link,useRouteMatch} from 'react-router-dom'

import {useThemes} from "../../hooks/useThemes";

import { Search}  from '../../components/Search'
import { SignInButton } from '../../components/SignInButton'
import {Pagination} from "../../components/Pagination"
import { Footer } from "../../components/Footer";

import { Header, ContainerPagination,ThemesContainer} from "./styles";
import {Container} from '../../components/Themes/styles'

import logoImg from '../../assets/logo.svg'

import {SiWhatsapp} from 'react-icons/si'

import { useState, useEffect} from "react";
import { api } from "../../services/api";



interface ThemeParams {
  theme: string;
}



interface Themes {
  id: number;
  descricaoPostagem: string;
  urlImg: string;
}

export function FindTheme() {

    const { params } = useRouteMatch<ThemeParams>();
    const {theme} = params
    
    
    
   
    const [themes, setThemes] = useState<Themes[]>([])
    const [productsResponse, setproductsResponse] = useState(1); //total de elementos
   
    const {
      activepagesearch,
      itempage,
      handleFindTheme,
   }  = useThemes();


  

useEffect(()=> {
 
  async function  ThemeFind(){
 
       const response = await api.get(`postagens?&page=${activepagesearch}&linesPerPage=${itempage}&direction=ASC&orderBy=descricao_postagem&description=${theme}`)
       
       const {content} = response.data
       setproductsResponse(response.data.totalElements)
       setThemes(content);
  }
    ThemeFind()
  
},[theme,activepagesearch,itempage])



    
    return(
      
        <>
       
      
        <Header>
     
     <Link to="/">  
      <img  src={logoImg} alt="mpdecorações"/>  
      </Link> 
        
        <nav>
              < Link to="/" 
              className="inativ"
              onClick={() => handleFindTheme('')}
              >Home</Link>
        </nav> 

            <Search />  
          <SignInButton/>
          <div>
       
          </div>
         
     </Header>



          <ContainerPagination>
              <Pagination   type="search" totalElements={productsResponse}/>  
          </ContainerPagination>
     
           <ThemesContainer>
       
       
       </ThemesContainer> 
            
             <Container>
            {themes.map(theme => 
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
               <Footer/>
            
        
        </>
        
    )
    

}
