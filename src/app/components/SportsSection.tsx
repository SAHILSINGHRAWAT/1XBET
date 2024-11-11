import React from 'react';

type Props = {};

function SportsSection({}: Props) {
  return (
    <div className="bg-gray-100 p-4 flex-grow">
      <h2 className="text-lg font-bold mb-4 text-black">Live Matches</h2>
      <div className="bg-white p-4 shadow rounded mb-4">
        <div className="flex justify-between">
          <span className=" text-black">Event Name</span>
          <span className=" text-black">Odds</span>
        </div>
      </div>
    </div>
  );
}

export default SportsSection;
