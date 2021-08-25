import {Link} from 'react-router-dom'

import {useThemes} from "../../hooks/useThemes";


import { Search}  from '../../components/Search'
import { SignInButton } from '../../components/SignInButton'

import {MdDone} from 'react-icons/md'
import {FaRegEdit} from 'react-icons/fa'
import {VscClose} from 'react-icons/vsc'

import {RiDeleteBin6Line} from 'react-icons/ri'



import { useState, useEffect} from "react";
import { api } from "../../services/api";
import {Pagination} from "../../components/Pagination";

import { useCallback } from "react";
import Modal from 'react-modal'

import imagetemplate from '../../assets/img_slug.svg'
import ReactLoading from 'react-loading'

import {Header,ContainerSlug,ContentSlug} from './styles'

import logoImg from '../../assets/logo.svg'
//import { useAuth } from '../../hooks/useAuth';



interface Slug {
    id: number;
    slugTemaNome: string;
    url?:string
    
  }

export function Slugs() {
    Modal.setAppElement('#root');
 
    //const {token}  = useAuth(); 
    //const history = useHistory()
     const token = localStorage.getItem('@MpDecorações:token')

    api.defaults.headers.authorization = `Basic ${token}`;
    
    const [slugs, setSlugs] = useState<Slug[]>([])
    const [newslug,setNewSlug] = useState('');
    const [productsResponse, setproductsResponse] = useState(1); //total de elementos
    const [isNewThemeModalOpen,setIsNewThemeModalOpen] = useState(false);

    const [slugName,setSlugName] = useState('');
    const [slugId,setSlugId] = useState(0);
    const [editslug,setEditSlug] = useState(false)
    
    const [ideditslug,setIdEditSlug] = useState(0)
    const [urleditslug,setUrlEditSlug] = useState('')
    const [loading,setLoading] = useState(false)

    const {
      
      activepageslug,
      handleFindTheme,
   }  = useThemes();

   const CreateSlug = useCallback(async () => {
      if(newslug) {
        await api.post('/temas', {
          slugTemaNome: newslug,  
       },
      );
       setNewSlug('')
       }         
}, [newslug])

const EditSlug = useCallback(async () => {
 
    await api.put(`/temas/${ideditslug}`, {
      id: ideditslug,
      slugTemaNome: newslug,
      urleditslug: urleditslug,
    });
      setNewSlug('')
      setIdEditSlug(0)
      setUrlEditSlug('')
      setEditSlug(false)
 
  
       
}, [ideditslug,urleditslug,newslug])

const DeleteSlug = useCallback(async (id:number) => {
    await api.delete(`/temas/${id}`);
    const slugsFiltered = slugs.filter(slug => slug.id !== id);
    setSlugs(slugsFiltered);
    setIsNewThemeModalOpen(false)
  
}, [slugs])


useEffect(()=> {
 
  async function  ThemeFind(){
    //setLoading(true)
        const response_slug = await api.get(`temas?page=${activepageslug}&direction=ASC&orderBy=id`)
        const content_slug = response_slug.data.content
        const totalElements = response_slug.data.totalElements
       
        
 
        const slugcomplete: { id: number; slugTemaNome: string; url: string; }[] = []
 
        for (let index = 0; index < content_slug.length; index++) {
          if(!newslug){
           setLoading(true)
          }
         
         const element = content_slug[index];
         const responseimg = await api.get(`postagens?direction=ASC&orderBy=descricao_postagem&description=${element.slugTemaNome}`)
         
        const url = responseimg.data.content[0] === undefined ?  '' : responseimg.data.content[0].urlImg
 
        
         slugcomplete.push(
                   { id: element.id,
                     slugTemaNome: element.slugTemaNome,
                     url: url
                   })
                 
       }
         setLoading(false)
      
       
       
       setSlugs(slugcomplete)
       setproductsResponse(totalElements) 
    }

    ThemeFind()
    

  
},[activepageslug, newslug])


function handleOpenNewThemeModal(id:number , name:string) {
    setSlugName(name)
    setSlugId(Number(id))
    setIsNewThemeModalOpen(true)
}
function handleCloseNewThemeModal() {
    setIsNewThemeModalOpen(false)
}
    

   
   return (
     
        <>
         <Header>
          <Link to="/dashboard">
            <img  src={logoImg} alt="mpdecorações"/>
          </Link>:

              
          <nav >
            < Link to="/dashboard" 
            className="inativ"
            onClick={() => handleFindTheme('')}
            >Home</Link>
          </nav>
  
            <Search />  
          <SignInButton/>
          
         
     </Header>
              <ContainerSlug>
               
              <ContentSlug>
               
              <h2>{editslug === false ? "Cadastrar Slug" : "Editar Slug"}</h2>
              
              {editslug === false ? (
               <div className="container_create_slug">
                    
                    <span>Nome</span>
                    <input placeholder="Digite o nome do slug" type="text" name="" 
                    value={newslug}
                    onChange={e => setNewSlug(e.target.value)}
                    />
                    <MdDone 
                    onClick={CreateSlug}
                    />
                    <div className="pagination">
                    <Pagination type="slug" totalElements={productsResponse}/>
                    </div>
                   
                </div>
              ):
              <div className="container_edit_slug">    
              <span>Nome</span>
              <input placeholder={newslug} type="text" name="" 
              value={newslug}
              onChange={e => setNewSlug(e.target.value)}
              />
              <VscClose className="close_edit"
             onClick={() =>
               {
                 setEditSlug(false)
                 setNewSlug('')}
               } 
               
             />
              <MdDone className="salve_edit"
              onClick={EditSlug}
              />
              <div className="pagination">
              <Pagination type="slug" totalElements={productsResponse}/>
              </div> 
          </div>
              
              
              }
               
                <main className="list_slugs">
                  {loading && 
                  <div className="container_loading">
                   <ReactLoading type={"spokes"} width="44px" height="44px" color="#f7f7f7" className="loading"/>
                  </div>
                   
                  }
                 
         {slugs.map(slug => 
        
              <section key={slug.id}>

              <div className="container-img">
                  
                <img 
                src={slug.url !== '' ? slug.url : imagetemplate} alt= "" />   
                 {/* <img src={imagetemplate} alt= "" />    */}
              </div>
             
              <p>{slug.slugTemaNome}</p>
                 <FaRegEdit className="edit_post"
                 onClick={() => 
                   {
                     
                     setIdEditSlug(slug.id)
                     setUrlEditSlug(String(slug.url))
                     setNewSlug(slug.slugTemaNome)
                     setEditSlug(true)
                   }
                 }
                 />
                <RiDeleteBin6Line 
                 onClick={() => handleOpenNewThemeModal(slug.id, slug.slugTemaNome)}
             
                />
           </section>

         )}
                </main> 
                 
             </ContentSlug> 
         </ContainerSlug> 
            <Modal 
           isOpen={isNewThemeModalOpen} 
          onRequestClose={handleCloseNewThemeModal}
          overlayClassName="react-modal-overlay-slug"
          className="react-modal-content-slug">
              <header>
                  <div>
                    <strong>Deseja remover o slug {slugName} ?</strong>
                  </div>
                <VscClose
                onClick={() => setIsNewThemeModalOpen(false)}
                />
              </header>
                  
                <div className="btn-container">
                    <button 
                    onClick={() => DeleteSlug(slugId)}
                    className="btn-yes">Sim</button>


                    <button 
                    onClick={() => setIsNewThemeModalOpen(false)}
                    className="btn-no">Não</button>
                </div>
             
          </Modal>

        </>

        
        
    )
    
}
