import React from 'react';
import { FcLike } from "react-icons/fc";
import { toast } from 'react-toastify';
import { FcLikePlaceholder } from "react-icons/fc";

function Card(props){
  let course= props.courses;
  let likedCourses= props.likedCourses;
  let setLikedCourses=props.setLikedCourses;
  // console.log(course);
  function setHandler(){
    //logic
    if(likedCourses.includes(course.id)){
        setLikedCourses((prev)=> prev.filter((cid)=>  cid!== course.id))
        toast.warning("Liked removed")
    }
    else{
      if(likedCourses.length !== 0){
      setLikedCourses((prev)=> [...prev,course.id] )
      }
      else {
        setLikedCourses([course.id]);
      }
      toast.success("Liked successfully");
    }
  }
    if (!course ) {
        return null; // or some fallback JSX if needed
}
   
  return (
    <div className="w-[300px] text-[#003366] rounded-md overflow-hidden h-[500px]" >
        <div className="relative rounded-md">
        
            <img src= {course.image.url} alt={course.title}></img>
            <div className="w-[40px] h-[40px] bg-white absolute rounded-full right-2 -bottom-3 flex justify-center items-center ">
            <button onClick={setHandler}>
             {
              likedCourses.includes(course.id)?  <FcLike fontSize="1.75rem"></FcLike>:<FcLikePlaceholder fontSize="1.75rem"></FcLikePlaceholder>
                
            }
            </button>
        </div> 
       

     </div>
     <div className="-mt-1 p-4 bg-[#334155]  rounded-md h-[280px]">
     <p className="text-white font-bold text-lg leading-6">{course.title}</p>
     <p className="mt-2 text-white">{course.description}</p>
     </div>
     </div>
  );
}
export default Card;