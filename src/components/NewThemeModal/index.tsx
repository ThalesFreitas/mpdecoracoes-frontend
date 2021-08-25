
import Modal from 'react-modal'
import {Container,Template, ContainerToast,Toast} from './styles'
import {CgAdd} from 'react-icons/cg'
import {SiVerizon} from 'react-icons/si'
import {BiUpArrowAlt} from 'react-icons/bi'
import { FiXCircle, FiCheckCircle} from 'react-icons/fi'
import addimg from '../../assets/add img.svg'

import template from '../../assets/template2.svg'
import {useState,useEffect,FormEvent, useCallback, ChangeEvent} from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


import { api } from '../../services/api'
import {SiWhatsapp} from 'react-icons/si'
import closeImg from '../../assets/close.svg'; 

import {useToast} from '../../hooks/toast'




// const handleSubmit = useCallback( async () => {
//   addToast({
//     type: 'error',
//     title: 'Erro na autenticação',
//     description: 'Ocorreu um erro ao fazer login, cheque as credenciais.',
//   });
// },[addToast])

// handleSubmit()

interface NewThemeModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    
}
interface SluTema {
    slugTemaNome: string
  }
 
export function NewThemeModal({isOpen,onRequestClose}:NewThemeModalProps){
   const [titulo, setTitulo] = useState('')
   const [slug,setSlug] = useState('')
   const [categoria,setCategoria] = useState('')
   const [modelo,setModelo] = useState('')
   const [filelabel, setFileLabel] = useState('');

   const[opencreateslug,setOpenCreateSlug] = useState(false)
   const [newslug,setNewSlug] = useState('');
   
   const [msgsucess, setMsgSucess] = useState('')
   const [toast, setToast] = useState(false)
  
   
   const [totalthemes, setTotalThems] = useState<SluTema[]>([]);


     
     // const [findtheme, setFindTheme] = useState('')

      useEffect(() => {
        
        async function FindSlugTheme(){
         
            const response = await api.get(`temas`)
            const {content} = response.data
           
            
            setTotalThems(content) 
           
        }
        FindSlugTheme()
      
        },[slug]) 
      
        const alltheme = totalthemes.map(totaltheme => totaltheme.slugTemaNome)
 

        const { addToast } = useToast();



async function handleCreateNewTheme(event: FormEvent) {
    event.preventDefault();
    
    
    await api.post('/postagens', {
        descricaoPostagem: titulo,
        slugTema: {
            id: slug
        },
        urlImg: filelabel,
        categoria: categoria,
        modelo: modelo
        
     });
     
     addToast({
        type: 'sucess',
       title: 'Tema cadastrado',
        description: 'Sua postagem foi cadastrada com sucesso!',
      });

    //limpa os campos do modal
    // setTitulo('')
    // setSlug('')
    // setFileLabel('')
    // setCategoria('')
    // setModelo('')
    //fecha o modal
    onRequestClose();

}
const [clickadd,setClickAdd] = useState(false); //exibi ou não o seta de upload



//Enviando para S3
const handleImageChang = useCallback(async(e: ChangeEvent<HTMLInputElement>) => {
    
        if (e.target.files){
    
            const data = new FormData();
            const file_input = e.target.files[0]    
            // data.append('file', e.target.files[0]);
            if(file_input !== undefined){
                setClickAdd(true)
                data.append('file', file_input);
                await api.post('/postagens/image', data).then((response) => {
                    setFileLabel(response.data.uri) 
                })
            } else {
                setFileLabel('')
            }
               
           } 

           
            
    //  if(filelabel === ''){
    //      setClickAdd(true)
    //  }

   

    //   if(e.target.files){
    //       setClickAdd(true)      
    //   }
     
    //  if(filelabel !== ''){
    //      setFileLabel('')
    //  }

   

}, [])

useEffect(() => {
    if(filelabel !== ''){
        setClickAdd(false)
    }
    
},[filelabel])



const handleSlugTheme = useCallback(async (value) => {
    await api.get(`/temas/${value}`).then((response) => {
            setSlug(response.data.id)
            setMsgSucess('Slug inserido com sucesso !') 
           
            
        })
        setMsgSucess('')
        
    

}, [])

const CreateSlug = useCallback(async () => {
   
    if(opencreateslug === true && newslug !== '') {
        await api.post('/temas', {
            slugTemaNome: newslug  
         });
           setOpenCreateSlug(false)
           handleSlugTheme(newslug)

            //Toast
        setToast(true)
        const timer = setTimeout(() => {
            setToast(false)
        }, 2900);

        return () => {
            clearTimeout(timer)
        };

    }
      
 
   
}, [newslug,opencreateslug,handleSlugTheme])

const ClearSlug = useCallback(() => {
    setOpenCreateSlug(true)
    // setNewSlug('')
    // setSlug('')
}, [])

    return  (
        
     
     <>
         
         <Modal isOpen={isOpen} 
          onRequestClose={onRequestClose}
          overlayClassName="react-modal-overlay-img"
          className="react-modal-content-img">
                <Template>
                   <div>
                     {/* <img src={file?  template : file} alt=""/>  */}
                     
                          {/* <img src={preview === undefined ?  template : preview} alt=""/>   Preview Imagem   */}
                          <img src={filelabel === '' ?  template : filelabel} alt=""/>

                   </div>
                   
                    <footer>
                        <h2>{titulo === '' ? 'Titulo': titulo}</h2>
                        <SiWhatsapp/>
                    </footer>
                </Template>
          </Modal>
        
         
        <Modal 
          isOpen={isOpen} 
          onRequestClose={onRequestClose}
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
          >
              
              <Container onSubmit={handleCreateNewTheme}>
             
             
                <div className="cad-close">
                <h2>Cadastrar Tema</h2>
                <button 
                    type="button"
                    onClick={onRequestClose}   
                >
                <img src={closeImg} alt="Fechar modal" />
            </button>
                </div>
               
                <strong>Titulo</strong>
                <input 
                required
                type="text"
                value={titulo} 
                placeholder="Digite o titulo do tema" 
                onChange={event => setTitulo(event.target.value)}/>
               
               <div className="slug-title">
                  <strong>{opencreateslug === false ? 'Slug' : 'Novo Slug'}</strong>
                  <span>{opencreateslug === false ? msgsucess : ''}</span>
               </div>
                
               
                {opencreateslug === false ? (
                    <div className="container">
                <div id="combo-box-demo-forms"> 
               <Autocomplete
                    options={alltheme ? alltheme : []}
                    getOptionLabel={alltheme => alltheme}
                    onChange={(event, value) => value !== null ? handleSlugTheme(String(value)) : ''}

                    renderInput={(params) => <TextField {...params}
                    // onChange={event => setNewSlug(event.target.value)}
                    // onChange={e => setNewSlug(e.target.value)}
                    placeholder={slug !== '' ? newslug: "Informe o slug do tema" } 
                    />}
                />
               
                
               
                {/* <span>Novo Slug</span> */}
               </div>
              
                    <div className="add-slug">
                        <CgAdd onClick={ClearSlug}/>
                        <span >Novo Slug</span>
                    </div>
              
               </div>
               
               ):
               ''
            }

                {opencreateslug === true ? (
                    <div className="slug">
                    <input 
                    required 
                    type="text"
                    placeholder= {"Nome do novo slug"}
                    onChange={e => setNewSlug(e.target.value)} 
                    
                    />
                    <img src={closeImg} alt="Fechar"
                    onClick={() => setOpenCreateSlug(false)}
                    />
                    <SiVerizon 
                     onClick={CreateSlug}
                    />
                    </div> 
                    
                ):
                ''
                }
                
               
            
                
                <div className="categoria">
                    <strong>Categoria</strong>

                    <div className="form-group">
                    <input 
                    required   
                    checked={categoria === 'INFANTIL' ? true : false}  
                    className="radio" 
                    type="radio" 
                    id="infantil" 
                    value="INFANTIL" 
                    name="categoria"
                    onChange={event => setCategoria(event.target.value)}
                    />
                    <label htmlFor="infantil">Infantil</label>
                    </div>
                    
                    <div className="form-group">
                    
                    <input 
                    required   
                    checked={categoria === 'ADULTO' ? true : false}
                    className="radio" 
                    type="radio" 
                    id="adulto" 
                    value="ADULTO" 
                    name="categoria"
                    onChange={event => setCategoria(event.target.value)}
                    />
                    <label htmlFor="adulto">Adulto</label>
                    </div>

                </div>

                <div className="modelo">
                    <strong>Modelo</strong>
                   
                    <div className="form-group">
                    <input 
                    required  
                    checked={modelo === 'MINI_TABLE' ? true : false}
                    className="radio" 
                    type="radio" 
                    id="mini-table" 
                    value="MINI_TABLE" 
                    name="modelo"
                    onChange={event => setModelo(event.target.value)}
                    />
                    <label htmlFor="mini-table">Mini Table</label>
                    </div>

                    
                    <div className="form-group">
                    <input 
                    required 
                    checked={modelo === 'PADRAO' ? true : false}
                    className="radio" 
                    type="radio" 
                    id="padrao" 
                    value="PADRAO" 
                    name="modelo"
                    onChange={event => setModelo(event.target.value)}
                    />
                    <label htmlFor="padrao">Padrão</label>
                    </div>

                </div>
                
              <strong>Imagem</strong>
              <div className="fileimg">
                  {/* <label htmlFor="fileimg">{filelabel === '' ? 'Nenhuma Imagem Selecionada' : filelabel}</label> */}
                  <input required type="file" id="fileimg" 
                onChange={handleImageChang}
                    name="fileimg"
                    />
               <div id="button-add-img">
                    <label htmlFor="fileimg">
                    <img 
                    src={addimg}  
                    alt="adicionar imagem"/> 
                    </label>
                    
                    <div className="upload-icon">
                   {clickadd === true ? (
                    <BiUpArrowAlt/>
                   ):
                   ''
                }
                    
                    </div>
                    
               </div>
             
              
               
              </div>
            
              <button type="submit">Salvar</button>

             {/* {toast === true ? (
                 <div className="container-toast">
                    
                    <div>
                    <strong>Slug criado com sucesso !</strong>
                    </div>
                 </div>
                
             ):
             false
            } */}
                {toast === true ? (
                    <ContainerToast>
                    <Toast>
                        <FiCheckCircle size={20}/>
                        <div>
                            <strong>Slug criado com sucesso</strong>
                        </div>
                        <button 
                        type="button"
                        onClick={() => setToast(false)}
                        >
                            <FiXCircle size={18}/>
                        </button>
                    </Toast>
                </ContainerToast>
                ):
                false
                }
                
              
              </Container>
              
        </Modal>
        

        </>
      
            
    )

}
        