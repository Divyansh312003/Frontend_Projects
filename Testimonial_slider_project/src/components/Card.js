import React from 'react';
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';

function Card(props){

    let review= props.review;
    return (
        <div className="flex flex-col  md:relative">
            <div className="absolute top-[-7rem] z-[10] mx-auto">
                <img className="aspect-square rounded-full h-[140px] w-[140px] z-[20]"
                src={review.image}/>
                <div className="absolute h-[140px] w-[140px] rounded-full top-[-6px] z-[-10] bg-violet-500 left-[10px]">  </div>
            </div>

            <div className="mt-7 text-center">
                <p className="capitalize font-bold text-2xl">{review.name}</p>
            </div>

            <div className="text-center mt-7">
                <p className="text-violet-300 text-sm uppercase">{review.job}</p>
            </div>
            <div className="text-violet-400 mx-auto mt-5">
                <FaQuoteLeft/>
            </div>
            <div className="mt-5 text-center text-slate-500">
                {review.text}
            </div>
            <div className="text-violet-400 mx-auto mt-5">
                <FaQuoteRight/>
            </div>
        </div>
    );
}
export default Card;