import { useState } from 'react'

import Header from './components/header';
import Form from './components/form';
import GroceryList from './components/Grocerylist';
import Footer from './components/Footer';

export default function App() {
const [items, setItems] = useState([]);

function handleAddItems(item) {
  setItems([...items, item]);
}

function handelDeleteItems(id) {
  setItems((items) => items.filter((item) => item.id !== id));
}

function handelToggleItem(id) {
  setItems((items) => items.map((item) => item.id === id ? {...item, checked: !item.checked} : item))
}

function handelClearItems( ){
  setItems([]);

}
  return (
    <>
      <div className='app'>
        <Header />
        <Form onAddItem = {handleAddItems} />
        <GroceryList items={items} onDeleteItems={handelDeleteItems} onToggleItem={handelToggleItem} onClearItems={handelClearItems}/>
        <Footer items={items}/>
      </div>
    </>
  )

}









