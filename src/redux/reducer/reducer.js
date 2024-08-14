import { courses } from "../../components/data";
import {
  categoriesType,
  coursesType,
  coursesCategory,
  courseID,
  freeCourses,
  newCourses,
  PlayVideo,
  CloseVideo,
} from "../type/type";

const initialState = {
  categoriesList: [],
  coursesList: courses,
  filteredCourses: courses,
  isPlaying: false,
  selectedItem :null,
};
export const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    // all categories
    case categoriesType:
      return { ...state, categoriesList: action.data };
    // all courses
    case coursesType:
      return { ...state, coursesList: action.data };
    // filtered by category
    case coursesCategory:
      const filterCoursesList =
        action.payload === "All"
          ? state.coursesList
          : state.coursesList.filter(
              (course) => course.category === action.payload
            );
      return { ...state, filteredCourses: filterCoursesList };
    
    // get course by id
    case courseID:
      const selectedItem = state.coursesList.find(
        (course) => course.id === action.payload
      );
      return { ...state , selectedItem }
    // filtered by new
    case newCourses:
      const newCoursesList = state.coursesList.filter(
        (course) => course.new === true
      );
      return { ...state , filteredCourses: newCoursesList }
    // filtered by free
    case freeCourses:
      const freeCoursesList = state.coursesList.filter(
        (course) => course.status === "Free"
      );
      return { ...state , filteredCourses: freeCoursesList }
    // play video
    case PlayVideo:
      return { ...state, isPlaying: true };
    // close video
    case CloseVideo:
      return { ...state, isPlaying: false };
    default:
      return state;
  }
};
