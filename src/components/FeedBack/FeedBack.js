
import { FeedBackStyled } from './FeedBackStyled';
import { ReactComponent as Star } from './../../img/star.svg'




const FeedBack = ({ numsFeedback, numsStars }) => {
    const components = []
    // eslint-disable-next-line no-lone-blocks
    {
        for (let i = 0; i < 5; i++) {
            if (i < numsStars) {
                components.push(<Star className='star' key={i} fill={'#3C3938'}></Star>)
            }
            else {
                components.push(<Star className='star' key={i} fill={'#E3E6EA'}></Star>)
            }
        }
    }

    return (
        <FeedBackStyled>
            <div>
                {components}
            </div>
            <p>{numsFeedback} відгуків</p>
        </FeedBackStyled >
    );
};

export default FeedBack;
