import { useState } from "react";
import { categories } from "./data";
import { getCourseByCategory, getFreeCourses, getNewCourses } from "../redux/action/action";
import { useDispatch } from "react-redux";

const AllCategories = () => {
  const [active, setActive] = useState(1);
  const onActive = (index) => {
    setActive(index);
  };
  const dispatch = useDispatch();

  const filterByCategory = (cat) => {
    dispatch(getCourseByCategory(cat));
    console.log(getCourseByCategory(cat));
  };
  const filterByFree = () => {
    dispatch(getFreeCourses());
    console.log(getFreeCourses());
  };
  const filterByNew = () => {
    dispatch(getNewCourses());
    console.log(getNewCourses());
  };

  return (
    <div className="all_categories text-center py-5">
      <div className="container">
        <b className="my-3 d-block text-lg">Filter by category</b>
        <div className="flex_on_mob">
          {categories.length >= 1 ? (
            categories.map((btn) => (
              <button
                onClick={() => {
                  onActive(btn.id);
                  filterByCategory(btn.categoryName);
                }}
                className={active === btn.id ? "active" : ""}
                key={btn.id}
              >
                {btn.categoryName}
              </button>
            ))
          ) : (
            <></>
          )}
        </div>
        <b className="mt-4 my-0 d-block text-lg">Other filters</b>
        <div className="filter_by">
          <button className="custom_btn" onClick={filterByFree}>Free <img src={"../assets/no-money.png"} alt="" /></button>
          <button className="custom_btn" onClick={filterByNew}>New <img src={"../assets/star.png"} alt="" /></button>
        </div>
      </div>
    </div>
  );
};

export default AllCategories;
