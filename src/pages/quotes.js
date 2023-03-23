import React, { useState } from 'react'
import axios from "axios";

import { quotesCategory } from '../global/quotesCategory.js'
import { showToastMessage } from '../global/toaster.js'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const API_KEY = process.env.REACT_APP_MONSTER_API_KEY
const API_URL = process.env.REACT_APP_MONSTER_API_URL


export const Quotes = () => {

    const [div, setDiv] = useState(false);

    const [result, setResult] = useState([]);



    const [input, setInput] = useState({
        quote: "",
    });

    // console.log(result);

    const handleSubmit = async (e) => {

        setDiv(false)

        try {
            const quotes = await axios.get(`${API_URL}quotes?category=${input.quote}`, {
                headers: {
                    'X-Api-Key': API_KEY,
                    // 'Access-Control-Allow-Origin': '*',
                    // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
                }

            });

            setResult(quotes.data);
            setDiv(true)

            showToastMessage('success','API hit Sucessfully')

        } catch (error) {
            console.log(error);
            showToastMessage('error','Something Went Wrong')
        }
    }

    
   
    
    return (
        <>

        <ToastContainer />
            <div className="max-w-4xl mx-auto px-4">
                <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Quotes
                    </h5>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="quote-select" className="block mb-2 text-sm font-bold text-gray-700">
                                Select a quote:
                            </label>
                            <select id="quote-select"
                                name="quote"
                                value={input.quote}
                                onChange={(e) =>
                                    setInput({ ...input, [e.target.name]: e.target.value })
                                }
                                className="w-full p-2 border border-gray-400 rounded-md">
                                <option value="">-- Select a quote --</option>
                                {
                                    quotesCategory.map((quotes, i) => {
                                        return <option key={i} value={quotes}>{quotes}</option>
                                    })
                                }
                            </select>
                        </div>
                        <button type="button" onClick={handleSubmit} className="w-full px-4 py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                            Submit
                        </button>
                    </form>
                </div>
            </div>

            {/* conditonal statement */}

            {div != false ?
                <div className="max-w-4xl mx-auto px-4 mt-2">
                    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Result Quotes :
                        </h5>
                        
                        <div className="flex flex-wrap">
                            <div className="w-full md:w-1/2 font-bold tracking-tight text-gray-900 dark:text-white">
                           Quote:
                            </div>
                            <div className="w-full md:w-1/2 font-bold tracking-tight text-gray-900 dark:text-white">
                                {result[0].quote}
                            </div>
                            <div className="w-full md:w-1/2 font-bold tracking-tight text-gray-900 dark:text-white mt-1">
                            Author:
                            </div>
                            <div className="w-full md:w-1/2 font-bold tracking-tight text-gray-900 dark:text-white mt-1">
                               {result[0].author}
                            </div>
                            <div className="w-full md:w-1/2 font-bold tracking-tight text-gray-900 dark:text-white mt-1">
                            Category:
                            </div>
                            <div className="w-full md:w-1/2 font-bold tracking-tight text-gray-900 dark:text-white mt-1">
                            {result[0].category}
                            </div>

                        </div>


                    </div>
                </div>
                : ''}
        </>
    )
}
