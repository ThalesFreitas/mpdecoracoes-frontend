import {Link} from 'react-router-dom'

import {useThemes} from "../../hooks/useThemes";

import { Search } from '../../components/Search'
import { SignInButton } from '../../components/SignInButton'
import { Filter } from "../../components/Filter";
import { Pagination } from "../../components/Pagination";
import {Themes} from "../../components/Themes";
import { Footer } from "../../components/Footer";

import {Header,ThemesContainer, ContainerFilterPagination} from "./styles";

import logoImg from '../../assets/logo.svg'
import { useState } from 'react';


export function Home() {

    const {
       themes,
       totalelements,
       handleSelectCategory,
       handleSelectModel,
       handleItemPage,
       handleActivePageHome
     }  = useThemes();

     const [active,setActive] = useState(true)


     function handleClear() {
       handleSelectCategory('Categoria')
       handleSelectModel('Modelo')
       handleItemPage(12)
       handleActivePageHome(0)
     }
     function StateButton(){
       setActive(!active)
     }

   
    return(
        <>
        <Header> 
          <main>
            <section>
              <Link to="/">  
                  <img 
                  src={logoImg} 
                  alt="mpdecorações"
                  onClick={handleClear}
                  />  
              </Link>
                <div className="user_name">
                <span>Bem vindo,</span>
                <Link to="/profile">
                  <strong>&nbsp; Thales Rodrigues</strong>
                </Link>
              </div>
            </section>
           
            <div>
              <nav>
                < Link to="/" 
                  className={`${active === true ? 'inative':'active'}`}
                  onClick={() =>
                    {
                      handleClear() 
                      StateButton()
                    }
                  }
                  >Home
                </Link>

                < Link to="/" 
                  className={`${active ? 'active' : 'inative'}`}
                  onClick={StateButton}
                  >Post
                </Link>
              </nav>
              <Search/> 
            </div>
            
          </main>
          
           <SignInButton/> 
        </Header> 

        <ContainerFilterPagination>
          <div className="content">
            <Filter />
            <div className="pagination">
              {/* passa para o componente de pagination o tipe dele */}
            <Pagination  type="home" totalElements={totalelements}/> 
            </div>
          </div>
        </ContainerFilterPagination>

        <ThemesContainer>
          <Themes themes={themes}/>
          <Footer/> 
        </ThemesContainer>   
        </> 
        
    )


}
