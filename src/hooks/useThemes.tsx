import { useState, useEffect,useContext, ReactNode} from 'react';

import {createContext} from 'react'
import { api } from '../services/api';

 interface slugTema {
   slugTemaNome: string;
 }

interface Themes {
  id: number;
  descricaoPostagem: string;
  urlImg: string;
  categoria: string;
  modelo: string;
  slugTema: slugTema;
 
}

//ReactNode = aceita qualquer tipo de conteudo para o react
interface ThemesProviderProps {
  children: ReactNode;
}

interface ThemesContextData {
  findtheme: string;
  selectcategory: String;
  selectmodel: String;
  itempage: number;
  totalelements: number;
  activepagehome: number;
  activepagesearch: number;
  activepageslug: number;
  themes: Themes[];
  
  handleFindTheme: (item: string) => void;
  handleSelectCategory: (value: String) => void;
  handleSelectModel: (value: String) => void;
  handleItemPage: (item: number) => void;
  handleActivePageHome: (value: number) => void;
  handleActivePageSearch: (item: number) => void;
  handleActivePageSlug: (item: number) => void;
  handleActivePage: (item: number, type: string) => void;
}

const ThemesContext = createContext<ThemesContextData>(
  {} as ThemesContextData
);


export  function ThemesProvider({children}: ThemesProviderProps) {
  
  const [findtheme, setFindTheme] = useState('') // Valor digitado no buscador
  const [selectcategory,setSelectCategory] = useState('Categoria'); // Valor do select da categoria
  const [selectmodel,setSelectModel] = useState('Modelo'); // Valor do select do modelo
  const [itempage, setItemPage] = useState(12); // Valor do número de itens por pagina
  const [totalelements, setTotalElements] = useState(1); // Total de elementos para calcular a quantidade de páginas
  const [activepagehome, setActivePageHome] = useState(0); // Pagina ativa em home
  const [activepagesearch, setActivePageSearch] = useState(0); // Pagina ativa em search
  const [activepageslug, setActivePageSlug] = useState(0) // Pagina ativa em slug
  const [themes, setThemes] = useState<Themes[]>([]) // Armazena as postagens

  

if(themes.length === 0 && activepagehome > 1){ // Se tiver na última página e alterar a listagem, volta para a pagina 1
  setActivePageHome(0)
  }

   useEffect(()=> {
    
    async function ThemeIntegrate(){
      if(selectcategory !== 'Categoria' && selectmodel !== 'Modelo'){ 
        const response = await api.get(`postagens?&page=${activepagehome}&linesPerPage=${itempage}&direction=ASC&orderBy=descricao_postagem&model=${selectmodel}&category=${selectcategory}`)
        const {content} = response.data
        setTotalElements(response.data.totalElements)//Salva no estado a quantidade  total de elementos para a paginação
        setThemes(content); // Salva no estado os temas buscados na api    
      }
      if(selectcategory === 'Categoria' && selectmodel === 'Modelo'){
       const response = await api.get(`postagens?&page=${activepagehome}&linesPerPage=${itempage}&direction=ASC&orderBy=descricao_postagem`) 
       setTotalElements(response.data.totalElements)
       setThemes(response.data.content);
       }
      if(selectcategory !== 'Categoria' && selectmodel === 'Modelo'){  
        const response = await api.get(`postagens?page=${activepagehome}&linesPerPage=${itempage}&direction=ASC&orderBy=descricao_postagem&category=${selectcategory}`)
        setTotalElements(response.data.totalElements)
        setThemes(response.data.content);
        
      }
      if(selectcategory === 'Categoria' && selectmodel !== 'Modelo'){
        const response = await api.get(`postagens?&page=${activepagehome}&linesPerPage=${itempage}&direction=ASC&orderBy=descricao_postagem&model=${selectmodel}`)
        setTotalElements(response.data.totalElements)
        setThemes(response.data.content); 
      }
     }
    ThemeIntegrate()
    
 },[selectcategory,selectmodel,activepagehome,itempage])//Toda vez que algun sofre alteração o useEffect e executado novamente


 function handleFindTheme(value:string){ //Recebe o valor que tá no input de search e salva no estado
  setFindTheme(value)
 }

 function handleSelectCategory(value:String){ //Recebe o valor do select de categoria e salva no estado
 setSelectCategory(String(value))
 }
 function handleSelectModel(value:String){ //Recebe o valor do select de modelo e salva no estado
  setSelectModel(String(value))
 }
 function handleItemPage(value:number){ //Recebe o valor do select de item por página e salva no estado
  setItemPage(value)  
 }

 function handleActivePageHome(item:number){ //Recebe 0 resetando a paginação, salvando o valor no estado
  setActivePageHome(item)
 }
 function handleActivePageSearch(item: number){ //Recebe 0 resetando a paginação, salvando o valor no estado
   setActivePageSearch(item)
 }
 function handleActivePageSlug(item: number) { //Recebe 0 resetando a paginação, salvando o valor no estado
   setActivePageSlug(item)
 }

 function handleActivePage(item: number, type: string){ //Recebe qual o tipo da pagina e altera o numero da pagina
  // de acordo com o valor recebido
  if(type === 'home'){
    setActivePageHome(item)
  }
  if(type === 'search'){
    setActivePageSearch(item)
  }
  if(type === 'slug'){
    setActivePageSlug(item)
  }
}

return (
  <ThemesContext.Provider 
  value={
    {
      findtheme,
      selectcategory,
      selectmodel,
      itempage,
      totalelements,
      activepagehome,
      activepagesearch,
      activepageslug,
      themes,
      
      handleFindTheme,
      handleSelectCategory,
      handleSelectModel,
      handleItemPage,
      handleActivePageHome,
      handleActivePageSearch,
      handleActivePageSlug,
      handleActivePage
      }}>
   {children}
  </ThemesContext.Provider>
)

}

export function useThemes() {
  const context = useContext(ThemesContext)
  return context
}

