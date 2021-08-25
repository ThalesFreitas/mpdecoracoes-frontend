import {Link,useRouteMatch} from 'react-router-dom'

import {useThemes} from "../../hooks/useThemes";

import { Search } from '../../components/Search'
import { SignInButton } from '../../components/SignInButton'

import { Pagination } from "../../components/Pagination";
import {Themes} from "../../components/Themes";
import { Footer } from "../../components/Footer";

import {Header,ThemesContainer, ContainerPagination} from "./styles";

import logoImg from '../../assets/logo.svg'

import { useState, useEffect} from "react";
import { api } from "../../services/api";



interface ThemeParams {
  theme: string;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
interface Themes {
  id: number;
  descricaoPostagem: string;
  urlImg: string;
}


export function SearchTheme() {
  
  const { params } = useRouteMatch<ThemeParams>();
  const {theme} = params

  const [themes, setThemes] = useState<Themes[]>([])
  const [totalElements, setTotalElements] = useState(1); //total de elementos
 
  const {
    activepagesearch,
    itempage,
    handleFindTheme,
 }  = useThemes();

useEffect(()=> {

async function  ThemeFind(){

     const response = await api.get(`postagens?&page=${activepagesearch}&linesPerPage=${itempage}&direction=ASC&orderBy=descricao_postagem&description=${theme}`)
     
     const {content} = response.data
     setTotalElements(response.data.totalElements)
     setThemes(content);
}
  ThemeFind()

},[theme,activepagesearch,itempage])
 
    return(
        <>
        <Header> 
          <Link to="/">  
            <img src={logoImg} alt="mpdecorações"/>  
          </Link> 
          <nav>
            <Link to="/" 
              className="inativ"
              onClick={() => handleFindTheme('')}
              >Home
            </Link>
          </nav>
          <Search/>   
          <SignInButton/>  
        </Header> 

        <ContainerPagination>
          <div className="content">
           
            <div className="pagination">
              {/* passa para o componente de pagination o tipe dele */}
            <Pagination  type="search" totalElements={totalElements}/> 
            </div>
          </div>
        </ContainerPagination>

        <ThemesContainer>
           <Themes themes={themes}/> 
          <Footer/> 
        </ThemesContainer>   
        </> 
        
    )


}
