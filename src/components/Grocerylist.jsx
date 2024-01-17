import { useState } from "react";
import Item from "./Items";

export default function GroceryList({items, onDeleteItems, onToggleItem, onClearItems}) {

    const [ sortBy, setShortBy] = useState('input');
    
    let sortedItem;
    
    if(sortBy === 'input'){
      sortedItem = items;
    }else if (sortBy === 'name'){
      sortedItem = items.slice().sort((a, b) => a.name.localeCompare(b.name));
    }else {
      sortedItem = items.slice().sort((a, b) => a.checked - b.checked);
    }
    
      return (
        <>
          <div className='list'>
            <ul>
              {sortedItem.map((item) => (
                <Item item={item} key={item.id} onDeleteItems={onDeleteItems} onToggleItem={onToggleItem}/>
              ))}
            </ul>
          </div>
          <div className='actions'>
            <select value={sortBy} onChange={(e) => setShortBy(e.target.value)}>
              <option value='input' >Urutkan berdasarkan urutan input</option>
              <option value='name'>Urutkan berdasarkan nama barang</option>
              <option value='checked'>Urutkan berdasarkan ceklis</option>
            </select>
            <button onClick={onClearItems}>Bersihkan Daftar</button>
          </div>
        </>
      )
    }