
import Modal from 'react-modal'
import {Information} from './styles'
import {RiAddLine} from 'react-icons/ri'
import { useEffect } from 'react'
import { useState } from 'react'
import { api } from '../../services/api'
import {Link} from 'react-router-dom'


interface InformationThemeProps {
    isOpen: boolean;
    onRequestClose: () => void;
    
}
// interface SluTema {
//     slugTemaNome: string
//   }
 
export function InformationTheme({isOpen,onRequestClose}:InformationThemeProps){

    const [infantil,setInfantil] = useState(0)
    const [adulto,setAdulto] = useState(0)
    const [minitable,setMinitable] = useState(0)
    const [padrao,setPadrao] = useState(0)
    const [slugs,setSlugs] = useState(0)
    
  
    useEffect(()=> { //Faz a Listagem das Postagens de acordo com o listar
    
        async function InformationTheme(){
        
            const responseinfantil = await api.get(`postagens?&page=&linesPerPage=&direction=ASC&orderBy&category=INFANTIL`)
            setInfantil(responseinfantil.data.totalElements)

            const responseadulto = await api.get(`postagens?&page=&linesPerPage=&direction=ASC&orderBy&category=ADULTO`)
            setAdulto(responseadulto.data.totalElements)

            const responseminitable = await api.get(`postagens?&page=&linesPerPage=&direction=ASC&orderBy&model=MINI_TABLE`)
            setMinitable(responseminitable.data.totalElements)

            const responsepadrao = await api.get(`postagens?&page=&linesPerPage=&direction=ASC&orderBy&model=PADRAO`)
            setPadrao(responsepadrao.data.totalElements)

            const responseslugs = await api.get(`temas`)
            setSlugs(responseslugs.data.totalElements)
          }
        
          
         
          InformationTheme()
        
     },[])

    return  (
        
     
     <>
         
         <Modal isOpen={isOpen} 
          onRequestClose={onRequestClose}
          overlayClassName="react-modal-overlay-information"
          className="react-modal-content-information">
                <Information>
                   <div className="title">
                       <p>Infantil</p>
                       <p>Adulto</p>
                       <p>Mini Table</p>
                       <p>Padrão</p>
                       <p>Slugs</p>
                       <Link to="/dashboard/slugs"><RiAddLine/></Link>
                   </div>
                   
                   <div className="number">
                       <p>{infantil}</p>
                       <p>{adulto}</p>
                       <p>{minitable}</p>
                       <p>{padrao}</p>
                      
                       <p> <Link to="/dashboard/slugs">{slugs}</Link></p>
                      

                   </div>
                    
                   
                </Information>
          </Modal>
        
        
        

        </>
      
            
    )

}
        