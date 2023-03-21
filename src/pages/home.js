import React from 'react';
import { Link } from "react-router-dom";
import { reptiles } from '../global/homeArray.js';

export const Home = () => {
  return (
    <div className="grid m-auto grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
      {reptiles.map((rep, i) => {
        return (
          <div key={i} className="m-1 p-0">
            <Link to={`${rep.url}`}>
              <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {rep.title}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {rep.desc}
                </p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
