import React, {memo} from 'react';
import News from "./News";
import helpers from "../helpers";

const news = [
    {
        image: require('../assets/img/trees.png'),
        title: 'STAT OF THE DAY: Lorem Ipsum...',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
        date: 'Dec 07, 2022',
        views: 978
    },
    {
        image: require('../assets/img/presidents.png'),
        title: 'STAT OF THE DAY: Lorem Ipsum...',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
        date: 'Dec 07, 2022',
        views: 978
    },
    {
        image: require('../assets/img/trees.png'),
        title: 'STAT OF THE DAY: Lorem Ipsum...',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
        date: 'Dec 07, 2022',
        views: 978
    },
    {
        image: require('../assets/img/presidents.png'),
        title: 'STAT OF THE DAY: Lorem Ipsum...',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
        date: 'Dec 07, 2022',
        views: 978
    },
    {
        image: require('../assets/img/trees.png'),
        title: 'STAT OF THE DAY: Lorem Ipsum...',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
        date: 'Dec 07, 2022',
        views: 978
    },
    {
        image: require('../assets/img/presidents.png'),
        title: 'STAT OF THE DAY: Lorem Ipsum...',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
        date: 'Dec 07, 2022',
        views: 978
    }
];

const NewsBoard = memo(({amount = 6}) => {
    return (
        <div className='py-8 lg:grid grid-cols-2 gap-6 xl:grid-cols-3'>
            {helpers.getNumbersTill(amount).map(num => <News news={news[num]} key={num}/>)}
        </div>
    );
});

export default NewsBoard;