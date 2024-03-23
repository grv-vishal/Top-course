import React from "react";
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Card(props){
    const course=props.course;
    let likedCourses=props.likedCourses;
    let setlikedCourses=props.setlikedCourses;

    function clickHandler(){
        if(likedCourses.includes(course.id)){
            setlikedCourses( (prev) => prev.filter((cid)=> (cid !== course.id) )  );
            toast.warning("Like Removed");
        }
        else{
            if(likedCourses.length===0){
               setlikedCourses([course.id]);
            }
            else{
                setlikedCourses((prev)=>([...prev,course.id]));
            }

            toast.success("Liked Successfully");
        }
    }

    return (
        <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
            <div className="relative">
                <img src={course.image.url} alt={course.image.alt} />
                <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
                grid place-items-center'>
                  <button onClick={clickHandler}>
                      {
                        likedCourses.includes(course.id) ? 
                        (<FcLike fontSize="1.75rem" />)
                        :(<FcLikePlaceholder fontSize="1.75rem" />)
                      }
                  </button>
                </div>
            </div>

            <div className="p-4">
                <div className="font-semibold text-white text-lg leading-6">{course.title}</div>
                <div className="mt-3 text-white">{
                   course.description.length >100 ? 
                   (course.description.substr(0,100)) + "..." :
                   (course.description)
                }
                </div>
            </div>
        </div>
    )
};

export default Card;