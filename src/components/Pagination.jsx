import React, { useEffect } from 'react';
import '../style/Pagination.css'
import { useSelector } from 'react-redux';

export const Pagination = (
  {
    renderArray,
    actualPage,
    handleChangePagination,
    handlePrevPage,
    handleNextPage,
  }
) => {
  const pagination = useSelector((state) => state.pagination);

  useEffect(() => {
    if (renderArray.length > 1) {
      const buttons = document.querySelectorAll(`.button_pag`);
      const buttonsAsArray = [...buttons];
      buttonsAsArray.map((itemInArray) => {
        if (itemInArray.innerHTML == actualPage) {
          itemInArray.className += ' active';
        } else {
          itemInArray.classList.remove("active");
        }
      })
    }

  }, [renderArray])


  const handlePagination = (target, numberButton) => {
    const buttons = document.querySelectorAll(`.button_pag`);
    const buttonsAsArray = [...buttons];
    buttonsAsArray.map((itemInArray) => {
      if (itemInArray === target) {
        itemInArray.className += ' active';
      } else {
        itemInArray.classList.remove("active");
      }
    })
    handleChangePagination(numberButton);
  }

  return (
    <div className='paginationDiv' >
      <button className='paginationDivButton'>
        <a className='paginationA' href="#list_pokemons">
          <button className='paginationButton' disabled={pagination.prevPage} onClick={() => handlePrevPage()} >{"<"}</button>
        </a>
      </button>
      {renderArray.map((number, index) => (
        <button className='paginationDivButton' key={index}>
          <a className='paginationA' href="#list_pokemons">
            <button className='paginationButton' onClick={(event) => handlePagination(event.target, number)} >{number + 1}</button>
          </a>
        </button>
      ))
      }
      <button className='paginationDivButton'>
        <a className='paginationA' href="#list_pokemons">
          <button className='paginationButton' disabled={pagination.nextPage} onClick={() => handleNextPage()} >{">"}</button>
        </a>
      </button>
    </div>
  )
}