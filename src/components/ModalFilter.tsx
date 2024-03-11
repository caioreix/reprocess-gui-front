'use client'

import { Filter } from 'lucide-react';
import React, { PropsWithChildren, useState } from 'react';
import { FilterOptions, Operator } from '@/types/Filter';

interface ModalFilterProps {
    filterOptions: FilterOptions;
    id?: string;
}

export const ModalFilter: React.FC<ModalFilterProps> = (props : ModalFilterProps ) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [filterText, setFilterText] = useState('');
  const [selectedOption, setSelectedOption] = useState(Operator.Is); // Estado para armazenar a opção selecionada
  const [isFilterVisible, setFilterVisible] = useState(false);

  const handleModalFilter = () => {
    setModalOpen(!isModalOpen);
  };

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

    setModalOpen(false);
  };

  const handleRemoveFilter = () => {
    props.filterOptions.Filters.delete(String(props.id))
  };
    
    return (
      <div>
        <div className="relative inline-block">
        <button
          onClick={handleModalFilter}
          className="bg-zinc-600 p-[3px] active:outline-zinc-500 outline-1 active:scale-90 transform active:bg-zinc-700 border-zinc-400 w-5 h-5 flex items-center justify-center rounded-md"
        >
          <Filter className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
        </button>
        
        {isModalOpen && (
          <div className="relative">
            <div className="absolute flex items-center justify-center">
              <div className="bg-white dark:bg-zinc-500 border border-gray-300 dark:border-gray-700 p-4 rounded-md shadow-md auto-size-background">
                <label htmlFor="filterText">Filtrar por:</label>
                <input
                  type="text"
                  className="placeholder-opacity-50 w-full border border-gray-300 dark:border-gray-700 p-2 rounded-md dark:text-zinc-400"
                  placeholder="Digite seu filtro aqui:"
                  id="filterText"
                  value={filterText}
                  onChange={(e) => setFilterText(e.target.value)}
                  style={{ width: 'auto' }}  
                />

                <div className="mt-4">
                  <p className='py-2'>Escolha uma opção:</p>
                  <div className='flex flex-col space-y-1'>
                  <div>
                    <label>
                      <input
                        type="radio"
                        value={Operator.Is}
                        checked={selectedOption === Operator.Is}
                        onChange={() => setSelectedOption(Operator.Is)}
                      />
                      É um
                    </label>
                    </div>
                    <div>
                      <label>
                        <input
                          type="radio"
                          value={Operator.IsNot}
                          checked={selectedOption === Operator.IsNot}
                          onChange={() => setSelectedOption(Operator.IsNot)}
                        />
                        Não é um
                      </label>
                    </div>
                    <div>
                      <label>
                        <input
                          type="radio"
                          value={Operator.Exists}
                          checked={selectedOption === Operator.Exists}
                          onChange={() => setSelectedOption(Operator.Exists)}
                        />
                        Existe
                      </label>
                    </div>
                    <div>
                      <label>
                        <input
                          type="radio"
                          value={Operator.DoesNotExists}
                          checked={selectedOption === Operator.DoesNotExists}
                          onChange={() => setSelectedOption(Operator.DoesNotExists)}
                        />
                        Não existe
                      </label>
                    </div>
                    <div>
                      <label>
                        <input
                          type="radio"
                          value={Operator.StartWith}
                          checked={selectedOption === Operator.StartWith}
                          onChange={() => setSelectedOption(Operator.StartWith)}
                        />
                        Começa com
                      </label>
                    </div>
                    <div>
                      <label>
                        <input
                          type="radio"
                          value={Operator.IsOneOf}
                          checked={selectedOption === Operator.IsOneOf}
                          onChange={() => setSelectedOption(Operator.IsOneOf)}
                        />
                        É um de
                      </label>
                    </div>
                    <div>
                      <label>
                        <input
                          type="radio"
                          value={Operator.IsNotOneOf}
                          checked={selectedOption === Operator.IsNotOneOf}
                          onChange={() => setSelectedOption(Operator.IsNotOneOf)}
                        />
                        Não é um de
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    id="filterApplier"
                    onClick={handleApplyFilter}
                    className="mt-4 bg-zinc-100 p-2 rounded-md text-zinc-400">
                    Aplicar Filtro
                  </button>
                  <button
                    id="filterRemover"
                    onClick={handleRemoveFilter}
                    className="mt-4 bg-red-500 p-2 rounded-md text-zinc-200">
                    Limpar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}