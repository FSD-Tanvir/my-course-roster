import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import Course from "./Course";

const Courses = ({ handleSelection }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="md:w-2/3 grid md:grid-cols-2 lg:grid-cols-3 gap-3 p-2 ">
      {courses.map((course) => (
        <Course
          key={course.id}
          course={course}
          handleSelection={handleSelection}
        ></Course>
      ))}
    </div>
  );
};

Courses.propTypes = {
  handleSelection: PropTypes.func,
};

export default Courses;
