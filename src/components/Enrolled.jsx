import PropTypes from "prop-types";
const Enrolled = ({ selected, totalPrice, totalCredit, remaining }) => {
  console.log(selected);
  return (
    <div className="md:w-1/3 p-2 my-3">
      <h2 className="text-[#2F80ED] text-lg font-semibold p-2">
        Credit Hour Remaining {remaining} hr
      </h2>
      <hr />
      <div className="p-2">
        <h2 className="text-xl font-bold">Course Name</h2>
        <ol className="pl-4">
          {selected.map((course) => (
            <li type="1" key={course.id}>
              {course.title}
            </li>
          ))}
        </ol>
      </div>
      <hr />
      <h3 className="font-medium p-2">Total Credit Hour : {totalCredit}</h3>
      <hr />
      <h3 className="font-medium p-2">Total Price : {totalPrice} USD</h3>
    </div>
  );
};

Enrolled.propTypes = {
  selected: PropTypes.array,
  totalPrice: PropTypes.number,
  totalCredit: PropTypes.number,
  remaining: PropTypes.number,
};

export default Enrolled;
