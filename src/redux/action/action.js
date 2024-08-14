import { categories, courses } from "../../components/data";
import {
  categoriesType,
  coursesType,
  coursesCategory,
  freeCourses,
  newCourses,
  PlayVideo,
  CloseVideo,
  courseID,
} from "../type/type";

export const getCategories = () => {
  return { type: categoriesType, data: categories };
};
export const getCourses = () => {
  return { type: coursesType, data: courses };
};
export const getCourseByID = (id) => {
  return { type: courseID, payload: id};
};
export const getCourseByCategory = (cat) => {
  return { type: coursesCategory, payload: cat };
};

export const getFreeCourses = () => {
  return { type: freeCourses };
};
export const getNewCourses = () => {
  return { type: newCourses };
};
export const onClickVideo = () => {
  return { type: PlayVideo };
};
export const onCloseVideo = () => {
  return { type: CloseVideo };
};
