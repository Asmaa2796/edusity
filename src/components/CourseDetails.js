import { useDispatch, useSelector } from "react-redux";
import Banner from "./Banner";
// import { courses } from "./data";
import { useParams } from "react-router-dom";
import { getCourseByID } from "../redux/action/action";
import { useEffect, useState } from "react";
const CourseDetails = () => {
  const [course,setCourse] = useState();
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCourseByID(parseInt(id)));
  }, [id,dispatch]);
  const record = useSelector((state) => state.selectedItem);
  useEffect(() => {
    setCourse(record);
    console.log(record);
  }, [record]);
  return (
    <>
      <Banner currentPage="Course details" sub="Courses" to="/Courses" bg="url(../../assets/banner5.jpg)" />
      <div className="course-details py-5">
        <div className="container">
          <h3 className="text-color mt-3 mb-4">Course details</h3>
          {course && (
            <div className="details-card bg-white rounded mb-2 border">
              <div className="course-img" style={{background:`url(../${course.img})`}}></div>
              <div className="p-5">
                <small className="course-category">{course.category}</small>
                <small className="course-price">{course.price} {course.status}</small>
                <h4 className="text-color"><img src={"../../assets/right-arrow.png"} alt="" /> {course.title}</h4>
                <hr/>
                <b className="text-lg text-color1 my-2 d-block">Course description:</b>
                <p className="line-height my-2 text-secondary course-desc">{course.fullDesc}</p>
                <hr/>
                <b className="text-lg text-color1 my-2 d-block">Course lectures:</b>
                <div className="text-secondary"><img style={{width:"15px",marginTop: "-3px"}} src={"../../assets/video-lesson.png"} alt="" /> {course.lectures} lectures</div>
                <b className="text-lg text-color1 my-2 d-block">Course duration:</b>
                <div className="text-secondary"><img style={{width:"15px",marginTop: "-3px"}} src={"../../assets/clock.png"} alt="" /> {course.duration}</div>
                {course.new && <img className="new" src={"../../assets/new.gif"} alt="" />}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
