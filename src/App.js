import { reptiles } from "./global/homeArray.js";
import { Navbar } from "./component/Header/navbar.js";
import { Footer } from "./component/Footer/footer.js";

import "./index.css";

function App() {
  return (
    <>
    <Navbar />
    <div className="grid m-auto grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
      {reptiles.map((rep, i) => {
        return (
          <div className="m-1 p-0" key={i}>
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {rep}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of
                2021 so far, in reverse chronological order.
              </p>
            </div>
          </div>
        );
      })}
    </div>
    <Footer />
   </>
  );
}

export default App;
