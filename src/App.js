import {reptiles} from './global/homeArray.js'
import './index.css';

function App() {

  

  return (
    <>
      <div className='grid m-2 grid-rows-4 grid-flow-col gap-2'>

      {reptiles.map((rep) => (
        <div className='row-span-4'>

        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{rep}</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
         
        </div>
      </div>
      ))}
        
       
        
      </div>

      {/* <ul>
      {reptiles.map((rep) => (
        <li className='m-4' key={rep}>{rep}</li>
      ))}
      </ul> */}

    </>
  );
}

export default App;
