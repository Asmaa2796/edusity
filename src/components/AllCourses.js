import AllCategories from "./AllCategories";
import Banner from "./Banner";
import Courses from "./Courses";
const AllCourses = () => {
    
    return (
        <div>
            <Banner currentPage="All courses" bg="url(../assets/banner6.jpg)"/>
            <AllCategories />
            <Courses />
        </div>
    );
}

export default AllCourses;
