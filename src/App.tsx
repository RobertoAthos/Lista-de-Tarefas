
import GlobalStyle from "./GlobalStyles";
import * as C from './GlobalStyles'
import {useState} from "react";
import {Item} from '././types/item'
import {ListItem} from './Components/ListItem'
import { AddArea } from "./Components/AddArea";

export const ToDo = ()=>{

  const[list, setList] = useState <Item[]> ([
    {id:1,name: "Comprar o pão na padaria", done:false},
    {id:2,name: "Comprar o Bolo na padaria", done:true}
  ])

  const handleAddTask = (taskName:string) =>{
    let newList = [...list]
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    })
    setList(newList)
  }
  return(
    <>
    <C.Container>
    <C.Area>
      <C.Header>
        Lista de Tarefas
      </C.Header>

    <AddArea 
    onEnter={handleAddTask}
    />

    {list.map((item,index)=>(
      <ListItem 
      key={index} 
      item={item}/>
    ))}

    </C.Area>
  </C.Container>
  <GlobalStyle />
  </>
  )
}
