import React from "react";
import { useState } from "react";
import Card from "./Card";

function Cards(props){
    let Courses=props.data;
    const category=props.category;
    const [likedCourses,setlikedCourses]=useState([]);

    function getCourses(){

        if(category==='All'){
            let allcourses=[];
            Object.values(Courses).forEach(array => {
                array.forEach(courseData => {
                    allcourses.push(courseData);
                })
            })
            return allcourses;
        }
        else{
            return Courses[category];
        }
        
    }
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
            getCourses().map((course) => (
                <Card course={course}
                likedCourses={likedCourses}
                setlikedCourses={setlikedCourses}></Card>
            ))
            }
        </div>
    )
};

export default Cards;