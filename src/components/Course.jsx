import PropTypes from 'prop-types';
import { AiOutlineDollar } from "react-icons/ai";
import { BsBook } from "react-icons/bs";


const Course = ({course}) => {
    const {cover, title, description, price, credit} = course
    return (
        <div className='max-w-xs mx-auto'>
            <div>
            <img src={cover} alt="" className='my-3 w-full'/>
            </div>
            <h1 className='font-semibold text-base'>{title}</h1>
            <p className='text-sm'>{description}</p>
            <div className='my-2 flex justify-around'>
                <p className='flex items-center gap-1 text-base font-medium'><AiOutlineDollar className='text-2xl'/>Price:{price}</p>
                <p className='flex items-center gap-1 text-base font-medium'><BsBook className='text-2xl'/>Credit:{credit}hr</p>
            </div>
            <button className='bg-[#2F80ED] w-full rounded-lg py-2 text-white font-medium text-lg'>Select</button>
        </div>
    );
};

Course.propTypes =  {
    course: PropTypes.object.isRequired
}

export default Course;