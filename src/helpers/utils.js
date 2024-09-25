///these are functions that have been used to perform conversion or refine specific value
import { useRouter } from 'vue-router';


//getOrder takes an array index as number and and return ist's actual list order as string
///it returns a string
export const getOrder = (index)=>{

    if (typeof index !== 'number') return;

    const order = index + 1;
    return order < 10 ? `0${order}` : `${order}`; 
}

///getPercent takes two numbers (the currentLevel, totalNumber of levels)
/// it returns a number and the percent of the totalNumber, currentLevel is. 
export const getPercent = (currentLevel, totalLevels) =>{
    if(typeof currentLevel !== 'number' || typeof totalLevels !== 'number') return;

    return (currentLevel / totalLevels) * 100;
}


// splitTextIntoChunks splits text into chunks
/// it returns an array of strings
export const splitTextIntoChunks = (text) => {
  return text.split('\n');
};



/// isActiveRoute takes the routePath parameter and checks if the passed route is the current route
/// it returns a boolean value. it returns true, if the current Route is the routePath passed  
export const isActiveRoute = (routePath) => {
    const router = useRouter();

    return router.currentRoute.value.fullPath === routePath;
};