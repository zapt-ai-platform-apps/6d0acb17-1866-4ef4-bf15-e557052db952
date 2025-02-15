import React from 'react';

const Disclaimer = ({ onAccept }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="bg-white p-6 rounded shadow-md text-center max-w-sm">
        <h2 className="text-xl font-bold mb-4">Content Warning</h2>
        <p className="mb-4">
          This chat contains explicit content and adult language. You must be 18 years or older to continue.
        </p>
        <button
          onClick={onAccept}
          className="px-4 py-2 bg-red-600 text-white rounded cursor-pointer"
        >
          I Accept
        </button>
      </div>
    </div>
  );
};

export default Disclaimer;