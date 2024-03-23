import React from "react";
import Navbar from"./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import {filterData,apiUrl} from "./data";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState,useEffect } from "react";
import Loading from "./components/Loading";

const App = () => {
   const [courses,setCourses]=useState(null);
   const [loading,setLoading]=useState(true);
   const[category,setCategory]=useState(filterData[0].title);


  async function Fetchdata(){
    setLoading(true);

    try{
      let response=await fetch(apiUrl);
      let Outputdata=await response.json();
      setCourses(Outputdata.data);
      
    }
    catch{
       toast.error("Error in the Network");
    }
    setLoading(false);
  }

  useEffect(()=>{
     Fetchdata();
  },[])

  

  return(
    <div className="min-h-screen flex flex-col bg-bgDark2">
        <div>
           <Navbar></Navbar>
        </div>

        <div>
          <Filter Data={filterData}
          category={category}
          setCategory={setCategory}></Filter>
        </div>

        <div className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]" > 
         { 
         loading?(<Loading/>):(<Cards data={courses} category={category}/>)
         }
        </div>

        <ToastContainer />

    </div>
  );
};

export default App;
