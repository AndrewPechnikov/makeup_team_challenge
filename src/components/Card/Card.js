

import FeedBack from './../FeedBack/FeedBack';
import { CardStyled } from './CardStyled';
import Price from './../Price/Price'




const Card = ({ name, price, discountPrice, img, type, numsFeedback, numsStars }) => {



    return (
        <CardStyled>
            <button />

            <img width={153} src={img} alt="" />
            <h5>{name}</h5>
            <p>{type}</p>
            <FeedBack numsStars={2} numsFeedback={34}></FeedBack>
            <Price price={429} discountPrice={329}></Price>



        </CardStyled >
    );
};

export default Card;
