import {useThemes} from "../../hooks/useThemes";

import {Container,Content, ContainerModal} from "./styles";
//import {BsList} from 'react-icons/bs'
import Modal from 'react-modal'
import { useState } from "react";
//import {GrCircleInformation} from 'react-icons/gr'

export function Filter() {
  Modal.setAppElement('#root');
   const {
   
    selectcategory,
    selectmodel,
    itempage,
  
   
    handleSelectCategory,
    handleSelectModel,
    handleItemPage
  } = useThemes();

  const [ModalListTheme,setModalListTheme] = useState(false);

  function handleOpenListTheme() {
    setModalListTheme(true)
}
function handleCloseListTheme() {
  setModalListTheme(false)
}

      return (
   <>
        <Container>
         
 <Content>
 <div 
 className="menu_hamburguer"
 onClick={handleOpenListTheme}
 >
      <div className={`one ${selectcategory !== 'Categoria' ? 'active' : 'inativ'}`}  />
      <div className={`two ${selectmodel !== 'Modelo' ? 'active' : 'inativ'}`}/>
      <div className={`three ${itempage !== 12 ? 'active' : 'inativ'}`}/>
    </div>
   {/* <BsList 
  onClick={handleOpenListTheme}
  />   */}
  {/* <GrCircleInformation color="#eba417"/> */}
   <h3>Listar</h3>          
     <select id="category" value={String(selectcategory)} className={selectcategory !== 'Categoria' ? 'activeoption': ''}
      onChange={event => handleSelectCategory(event.target.value)}>
     <option value="Categoria">Categoria</option>
     <option value="INFANTIL">Infantil</option>
     <option value="ADULTO">Adulto</option>
     </select>
    

     <select id="model" value={String(selectmodel)} className={selectmodel !== 'Modelo' ? 'activeoption': ''}
     onChange={event => handleSelectModel(event.target.value)}>
     <option value="Modelo">Modelo</option>
     <option value="MINI_TABLE">Mini Table</option>
     <option value="PADRAO">Padrão</option>
     </select>

     <select id="itemspage" value={itempage} className={itempage !== 12 ? 'activeoption': ''}
     onChange={event => handleItemPage(Number(event.target.value))}>
     <option value="12">Itens por página</option>
     <option value="15">15 itens por página</option>
     <option value="20">20 itens por página</option>
     <option value="25">25 itens por página</option>
     </select>
      
      </Content>
          
         
     
                 
          </Container>

          <Modal isOpen={ModalListTheme} 
          onRequestClose={handleCloseListTheme}
          overlayClassName="react-modal-overlay-mobile"
          className="react-modal-content-mobile">

<ContainerModal>       
     <select id="category" value={String(selectcategory)} className={selectcategory !== 'Categoria' ? 'activeoption': ''}
      onChange={event => handleSelectCategory(event.target.value)}>
     <option value="Categoria">Categoria</option>
     <option value="INFANTIL">Infantil</option>
     <option value="ADULTO">Adulto</option>
     </select>
    

     <select id="model" value={String(selectmodel)} className={selectmodel !== 'Modelo' ? 'activeoption': ''}
     onChange={event => handleSelectModel(event.target.value)}>
     <option value="Modelo">Modelo</option>
     <option value="MINI_TABLE">Mini Table</option>
     <option value="PADRAO">Padrão</option>
     </select>

     <select id="itemspage" value={itempage} className={itempage !== 12 ? 'activeoption': ''}
     onChange={event => handleItemPage(Number(event.target.value))}>
     <option value="12">Itens por página</option>
     <option value="15">15 itens por página</option>
     <option value="20">20 itens por página</option>
     <option value="25">25 itens por página</option>
     </select>
      
      </ContainerModal>
               
          </Modal>
</>
              
         
          )
          
         
    }
   
   
       




