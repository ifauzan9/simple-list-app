import {useState, useEffect} from 'react';

import Container from "./components/Container";
import Info from "./components/Info";
import Input from "./components/Input";
import ItemWrap from "./components/ItemWrap";
import Navbar from "./components/Navbar";

function App() {
  const [items, setItems] = useState([
    {title: 'jagung', count: 2},
    {title: 'jeruk', count:4},
    {title: 'nanas', count: 8}
  ])
  const [input, setInput] = useState('');

  const handleChange = (e, index) => {
    const newItems = [...items];    
    if(e.target.name === "minus"){
      if(newItems[index].count > 0){
        newItems[index].count = newItems[index].count - 1;        
      }else{
        newItems.splice(index, 1);
      }
      setItems(newItems);
      return;
    }
    newItems[index].count = newItems[index].count + 1;
    setItems(newItems);
  }
  
  const handleNewInput = (e) => {
    setInput(item => {      
      return e.target.value;
    });
  }

  const addNewItem = () => {
    if(!input){
      alert('Masukan Input');
      return;
    }
    const newsItem = [...items];
    const newInput = {
      title:input,
      count:1
    }

    newsItem.push(newInput);
    setItems(newsItem);
    
  }

  const handleDeleteAll = () => {
    if(window.confirm("Hapus semua?")){
      setItems([]);
      setInput('');
    }
  }

  const getTotalCounts = () => {
    const totalCount = items.reduce((prev, item, index) => {      
      return prev + item.count;
    }, 0)

    return totalCount;
  }  

  return (
    <>
      <Navbar />
      <Container>
        <Input 
          handleNewInput={handleNewInput}          
          addNewItem={() => addNewItem()}          
        />
        <Info 
          totalList={items.length}
          totalCounts ={getTotalCounts()}
          handleDeleteAll={() => handleDeleteAll()}
        />
        <ItemWrap 
          items={items} 
          handleChange={(e, index) => handleChange(e, index)}
          handleNewInput={(e) => handleNewInput(e)}          
        />
      </Container>
    </>
  );
}

export default App;
