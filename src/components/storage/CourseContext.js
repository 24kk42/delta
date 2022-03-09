import { useState,createContext } from "react";

const CourseContext=createContext({

    lessonIds:[],
    setLessonIds:(ids)=>{},
    hasLesson:(leesonId)=>{},
    addLesson:(lessonId)=>{},
    removeLesson:(lessonId)=>{}
})

export function CourseContextProvider(props){

    const [lessonIds,setLessonIds]=useState([]);

    function hasLesson(lessonId){
        const index =lessonIds.indexOf(lessonId);
        if(index===-1){
            return false;
        }
        else{
            return true;
        }
    }

    function addLesson(lessonId){
        if(hasLesson(lessonId)===false){
            lessonIds.push(lessonId);
        }
    }

    function removeLesson(lessonId){
        for(let i=0;i<lessonIds.length;i++){
            if(lessonIds[i].id===lessonId){
                lessonIds.splice(i,1);
            }
        }
    }

    const context={
        lessonIds:lessonIds,
        setLessonIds:setLessonIds,
        hasLesson:hasLesson,
        addLesson:addLesson,
        removeLesson:removeLesson
    }


    return(
        <CourseContext.Provider value={context}>
            {props.children}
        </CourseContext.Provider>
    )
}

export default CourseContext;