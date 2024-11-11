'use client';
import React, { useState } from 'react';

type Props = {};

function Sidebar({}: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <aside className="bg-blue-800 text-white w-64 p-4">
      <div className="font-bold">Sports A-Z</div>
      <ul className="space-y-2">
        <li onClick={() => setExpanded(!expanded)} className="cursor-pointer">Cricket</li>
        {expanded && (
          <ul className="pl-4 space-y-1">
            <li>Live</li>
            <li>Outrights</li>
            <li>Today</li>
          </ul>
        )}
        <li>Football</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
