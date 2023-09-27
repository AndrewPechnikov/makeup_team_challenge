
import { PriceStyled } from './PriceStyled';





const Price = ({ price, discountPrice }) => {
    return (
        < PriceStyled >
            {(discountPrice) && <p className='discountPrice'>{discountPrice}</p>
            }


        </PriceStyled >
    )

};

export default Price;
