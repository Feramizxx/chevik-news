import React, {useEffect} from 'react';
import {ReactComponent as Views} from "../assets/icons/views.svg";
import useColorThief from "../hooks/useColorThief";

const News = ({news}) => {
    const {image, title, text, date, views} = news;
    const { color, isLoading, error } = useColorThief(image);

    if (isLoading) return <div className='w-screen h-screen fixed top-0 left-0 bg-primary-bg flex items-center justify-center'> Loading... </div>

    return (
        <div className='w-full max-w-[400px] mb-6 md:mb-0'>
            <img  className='min-w-[250px]' src={ image } alt="news image"/>
            {/* TODO decide between them two */}
            {/*<div style={{*/}
            {/*    backgroundImage: `url(${image})`*/}
            {/*}} className='bg-cover bg-center bg-no-repeat w-[300px] h-[300px]'/>*/}
            <div
                className='p-3 text-sm border-[1px] border-news-empty-border text-news-text'
                style={{
                    borderColor: `rgb(${color[0]},${color[1]},${color[2]})`
                }}
            >
                <h3 className='text-xl text-white'> {title} </h3>
                <p className='my-3'> {text} </p>
                <div className='flex justify-between items-center p-3'>
                    {date}
                    <div className='flex items-center'>
                        <Views className='mr-2' />
                        {views}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;