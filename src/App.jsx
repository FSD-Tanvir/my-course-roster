import { useState } from "react";
import "./App.css";
import Enrolled from "./components/Enrolled";
import Header from "./components/Header";
import Courses from "./components/Courses";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [selected, setSelected] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalCredit, setTotalCredit] = useState(0);
  const [remaining, setRemaining] = useState(20);

  const handleSelection = (course) => {
    const isExist = selected.find((item) => item.id == course.id);
    let totalPrice = course.price;
    let totalCredit = course.credit;

    if (isExist) {
      return toast("Already Selected!");
    } else {
      selected.forEach((item) => {
        totalPrice = totalPrice + item.price;
        totalCredit = totalCredit + item.credit;
      });

      if (totalCredit > 20) {
        return toast("Can't select over 20 credit, try another");
      } else {
        let remaining = 20 - totalCredit;
        const newSelection = [...selected, course];
        setSelected(newSelection);
        setTotalPrice(totalPrice);
        setTotalCredit(totalCredit);
        setRemaining(remaining);
      }
    }
  };

  return (
    <>
      <Header></Header>
      <div className="md:flex gap-3">
        <Courses handleSelection={handleSelection}></Courses>
        <Enrolled
          selected={selected}
          totalPrice={totalPrice}
          totalCredit={totalCredit}
          remaining={remaining}
        ></Enrolled>
        <ToastContainer></ToastContainer>
      </div>
    </>
  );
}

export default App;
