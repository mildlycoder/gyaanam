import React from "react";
import {BsFillArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'

const CustomButtonGroup = ({ next, previous, goToSlide, carouselState }) => {
  return (
    <div className="custom-button-group w-[90%] mx-auto flex items-center justify-between gap-6 absolute top-[90%] left-[45%]">
        <div className="md:flex gap-5 hidden">
            <button className="md:hover:scale-125 transition-all" onClick={previous}><BsFillArrowLeftCircleFill size={'3rem'}/></button>
            <button className="md:hover:scale-125 transition-all" onClick={next}><BsArrowRightCircleFill size={'3rem'}/></button>
        </div>
    </div>
  );
};


export default CustomButtonGroup