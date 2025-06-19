import React from 'react';
import Card from './Card';
function Filter(props){
    let filterData= props.filterData;
    //what we did is-> from the data of all 5 buttons(came as a prop) we mapped each data to a button with title as the name  
    let domain= props.domain;
    let setDomain= props.setDomain;
    function showHandler(event){
     
      setDomain(event);
   }
  
    
  
    return (<div className="flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto justify-center py-4 w-11/12 ">
        
          {filterData.map((data,id)=>{
   
            return(
              <button className="text-lg px-2 py-1 rounded-md font-medium text-white bg-black
               hover:bg-opacity-50 border-2 transition-all duration-300"key={data.id}
               onClick={()=> {showHandler(data.title)}} 
               >
                {data.title}
                </button>);
                
            
          })}
    </div>);
}
export default Filter;
