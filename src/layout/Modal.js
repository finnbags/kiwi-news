import { useState } from 'react';

const Modal = ({ setShowModal }) => {
  const handleMint = () => {
    // Handle minting logic here
  };

  return (
    <div className="fixed z-50 top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#f6f6ef] p-5 rounded shadow-lg w-80 text-center">
        <h2 className="text-2xl mb-4">Confirm Purchase</h2>
        <div className="p-4">
          <img 
            src="/kiwinft.png" 
            alt="Kiwi NFT" 
            className="w-full h-auto border-4 border-limegreen rounded-md" 
          />
          <figcaption className="text-center mt-4 text-[#828282]">Mint Price: 0.02 ETH</figcaption>
        </div>
        <p>Do you want to proceed with the purchase of Kiwi NFT for 0.02 ETH?</p>
        <div className="flex justify-center space-x-4 mt-4">
          <button onClick={() => setShowModal(false)} className="inline-block bg-red-500 text-white px-6 py-3 rounded font-bold">
            Close
          </button>
          <button onClick={handleMint} className="inline-block bg-green-500 text-white px-6 py-3 rounded font-bold">
            MINT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
