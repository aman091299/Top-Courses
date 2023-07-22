 import React,{useState} from "react";
import { apiUrl,filterData } from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import {toast} from "react-toastify";
import {useEffect} from "react";
import Spinner from "./components/Spinner";

const App = () => { 

  const [courses,setCourses]=useState(null);
  const [loading,setLoading]=useState(true);
  const [category,setCategory]=useState(filterData[0].title)
  useEffect (()=>{
   const fetchData= async ()=>{
  // setLoading(true);
  try{
    console.log("fectching api");
    const res=await fetch(apiUrl);
    const output=await res.json();
    console.log(" api fectched ");
    setCourses(output.data)
  }
  catch(error){
  toast.error("Something went wrong in network")
  }
  setLoading(false);
}
fetchData();
},[])
  return(
    <div className='min-h-screen flex flex-col bg-bgDark'>
   
      <Navbar/>
  
      <div className="bg-bgDark">
      <Filter filterData={filterData}  category={category} setCategory={setCategory}/>
      
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
      {
         loading ?(<Spinner/>) :(<Cards courses={courses}  category={category}/> )
       }
      </div>
      </div>
     
    </div>
  ); 
};

export default App;
