import React, { useState } from 'react';
import useRandomMems from '@/helper/randommems';

const RandomMemsGenerators = () => {
  const [data, error, loading] = useRandomMems(
    `https://api.imgflip.com/get_memes?date=${new Date().getTime()}`
  );
  const [currentMemeIndex, setCurrentMemeIndex] = useState(0);

  const showNextMeme = () => {
    if (data?.data?.memes) {
      setCurrentMemeIndex((prevIndex) =>
        prevIndex + 1 >= data.data.memes.length ? 0 : prevIndex + 1
      );
    }
  };

  return (
    <>
      <div className="bg-gray-300 py-10 rounded-md w-3/4 mx-auto px-4">
        <div className="flex flex-col justify-center items-center">
          <h1 className=" text-md md:text-2xl font-bold mb-6">Random Memes Generator</h1>
          <h3>{loading && 'Loading.....'}</h3>
          <p>{error && 'Error......'}</p>

          <div className="w-full max-w-sm">
            {data?.data?.memes ? (
              <div className="bg-white shadow rounded-lg overflow-hidden p-2">
                <img
                  src={data.data.memes[currentMemeIndex].url}
                  alt={data.data.memes[currentMemeIndex].name}
                  className="w-full h-48 object-cover  rounded-md"
                />
              </div>
            ) : (
              <p>No random memes available</p>
            )}
          </div>

          <button
            onClick={showNextMeme}
            className="px-4 py-2 bg-blue-600 text-white rounded mt-6"
          >
            Next Memes
          </button>
        </div>
      </div>
    </>
  );
};

export default RandomMemsGenerators;
