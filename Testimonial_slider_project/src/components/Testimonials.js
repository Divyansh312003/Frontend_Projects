import Card from './Card'
import {useState} from 'react';

import { FiChevronLeft , FiChevronRight} from "react-icons/fi";
  function Testimonials(props){

    let reviews= props.reviews;
    const [index,setIndex]= useState(0);
    function leftHandler(){
        setIndex((index-1+reviews.length)%reviews.length)
    }
    function rightHandler(){
       setIndex((index+1)%reviews.length)
    }
    function surpriseHandler(){
        setIndex((Math.floor(Math.random()*reviews.length)));
    }
   return (
    <div className="w-[85vw] md:w-[700px] hover:shadow-xl mt-10 p-10 flex flex-col justify-center items-center bg-white transition-all duration-700">
        <Card review={reviews[index]}></Card>
        
            <div className="flex mt-5 gap-3 text-3xl justify-center items-center text-violet-400 font-bold mx-auto">
                <button onClick={leftHandler}
                 className="cursor-pointer hover:text-violet-500"><FiChevronLeft></FiChevronLeft></button>
                <button onClick={rightHandler}
                className="cursor-pointer hover:text-violet-500"><FiChevronRight></FiChevronRight></button>
            </div>
            <div className="flex justify-center items-center">
                <button onClick={surpriseHandler}
                className="mt-5 bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg">
                Surprise Me
                </button>
               
            </div>
    </div>
   );
}
export default Testimonials;