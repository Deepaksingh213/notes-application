import { useLocalStorge } from '@/helper/localstorege';
import React, { useState } from 'react';

const LocalStorageHook = () => {
  const { setItem, getItem, removeItem } = useLocalStorge('value');
  const [value, setValue] = useState('');
  const [showData, setShowData] = useState('');

  const handleGetItem = () => {
    const data = getItem();
    setShowData(data || 'No data found');
  };

  const handleRemoveItem = () => {
    removeItem();
    setShowData(''); 
  };

  return (
    <div className="px-4 md:px-8 lg:px-16 w-full md:w-2/3 mx-auto">
      <div className="mb-5">
        <label htmlFor="name" className="text-gray-300 text-sm">Full Name</label>
        <input
          type="text"
          id="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          placeholder="Enter the full Name"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <button
          onClick={() => setItem(value)}
          className="text-white rounded px-6 py-3 bg-yellow-700 hover:bg-yellow-500"
        >
          Set Data
        </button>
        <button
          onClick={handleGetItem}
          className="text-white rounded px-6 py-3 bg-gray-700 hover:bg-gray-500"
        >
          Get Data
        </button>
        <button
          onClick={handleRemoveItem}
          className="text-white rounded px-6 py-3 bg-red-950 hover:bg-red-800"
        >
          Remove Data
        </button>
      </div>

      {showData && (
        <div className="bg-white shadow-md rounded-lg p-6 mt-4 text-center">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">Full Name Show here!!</h3>
          <p className="text-gray-600">{showData}</p>
        </div>
      )}
    </div>
  );
};

export default LocalStorageHook;
