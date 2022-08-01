import { useState } from "react";
import "./Slider.scss"
const data=[
    {id:1, img:"img/first_slide.png"},
    {id:2, img:"img/second_slide.png"},
    {id:3, img:"img/third_slide.png"},
    {id:4, img:"img/fourth_slide.png"},
    {id:4, img:"img/fifth_slide.png"},
]

const Slider=()=>{
    let [index, setIndex]=useState(1)
    let {img}=data[index]
    console.log(index)
    const checkNumber=(i)=>{
        if (i<0) {
            return data.length-1
        }
        else if (i>data.length-1) {
            return 0
        }
        return i
    }
    const nextSlider=()=>{
        setIndex(index=>checkNumber(index+1))
    }
    const prevSlider=()=>{
        setIndex(index=>checkNumber(index-1))
    }
    return (
        <div className="slider">
           <div className="slider-item" style={{ backgroundImage: `url(${img})`}}></div>
           <div className="slider-buttons">
            <button className="slider-button" onClick={prevSlider}><img src="img/left_arrow.svg" /></button>
            <button className="slider-button" onClick={nextSlider}><img src="img/right_arrow.svg" /></button>
           </div>

       
        </div>
    )
}
export default Slider