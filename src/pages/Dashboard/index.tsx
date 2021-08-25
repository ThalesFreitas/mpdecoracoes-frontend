import { Filter } from "../../components/Filter";
//import { Themes } from "../../components/Themes";
import { Header, Container } from "./styles";
import logoImg from '../../assets/logo.svg'
import { Search } from '../../components/Search'
import { SignInButton } from '../../components/SignInButton'
import {FaRegEdit} from 'react-icons/fa'

import {RiDeleteBin6Line} from 'react-icons/ri'

import Modal from 'react-modal'
import { NewThemeModal } from '../../components/NewThemeModal'
//import {InformationTheme} from '../../components/InformationTheme'
import AppProvider from '../../hooks/index'

import {useState,useEffect} from "react";

import {useThemes} from "../../hooks/useThemes";

import {Link} from 'react-router-dom'

import { api } from "../../services/api";
import { useAuth } from "../../hooks/useAuth";


// interface ThemeParams {
//     theme: string;
//   }
    interface Themes {
    id: number;
    descricaoPostagem: string;
    urlImg: string;
  }


export function Dashboard() {
    Modal.setAppElement('#root');
    
    const {user} = useAuth();

    //api.defaults.headers.authorization = `Basic ${token}`;
    const token = localStorage.getItem('@MpDecorações:token')

    api.defaults.headers.authorization = `Basic ${token}`;

    const [isNewThemeModalOpen,setIsNewThemeModalOpen] = useState(false);
    //const [InformationTheme,setInformationTheme] = useState(false);
    const [themes, setThemes] = useState<Themes[]>([])
    //const [productsResponse, setproductsResponse] = useState(1);
    //const [InformationThemeModalOpen,setInformationThemeModalOpen] = useState(false);
    

    function handleOpenNewThemeModal() {
        setIsNewThemeModalOpen(true)
    }
    function handleCloseNewThemeModal() {
        setIsNewThemeModalOpen(false)
    }
     //information theme
//      function handleOpenInformationThemeModal() {
//         setInformationThemeModalOpen(true)
//     }
//    function handleCloseInformationThemeModal() {
//     setInformationThemeModalOpen(false)
//    }
    // <BsList onClick={handleOpenInformationThemeModal}/> 

    // const {
    //    totalelements
    //  }  = useContext(ThemesContext);
     
     const [selectbuttonhome,setSelectButtonHome] = useState(true)
     const [selectbuttonposts,setSelectButtonPosts] = useState(false)
    
     const {
        activepagesearch,
        itempage,
        //handleFindTheme,
     }  = useThemes();

     useEffect(()=> {
 
        async function  ThemeFind(){
       
             const response = await api.get(`postagens?&page=${activepagesearch}&linesPerPage=${itempage}&direction=ASC&orderBy=descricao_postagem`)
             
             const {content} = response.data
            // setproductsResponse(response.data.totalElements)
             setThemes(content);
        }
          ThemeFind()
        
      },[activepagesearch,itempage])
    
    return(
        <>
       <Header>
           {/* <InformationTheme
                isOpen={InformationTheme}
                onRequestClose={handleCloseInformationThemeModal}
        /> */}
          
       <Link to="/">  
        <img src={logoImg} alt="mpdecorações"/>  
        </Link> 
            
       
          <nav>
                < Link to="/dashboard"
                className={`${selectbuttonhome ? 'active' : 'inativ'}`}
                onClick={() => 
                    {
                        setSelectButtonPosts(false)
                        setSelectButtonHome(!selectbuttonhome)   
                    }
                    
                }
                >Home</Link>
              
               
                
                {/* < Link 
                to="/dashboard/posts" 
                className={`${selectbuttonposts ? 'active' : 'inativ'}`}
                onClick={() => 
                    {
                        setSelectButtonHome(false)
                        setSelectButtonSlugs(false)
                        setSelectButtonPosts(!selectbuttonposts)   
                    }
                    
                }
                >Novo Post</Link> */}

                
                {/* < Link 
                to="#" 
                className={`${selectbuttonposts ? 'active' : 'inativ'}`}
                onClick={() => 
                    {
                        handleOpenNewThemeModal()
                        setSelectButtonHome(false)
                        setSelectButtonPosts(!selectbuttonposts)   
                    }
                    
                }
                >Novo Post</Link> */}
               
          </nav> 

               <div>
                <AppProvider>
               <NewThemeModal  
                isOpen={isNewThemeModalOpen}
                onRequestClose={handleCloseNewThemeModal}
                />
                </AppProvider>
                </div>
               <Search/>
            <SignInButton/>
            <div>
         
            </div>
           
       </Header>

        <Filter/> 
        {/* <Link to="/dashboard/slugs"> // vai para slug
                <button>Slugs</button>
         </Link>  */}
        {/* <Pagination totalElements={totalelements}/>   */}
        {selectbuttonhome ? (
            <Container>
            {themes.map(theme => 
               <section key={theme.id}>
                     <div className="container-img">
                     <img src={theme.urlImg} alt={theme.descricaoPostagem}  /> 
                     </div>
                    
                     <div className="container-footer">
                        <p>{theme.descricaoPostagem}</p>
                        <FaRegEdit className="edit_post"/>
                       <RiDeleteBin6Line/>
                     </div> 
                  </section>
               
            )}  
            
            </Container>
        ):
        ''
        }
{/*        
       <InformationTheme
          isOpen={InformationThemeModalOpen}
          onRequestClose={handleCloseInformationThemeModal}
          /> */}
         
        
         
        </> 
    )


}
