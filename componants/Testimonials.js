import { useState } from "react";
import Card from "./Card";
import { BiRightArrowAlt } from "react-icons/bi";
import { BiLeftArrowAlt } from "react-icons/bi";

function Testimonials(props){

    const DataPassPrps = props.ReviewsData;

    const [index,setindex] = useState(0);

    function LeftShiftHandler(){
        if(index-1 < 0){
            setindex(DataPassPrps.length -1);
        }else{
            setindex(index-1);
        }
    }

    function RightShiftHandler(){
        if(index+1 >= DataPassPrps.length){
            setindex(0);
        }else{
            setindex(index + 1);
        }
    }

    function SurpriseHandler(){
        const value = Math.floor(Math.random()*DataPassPrps.length);
        setindex(value);
        console.log(value);
    }

    return(
        <div className="Testtimo-Div">
            <Card revw={DataPassPrps[index]}></Card>


            <div className="ArrowRightLeft">
                <button onClick={LeftShiftHandler} className="ArrowLeftRight"> <BiLeftArrowAlt /> </button>
                <button onClick={RightShiftHandler} className="ArrowLeftRight"> <BiRightArrowAlt /> </button>
            </div>

            <div>
                <button onClick={SurpriseHandler} className="Button-Surprise"> Shuffle Me </button>
            </div>
        </div>
    )
}

export default Testimonials;