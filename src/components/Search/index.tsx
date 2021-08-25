import searchImg from '../../assets/search.svg'
import {ContainerSearch,LinkTheme,NoneTheme} from './styles'


import { useState,useEffect} from 'react';
import { api } from '../../services/api';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import {Link} from 'react-router-dom';
import { useCallback } from 'react';
import {useThemes} from "../../hooks/useThemes";



interface SluTema {
  slugTemaNome: string
}



export function Search() {
  const {
    findtheme,
    handleFindTheme,
  } = useThemes();

  
      const [totalthemes, setTotalThems] = useState<SluTema[]>([]);
     
      //const [findtheme, setFindTheme] = useState('')
      

      useEffect(() => {
        
        async function FindSlugTheme(){
         
            // const response = await api.get(`temas?page=0&linesPerPage=5000&direction=ASC&orderBy=id`)
            // const {content} = response.data
            // setTotalThems(content) 
            
            const response = await api.get(`temas/allSlugs`)
            setTotalThems(response.data)
           
           
        }
        FindSlugTheme()
      
        },[]) 
      
        const alltheme = totalthemes.map(totaltheme => totaltheme.slugTemaNome)

       

       
        
         
// function resetPlaceholder(){
//   setPlaceholder('')
// }



// const handleT = (value:String) => {
 
//   setFindTheme(String(value))
//   //setPlaceholder(String(value))
//   //window.location.href = `/find/${value}`;
// }

// console.log(placeholder);

const handleT = useCallback((value:String)=> {
  handleFindTheme(String(value));
  
 // window.location.href = `/find/${value}`;

},[handleFindTheme])


 const button_search = document.querySelector(".button_search") as HTMLInputElement
 const border_bottom_search = document.querySelector(".MuiInputBase-root ") as HTMLInputElement
 

const [placeholder,setPlaceHolder] = useState('Busque aqui seu tema')

function handleError(){
  if(findtheme === ''){
    setPlaceHolder(" Digite o nome do tema")
    border_bottom_search.style.borderBottom = "1px solid rgb(255,104,96)"
    border_bottom_search.style.color = "rgb(255,104,96)"

    setTimeout(() => 
    {
      setPlaceHolder('Busque aqui seu tema')
      border_bottom_search.style.color = "rgba(168, 168, 179, 0.7)"
      border_bottom_search.style.borderBottom = "1px solid rgba(168, 168, 179, 0.7)"
    },4000)
    
  }
  
}

    return(
     

      <ContainerSearch>
       <Autocomplete 
       
      id="combo-box-demo"
      options={alltheme}
     
       //getOptionLabel={alltheme => alltheme}
       onChange={
         (event, value) => value !== null ? handleT(String(value)) : ''
        }
       //autoSelect={true}
       //onOpen={(event) => event.persist}
      noOptionsText={<NoneTheme>Nenhum tema foi encontrado</NoneTheme>}

  //   renderOption={(option) => {
  //   return (
  //    <Link to={`/find/${option}`}>
  //     { `${option}`}s
  //     </Link> 
  //   )
  //  }}

   renderOption={(option) => {
     
    return (
      <LinkTheme>
       <Link to={`/search/${option}`}>
       
         <div>
          {`${option}`}
          </div>  
       
        </Link>
    
      </LinkTheme>
    )
   }
  }

   

      
      renderInput={(params) =>  <TextField {...params}
      
      //renderInput={(params) =>  <TextField {...params}
      //onFocus={()=>handleFindTheme('')} 
      onFocus={() => 
        {
          setPlaceHolder('Busque aqui seu tema')
          border_bottom_search.style.color = "rgba(168, 168, 179, 0.7)"
          border_bottom_search.style.borderBottom = "1px solid rgba(168, 168, 179, 0.7)"
        }
          
         
    
              
      }
      
      placeholder={findtheme ? findtheme : placeholder}   
      // renderInput={(params) => <TextField {...params}   onFocus={resetPlaceholder}  placeholder={findfoco}  
      onChange={event => handleFindTheme(event.target.value)}
      
      //onKeyPress={handleKeyPress}
      onKeyPress={(event) => (event.key === 'Enter') && button_search.click()}
   
      
      
          
          // const placeinput = (document.querySelector('#combo-box-demo')  as HTMLInputElement)
          // placeinput.placeholder = 'Digite um tema'
          
            //  console.log(option);
            // const theme = option.currentTarget
            
           
          
             
           
           
             
              
          //   //window.location.href = `/find/${findtheme}`;
          
         
          
          
      //onMouseDown={handleMousePress}
      //  onMouseUp={() =>
      //   (document.querySelector('.MuiInput-underline')  as HTMLElement).style.borderBottom = '1px solid var(--gray-800)'  
      // }
      
      />
      //</Link>
      
    }
  
     
    />
   
  
    {findtheme ? 
    
    <Link 
    to={`/search/${findtheme}`}> 
   <input 
   onClick={handleError}
       className="button_search" type="image" src={searchImg} alt="Buscar Tema"
       /> 
    </Link> :
     
     <input 
     onClick={handleError}
         className="button_search" type="image" src={searchImg} alt="Buscar Tema"
         />
  } 
   
    
      </ContainerSearch>   
    )
}


