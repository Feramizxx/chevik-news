import React, { memo } from 'react';
import News from "./News";
import helpers from "../helpers";

const NewsBoard = memo(({ amount = 6, news, to = 'news' }) => {
    return (
        <div className='py-8 grid grid-cols-3  place-items-center max-lg:grid-cols-2 gap-6  max-sm:grid-cols-1 max-sm:place-items-center '>
            {helpers.getNumbersTill(amount).map(num => {
                return (
                    <News news={news[num]} key={news[num].id} to={to === 'news' ? `single-news` : `single-rubrics`} />
                )
            })}
        </div>
    );
});

export default NewsBoard;