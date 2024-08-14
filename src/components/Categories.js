import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../redux/action/action";

const Categories = () => {
  const [categories,setCategories] = useState([]);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getCategories());
    console.log(getCategories())
  }, []);

  const dataCategs = useSelector((state) => state.categoriesList);
  useEffect(() => {
    setCategories(dataCategs);
    console.log(dataCategs);
  }, [dataCategs]);
 
  return (
    <div className="categories pb-5 pt-2">
      <div className="container">
        <div className="row">
          {categories.length >= 1 ? (
            categories.map(
              (cat) =>
                cat.top && (
                  <div
                  data-aos="fade-up" className="col-lg-3 col-md-6 col-6" key={cat.id}>
                    <div className="cat-card text-center card border my-2">
                      <img src={cat.img} alt="" />
                      <h5 className="mb-4">{cat.categoryName}</h5>
                    </div>
                  </div>
                )
            )
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Categories;
