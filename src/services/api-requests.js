///this file contains all get calls 

// src/api/courseApi.js
import apiClient from ".";

////fetches information about the course 
export const fetchCourse = async () => {
  try {
    const response = await apiClient.get('/api/course');
    return response.data;
  } catch (error) {
    console.error('Error fetching course:', error);
    throw error;
  }
};

////fetches the array of modules in course
export const fetchModules = async () => {
  try {
    const response = await apiClient.get('/api/course/modules');
    return response.data.modules;
  } catch (error) {
    console.error('Error fetching modules:', error);
    throw error;
  }
};

/// sends new course Rating to server
export const submitRating = async (rating) => {
  try {
    const response = await apiClient.post('/api/course/rate', {rating});
    
    return response.data.newRating;
  } catch (error) {
    console.error('Error submitting rating:', error);
    throw error;
  }
};


