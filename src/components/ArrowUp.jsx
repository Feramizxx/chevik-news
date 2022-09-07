import { ReactComponent as ArrowUp } from "../assets/icons/arrow-up.svg";
import helpers from "../helpers";

const onArrowClick = () => {
    helpers.scrollTop('smooth')
}


const ArrrowUp = () => {
    return (
        <ArrowUp onClick={onArrowClick} className='fixed right-6 bottom-6 sm:right-12 sm:bottom-12 hover:cursor-pointer' />
    );
}

export default ArrrowUp;