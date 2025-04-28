'use client'

import { useEffect, useState } from 'react';
import { RiAddLargeLine } from "react-icons/ri";
import { GrEdit } from "react-icons/gr";
import { MdOutlineDelete } from "react-icons/md";

export default function MarketList() {
  const [message, setMessage] = useState('');
  const [items, setItems] = useState<any[]>([]);
  useEffect(() => {
    loadItems();
  }, []);

  function loadItems() {
    setItems([]);
  }

  function handleAddItem() {
    if (message.trim()) {
      const newItem = { id: Date.now().toString(), name: message, selected: false };
      setItems((prevItems) => [...prevItems, newItem]);
      setMessage('');
    }
  }

  function handleRemoveItem(id: string) {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
  }

  function handleUpdateItem() {
    // CRIA O OBJETO DO ITEM
    // CHAMA A API PARA ATUALIZAR O ITEM
    // CARREGA OS PRODUTOS NOVAMENTE // loadItens();
  }
  function checked(id: string) {
    const updatedItems = items.map(item =>
      item.id === id ? { ...item, selected: !item.selected } : item
    );
    setItems(updatedItems);
  }
  return (
    <div>
      <h1>MarketList</h1>

      <h2>Compras da semana</h2>

      <div className='container'>
        <div className='inputs'>
          <textarea placeholder="Adicionar uma nova tarefa" value={message} onChange={(e) => setMessage(e.target.value)} />
          <button id="button-adicionar" onClick={handleAddItem}>
            <RiAddLargeLine />
          </button>
        </div>
        <ul>
          {items.map(item => (
            <li key={item.id}>
              <input
                type="checkbox"
                checked={item.selected}
                onChange={() => checked(item.id)}
              />
              <span style={{ textDecoration: item.selected ? 'line-through' : 'none' }}>{item.name}</span>
              <div className='buttons'>
                <button onClick={() => handleRemoveItem(item.id)}><MdOutlineDelete /></button>
                <button onClick={() => handleUpdateItem()}>
                  <GrEdit />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}