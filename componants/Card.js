import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";


function Card(props){

    const reviewData = props.revw;
    return(
        <div className="EkSingleCard">

            <div className="imageDiv"> <img className="PersonImage" src={reviewData.image} /> </div>
            <div className="Image-circle"></div>

            <div className="PersonName"> <h2 className="Name"> {reviewData.name} </h2> </div>

            <div className="PersonJob"> <p className="job"> {reviewData.job} </p> </div>

            <div className="DoubleQuote"> <FaQuoteLeft /> </div>

            <div className="ProperLines"> {reviewData.text} </div>

            <div className="DoubleQuote"> <FaQuoteRight /> </div>

        </div>
    )
}

export default Card;