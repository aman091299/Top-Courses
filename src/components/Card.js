import React from 'react'
import {GiPistolGun,GiGunshot} from "react-icons/gi"
import {toast} from "react-toastify"

const Card = ({course,likedCourses,setLikedCourses}) => {
  function clickHandler(){
//Logic
if(likedCourses.includes(course.id)){
  //phle se hua pada tha
  setLikedCourses((prev)=>prev.filter((cid)=>(cid !==course.id) ));
  toast.warning("fired ")
 
} 
else{
  //phle se like nahi hai ye course id  to mai liked kruga use
  //insert karna h ye course like course me
 if(likedCourses.length ===0){
  setLikedCourses([course.id])
 }
 else{
  //non-empty phle se
  setLikedCourses((prev) => [...prev,course.id])
 }
 
 toast.success("Gun is loading ");
}
  }
    
  return (
    <div className="w-[300px] bg-bgDark  bg-opacity-80 rounded-md overflow-hidden" >
   <div className='relative'>
   <img src={course.image.url} alt={course.image}></img>
   <div className='w-[40px] h-[40px] bg-white absolute rounded-full right-2 bottom-[-12px] grid place-items-center'>
      <button onClick={clickHandler}>
     
      { 
        likedCourses.includes(course.id)?(<GiPistolGun fontSize="1.75rem"/>):(<GiGunshot  fontSize="1.75rem"></GiGunshot>)
      }
      </button>
    </div>
   </div>
   
    <div className="p-4 ">
    <h1 className="text-white font-semibold text-lg leading-6" >{course.title}</h1>
      <p className="mt-2 text-white">
      { course.description.length > 100 ?`${(course.description.substr(0,100))}...`:(course.description)
      }
      </p>
    </div>
     
      
    </div>
  )
}

export default Card