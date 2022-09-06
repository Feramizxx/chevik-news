import React, {memo} from 'react';
import News from "./News";
import helpers from "../helpers";


const NewsBoard = memo(({amount = 6, news}) => {
    return (
        <div className='py-8 md:grid grid-cols-2 gap-6 xl:grid-cols-3'>
            {helpers.getNumbersTill(amount).map(num => <News news={news[num]} key={num}/>)}
        </div>
    );
});

export default NewsBoard;