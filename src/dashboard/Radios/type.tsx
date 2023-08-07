import React, { useState } from 'react';
import Loader from 'react-loader-spinner';
import RadioDisplay from '../../components/layouts/input/filter';


interface YearProps {
  isOpen: boolean;
  onToggle: () => void;
  style:any
}


const Type: React.FC<YearProps> = ({ isOpen, onToggle, style }) =>  {


  return (
    <>
      <div className="flex">
        <button
          id="dropdownRadioButton"
          data-dropdown-toggle="dropdownDefaultRadio"
          className={style}
          type="button"
          onClick={onToggle}
        >
          type
          <svg
            className={`w-4 h-4 ml-4 pl-1 ${isOpen ? 'transform rotate-180' : ''}`}
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        {isOpen && (
          <RadioDisplay/>
        )}
      </div>
    </>
  );
}

export default Type
