import React from 'react';
import NewsBoard from "../../components/NewsBoard";
import Option from "../../components/ui/Option";
import storageNews from '../../temporary-storage';

const LatestNews = () => {
    return (
        <div>
            <Option clickable={false}>
                SON XƏBƏRLƏR
            </Option>
            <NewsBoard news={storageNews[0]}/>
        </div>
    );
};

export default LatestNews;