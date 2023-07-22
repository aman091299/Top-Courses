import React from 'react'
import Card from './Card'
import {useState} from "react";
const Cards = ({courses,category }) => {  
     /* store courses in one array not in key-value pair */
     //returns you a list of all courses received from the api respose
   
     const [likedCourses,setLikedCourses]=useState([]);
    if(courses == null || courses == ""){
      return(
        <h1 className="text-white text-[80px]" >
        No data Found
        </h1>
      )
    }
      const getCourses =()=>{
        
        if(category === "All"){
        let allCourses=[];
        Object.values(courses).forEach((courseCategory)=>{
            courseCategory.forEach((course)=>{
            allCourses.push(course);
       
           }) 
        })
       
        return allCourses;
      } 
   
      else{
        //main sirf specific category ka data pass kruga
      // why here we cannot use courses.category instead of courses[category] array
        return courses[category];
      }
    }
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
     {
      getCourses().map((course)=>{
        
       return (<Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>) 
      })
     }
    </div>
  )
}

export default Cards