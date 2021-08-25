
import { Container } from "./styles";
//import arrow from '../../assets/arrow.svg'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'

import {useState,useEffect} from "react";
import {useThemes} from "../../hooks/useThemes";


interface ElementsProps {
  totalElements:number;
  type: string;
}


export function Pagination(props:ElementsProps)  {
  const type = props.type
  
  
  
  let {
      
      itempage,
      activepagehome,
      activepagesearch,
      activepageslug,
      handleActivePage
   }  = useThemes();

const totalelements = props.totalElements

let activepage:any


async function Active(type:string) {

  if(type === 'home'){
    activepage = activepagehome
  }
  if(type === 'search'){
    activepage = activepagesearch
  }
  if(type === 'slug'){
    activepage = activepageslug
  }

}
Active(type)


   const [totalPages, setTotalPages] = useState(5)

    useEffect(() => {
      setTotalPages(Math.ceil( totalelements / itempage,))
    },[ totalelements,itempage,])
  
  const pages = [];
  
  for (let i = 1; i <= Math.ceil( totalelements / itempage); i++) { //cria a quantidade de paginas
      pages.push(i);   
    }
   
  //const PrimeiraPage = totalPages > 0 && activePage > 0 ? 'page-active' : 'page-inactive';
  const previousClass = totalPages > 0 && activepage > 0 ? 'page-active' : 'page-inactive';
  const nextClass = (activepage + 1) < totalPages ? 'page-active' : 'page-inactive-next';
  const UltimaPagina = (activepage + 1) < totalPages ? 'page-active' : 'page-inactive-ult'

  ///////////////////////////////////
  
  let maxPages = 5
let startPage: number, endPage: number;


if (pages.length <= maxPages) {
  //total de páginas menor que o máximo, então mostre todas as páginas
  startPage = 0;
  endPage = pages.length;
} else {
  let maxPagesBeforeCurrentPage = Math.floor(maxPages / 2); //quantidade de botão a ser exibido antes da pagina atual
  let maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1; //quantidade de botão a ser exibido antes da pagina atual
 
  
  if (activepage <= maxPagesBeforeCurrentPage) {
      //página atual perto do início
      startPage = 0;
      endPage = maxPages;

  } else if (activepage + maxPagesAfterCurrentPage >= pages.length) {
      //página atual perto do fim
      startPage = pages.length - maxPages + 1;
      endPage = pages.length;
  } else {
      // página atual em algum lugar no meio
      startPage = activepage - maxPagesBeforeCurrentPage;
      endPage = activepage + maxPagesAfterCurrentPage;
  }
}


let pageitem = Array.from(Array((endPage) - startPage).keys()).map(i => startPage + i);

return (
       
          <Container className="response">
            
              {totalPages !== 1 ? (
              <div className="select_page_first"
              onClick={() => 
              //handleactivepage(0)
              handleActivePage(0, type)
              }
              >Primeira</div>
              ):
              ''
              }
             
                <div className={`page_first_pipe ${UltimaPagina} ? 'active' : '' `}>|</div>
                
                {totalPages !== 1 ? (
                <IoIosArrowBack className={`arrow-left ${previousClass}`} 
                onClick={() => handleActivePage(activepage > 0 ? activepage -1 : 0 , type)}/>
                ): '' 
                }
                
  
              {totalPages !== 1 ? (
               <div className="number_of_pages">
                    {pageitem.map(item => (
                       <div className={`current ${item === activepage? 'active' : ''}` } key={item} onClick={() => handleActivePage(item, type)}>
                  
                      {item +1}
              
                    </div> 
                    ))}
                
                </div>
               ):
               ''
               } 
  
                  
                 <IoIosArrowForward  className={`arrow-right ${nextClass}`} 
                 onClick={() => handleActivePage(activepage + 1 < totalPages ? activepage +1 : activepage, type)}/>
  
                <div className={`page_first_pipe-rigth ${UltimaPagina} ? 'active' : '' `}>|</div>
                <div className={`last_page ${UltimaPagina}`}
                onClick={() => handleActivePage(totalPages - 1, type)}
                >
               Última</div>   
          </Container>
  
  
  
  
  
  
          
      )
}


// function activepage(activepage: any, type: string) {
//   throw new Error("Function not implemented.");
// }

