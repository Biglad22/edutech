
import { createStore } from "vuex";
import * as apiCall from '../services/api-requests';

export default createStore({
    state :{
        ///fetched data
        course: null,
        modules: [],
        rating: 0,

        ///stores the module bein stored
        currentModule: {}
    },
    mutations :{
        SET_COURSE(state, course){
            state.course = course
        },
        SET_MODULES(state, modules) {
          state.modules = modules;
        },
        SET_RATING(state, rating) {
          state.rating = rating;
        },
        SET_CURRENT_MODULES(state, module){
            state.currentModule = module;
        }
    },
    actions :{

        ///this will fetch all data about course and modules using promise.all, if any of the calls fail, it will throw an error.
        async fetchCourseData({commit}){
            try {
                const [course, modules] = await Promise.all([
                    apiCall.fetchCourse(),
                    apiCall.fetchModules()
                ]);
                
                commit('SET_COURSE', course);
                commit('SET_MODULES', modules);
                commit('SET_CURRENT_MODULES', modules[0]);

            } catch (error) {
                throw error;
            }
        },
        //// this sends a post request to the server, it sends the new course rating user has submitted and mutates the state of the course ratings
        async submitRate({commit}, rating){
            try {
                const newRating = await apiCall.submitRating(rating);
                commit('SET_RATING', newRating);
            } catch (error) {
                throw error
            }
        },
        ///this changes the active || displayed module with the module whose id was passed
        changeModule({commit}, moduleId){
            const currentModule = this.state.modules.find(module => module.moduleId === String(moduleId));
            
            commit('SET_CURRENT_MODULES', currentModule);
        }
    },
    getters:{

        ////get Progress gets returns the total number of modules in the course and the number of completed modules
        getProgress:(state)=>{

            const noOfModules = state.modules.length;
            const noOfCompletedModules = state.modules.filter(module => module.isCompleted).length;

            return{
                completedModules : noOfCompletedModules,
                totalModule : noOfModules
            }
        }
    }
})