import React from "react";
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Spinner from './components/Spinner';
import Cards from './components/Cards';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {toast} from "react-toastify";
// importing the data from data.js file
import { apiUrl, filterData } from './data';
import {useEffect} from 'react';
import {useState} from 'react';

const App = () => {

       const [courses, setCourses]= useState([]);
       //creating a state variable that shows the laoding screen till data is not recieved from API
       const [loading,setLoading]= useState(false);
       const [domain,setDomain]= useState("All");

      
       

       useEffect(()=>{
        const fetchData = async() =>{
          {
          setLoading(true);
          try{
            const res= await fetch(apiUrl);
          
            const output= await res.json();
         
            setCourses(output.data);
            // console.log(output.data);
           
           
          }
          catch(error){
             toast.error("Something went wrong");
          }
          setLoading(false);
        }
  
           
         }
        fetchData();
        
       },[])
       
      
     
       return (
        <div className="min-h-screen flex flex-col bg-[#64748b]">
          <Navbar/>
          <div>
  {/* passing the data as a prop to the component */}
          <Filter filterData={filterData} domain={domain} setDomain={setDomain} />
           {/* data from api call which is to be rendered on card is passed as an array in form of props */}


          {/* it depends on the laoding value that we have to show the laoding screen or the card screen */}
          <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center items-center min-h-[50vh]">
         
          {
              
             loading ? (<Spinner/>) : (<Cards courses={courses} domain={domain} setDomain={setDomain}/>)

            }
            </div>
           </div>
         
        </div>
   );
       };


export default App;
