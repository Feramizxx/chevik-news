import React from 'react';
import NewsBoard from "../../components/NewsBoard";
import Option from "../../components/ui/Option";

const LatestNews = () => {
    return (
        <div>
            <Option clickable={false}>
                SON XƏBƏRLƏR
            </Option>
            <NewsBoard/>
        </div>
    );
};

export default LatestNews;