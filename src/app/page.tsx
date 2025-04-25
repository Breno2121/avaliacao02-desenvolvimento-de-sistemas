'use client'

import { useEffect, useState } from 'react';

export default function MarketList() {
  useEffect(() => {
    loadItens();
  }, [])


  function loadItens() {
    // BUSCA AS INFORMAÇÕES NA API FAKE
    // SALVA O VALOR NO ESTADO
  }

  type TextareaProps = {
    message: string;
    setMessage: (value: string) => void;
  }
  function handleAddItem({ message, setMessage }: TextareaProps) {
    
    return (
      <textarea
        placeholder={"Adicionar uma nova tarefa"}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
    )
  }

  function handleRemoveItem(id: string) {
    // FILTRA O ESTADO E REMOVE O ITEM
    // CHAMA A API PARA REMOVER O ITEM
    // CARREGA OS PRODUTOS NOVAMENTE // loadItens();
  }

  function handleUpdateItem(id: string) {
    // CRIA O OBJETO DO ITEM
    // CHAMA A API PARA ATUALIZAR O ITEM
    // CARREGA OS PRODUTOS NOVAMENTE // loadItens();
  }

  return (
    <div>
      <h1>MarketList</h1>

      <h2>Compras da semana</h2>

      <div className='container'>
        <div className='inputs'>
          <textarea
            placeholder={"Adicionar uma nova tarefa"}

          />
          <button id="button-adicionar" >
            Adicionar item
          </button>
        </div>
      <li>
        <h1>ITEMSSS</h1>
      </li>

      </div>
    </div>

  );
}
