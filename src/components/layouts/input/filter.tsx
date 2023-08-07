import React from 'react';

export default function RadioDisplay() {
  return (
    <div className="z-10 w-48 bg-[#1a212d] divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 absolute mt-10">
      <ul className="p-3 space-y-3 text-sm text-[#edebeb] dark:text-gray-200" aria-labelledby="dropdownRadioButton">
        <li>
          <div className="flex items-center">
            <input
              id="default-radio-1"
              type="radio"
              value=""
              name="default-radio"
              className="appearance-none w-3 h-3 rounded-full border-blue-500 bg-white checked:bg-blue-500 checked:border-blue-500"
            />
            <label
              htmlFor="default-radio-1"
              className="ml-2 text-sm font-medium text-[#605f62] dark:text-gray-300"
            >
              Default radio
            </label>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <input
              id="default-radio-2"
              type="radio"
              value=""
              name="default-radio"
              className="appearance-none w-3 h-3 rounded-full border-blue-500 bg-white checked:bg-blue-500 checked:border-blue-500"
            />
            <label
              htmlFor="default-radio-2"
              className="ml-2 text-sm font-medium text-[#605f62] dark:text-gray-300"
            >
              Checked state
            </label>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <input
              id="default-radio-3"
              type="radio"
              value=""
              name="default-radio"
              className="appearance-none w-3 h-3 rounded-full border-blue-500 bg-white checked:bg-blue-500 checked:border-blue-500"
            />
            <label
              htmlFor="default-radio-3"
              className="ml-2 text-sm font-medium text-[#605f62] dark:text-gray-300"
            >
              Default radio
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
}
