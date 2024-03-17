'use client'

import { Filter, X   } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { FilterOptions, Operator } from '@/types/Filter';

interface ModalFilterProps {
    filterOptions: FilterOptions;
    id?: string;
}

export const ModalFilter: React.FC<ModalFilterProps> = (props : ModalFilterProps ) => {
  const [filterText, setFilterText] = useState('');
  const [selectedOption, setSelectedOption] = useState(Operator.Is);
  const [_, setFilterVisible] = useState(false);
  const [active, setActive] = useState(false);
  const [clickedOutside, setClickedOutside] = useState(false);

  const handleModalFilter = () => {
    setClickedOutside(true);
  };

  const opaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (opaRef.current && !opaRef.current.contains(event.target as Node)) {
        setClickedOutside(false);
      } else {
        setClickedOutside(true);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleApplyFilter = () => {
    if(filterText != ''){
      setFilterVisible(true);
    }
  
    props.filterOptions.Filters.set(
      String(props.id), 
      {
        Operator:selectedOption,
        Filters:[filterText]
      });
    
    setClickedOutside(false);
    setActive(true)
  };

  const handleRemoveFilter = () => {
    props.filterOptions.Filters.delete(String(props.id))
    setActive(false)
  };
    
  function RadioButton(operator: Operator, valor: string){
    return <div className='flex-col justify-center mb-0.5'>
            <input
              className='h-3 w-3'
              type="radio"
              id={valor}
              value={operator}
              checked={selectedOption === operator}
              onChange={() => setSelectedOption(operator)}
            />
            <label htmlFor={valor} className='ms-1 text-sm text-zinc-300'>
            {valor}
          </label>
        </div>
  }

    return (
      <div>
        <div className="relative inline-block">
          <div className="flex space-x-0.5">
            <button
              id="filter"
              onClick={handleModalFilter}
              className="bg-zinc-600 p-[3px] active:outline-zinc-500 outline-1 active:scale-90 transform active:bg-zinc-700 border-zinc-400 w-5 h-5 flex items-center justify-center rounded-md"
            >
              <Filter className={`${active ? "text-green-500 dark:text-green-400" : "text-zinc-200 dark:text-zinc-400"} w-4 h-4 `} />
              
            </button>

            <button
              id="filterx"
              onClick={handleRemoveFilter}
              className={`${active ? "flex" : "hidden"} hover:bg-red-800 group bg-zinc-600 p-[3px] active:outline-zinc-500 outline-1 active:scale-90 transform active:bg-red-950 border-zinc-400 w-5 h-5  items-center justify-center rounded-md`}
              >
              <X className="w-4 h-4 text-zinc-300 dark:text-zinc-400 group-hover:text-zinc-200 group-active:text-zinc-200" />
            </button>
          </div>
          
          <div className={`${clickedOutside ? "relative" : "hidden"}`} ref={opaRef}>
            <div className="absolute flex items-center justify-center">
              <div className="bg-white dark:bg-zinc-500 border border-gray-300 dark:border-gray-700 p-3 rounded-md shadow-md auto-size-background">
                <label className="text-sm text-zinc-300" htmlFor="filterText">Filtrar por:</label>
                <input
                  type="text"
                  className="mt-1 placeholder-opacity-10 w-full border border-gray-300 dark:border-gray-700 p-2 rounded-md dark:text-zinc-400"
                  placeholder="Digite seu filtro aqui:"
                  id="filterText"
                  value={filterText}
                  onChange={(e) => setFilterText(e.target.value)}
                  style={{ width: 'auto' }}  
                />

                <div className="mt-0.5">
                  <p className='py-2 text-sm text-zinc-300'>Escolha uma opção:</p>
                  <div className='flex-col justify-center'>
                    {RadioButton(Operator.Is, "É um")}
                    {RadioButton(Operator.IsNot, "Não é um")}
                    {RadioButton(Operator.Exists, "Existe")}
                    {RadioButton(Operator.DoesNotExists, "Não existe")}
                    {RadioButton(Operator.StartWith, "Começa com")}
                    {RadioButton(Operator.IsOneOf, "É um de")}
                    {RadioButton(Operator.IsNotOneOf, "Não é um de")}
                  </div>
                </div>

                <div>
                  <div className="flex space-x-2">
                    <button
                      id="filterApplier"
                      onClick={handleApplyFilter}
                      className="flex-1  mt-3 bg-zinc-100 p-2 rounded-md text-zinc-500">
                      Aplicar Filtro
                    </button>
                    <button
                      id="filterRemover"
                      onClick={handleRemoveFilter}
                      className={`${active ? "flex" : "hidden"} mt-4 bg-red-500 p-2 rounded-md text-zinc-200`}>
                      Limpar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}