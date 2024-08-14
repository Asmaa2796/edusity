import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getCourses } from "../redux/action/action";

const Courses = () => {
  const [courses,setCourses] = useState([]);
  const location = useLocation();
  const currentPath = location.pathname;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCourses());
    console.log(getCourses());
  }, []);

  const dataCourses = useSelector((state) => state.filteredCourses);
  useEffect(() => {
    setCourses(dataCourses);
    console.log(dataCourses);
  }, [dataCourses]);

  return (
    <div className="courses py-5 bg-white">
      <div className="container">
        <div className="row">
          {courses.length >= 1 ? (
            <>
              {currentPath === "/"
                ? courses.slice(0, 4).map((course) => (
                    <div className="col-lg-3 col-md-4 col-12" key={course.id}>
                      <div className="course my-2 rounded border bg-white">
                        <img src={course.img} alt="" />
                        <div className="p-3">
                          <small className="course-category text-xs">
                            {course.category}
                          </small>
                          <small className="course-price text-xs my-0">
                            {course.price}
                          </small>
                          <h5 className="text-color text-md">{course.title}</h5>
                          <p className="text-sm text-secondary">
                            {course.smallDesc}
                          </p>
                          <hr />
                          <small className="text-sm text-secondary">
                            <img
                              style={{ width: "15px", marginTop: "-3px" }}
                              src={"../assets/video-lesson.png"}
                              alt=""
                            />{" "}
                            {course.lectures} lectures
                          </small>
                          <small className="text-sm text-secondary">
                            <img
                              style={{
                                width: "15px",
                                marginTop: "-3px",
                                marginLeft: "10px",
                              }}
                              src={"../assets/clock.png"}
                              alt=""
                            />{" "}
                            {course.duration}
                          </small>
                          {course.new && (
                            <img
                              className="new"
                              src={"../assets/new.gif"}
                              alt=""
                            />
                          )}
                          <Link
                            to={`/details/${course.id}/${course.title.replace(
                              /\s+/g,
                              "_"
                            )}`}
                          >
                            <button className="button text-sm mt-3 mb-1">
                              More details
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
                : courses.map((course) => (
                    <div className="col-lg-3 col-md-4 col-12" key={course.id}>
                      <div className="course my-2 rounded border bg-white">
                        <img src={course.img} alt="" />
                        <div className="p-3">
                          <small className="course-category text-xs">
                            {course.category}
                          </small>
                          <small className="course-price text-xs my-0">
                            {course.price}
                          </small>
                          <h5 className="text-color text-md">{course.title}</h5>
                          <p className="text-sm text-secondary">
                            {course.smallDesc}
                          </p>
                          <hr />
                          <small className="text-sm text-secondary">
                            <img
                              style={{ width: "15px", marginTop: "-3px" }}
                              src={"../assets/video-lesson.png"}
                              alt=""
                            />{" "}
                            {course.lectures} lectures
                          </small>
                          <small className="text-sm text-secondary">
                            <img
                              style={{
                                width: "15px",
                                marginTop: "-3px",
                                marginLeft: "10px",
                              }}
                              src={"../assets/clock.png"}
                              alt=""
                            />{" "}
                            {course.duration}
                          </small>
                          {course.new && (
                            <img
                              className="new"
                              src={"../assets/new.gif"}
                              alt=""
                            />
                          )}
                          <Link
                            to={`/details/${course.id}/${course.title.replace(
                              /\s+/g,
                              "_"
                            )}`}
                          >
                            <button className="button text-sm mt-3 mb-1">
                              More details
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
            </>
          ) : (
            <div className="text-center">
              <img src={"../assets/no-results.png"} className="d-block mx-auto my-3" style={{width:'50px'}} alt="" />
              <small className="text-color1 text-lg">No matched courses</small>
            </div>
          )}

          {currentPath === "/" ? (
            <div className="col-lg-12 col-md-12 col-12">
              <div className="text-center my-3">
                <Link to="/AllCourses">
                  <button className="browse-all shadow-sm mt-4">
                    Browse all courses{" "}
                    <img
                      style={{ width: "10px" }}
                      src={"../assets/arrow.png"}
                      alt=""
                    />
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;
