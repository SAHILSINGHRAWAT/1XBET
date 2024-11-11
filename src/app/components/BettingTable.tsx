import React from 'react';

type Props = {};

function BettingTable({}: Props) {
  return (
    <div className="bg-gray-50 p-4 rounded shadow">
      <table className="w-full">
        <thead>
          <tr className="bg-blue-700 text-black">
            <th>Event</th>
            <th>Full Time</th>
            <th>1st Half</th>
          </tr>
        </thead>
        <tbody>
          <tr className=" text-black">
            <td>Team A vs Team B</td>
            <td>1.75</td>
            <td>0.85</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BettingTable;
