import React from 'react';
import Card from './Card';
import { FcCdLogo } from 'react-icons/fc';
import { useState } from 'react';
import { filterData } from '../data'; 
function Cards(props){
    let courses=props.courses;
    
    const[likedCourses,setLikedCourses]= useState([]);
    let allCourses=[];
    let domain=props.domain;
    let setDomain= props.setDomain;
    //the response from the API call is stored in the form of key-value but we need only the values so we iterate through the data and store all the values in an array-> 
    // the final output we get is an array with data of every cateogry at every indexes
    function getCourses(){
       let arr= Object.values(courses)
       console.log(arr)
       if(domain==="All") {
         arr.forEach((courseCateogry) =>{
            courseCateogry.forEach((course)=>{
              allCourses.push(course);
            })
       }
    )
       
        
    }
    else{
        if (filterData && arr && filterData.length > 0 && arr.length > 0) {
            for (let i = 0; i < filterData.length; i++) {
                if (domain === filterData[i].title) {
                    if (Array.isArray(arr[i-1])) {
                        arr[i-1].forEach((course) => allCourses.push(course));
                    }
                }
            }
        }
        }
        
       
      console.log(allCourses)
        return allCourses;
    }
   

    
   
   
 


     
    return (
    <div className="flex flex-wrap justify-center gap-4 mb-4 ">{
        getCourses().map((course) => {
           

            return <Card key={course.id} courses={course}
            likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>;
         })
        }
    </div>
    );
         
}
export default Cards;