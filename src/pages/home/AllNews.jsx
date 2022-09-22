import React, { useState } from 'react';
import { ReactComponent as ArrowDown } from "../../assets/icons/arrow-down.svg";
import InfiniteBoard from "../../components/InfiniteBoard";
import ComponentsLoader from '../../components/ComponentLoader';
import Dropdown from '../../components/ui/Dropdown';
import useFetchCategories from '../../hooks/useFetchCategories';

{/* <Option clickable={true}>
                <div className='flex items-center text-black'>
                    Bu Həftə
                    <ArrowDown className='ml-2' />
                </div>
            </Option> */}

const AllNews = () => {
    // const { categories, isCategoriesLoading, setCategories, categoriesError } = useFetchCategories();
    // if (isCategoriesLoading) return <ComponentsLoader />

    return (
        <div>
            <InfiniteBoard />
        </div>
    );
};

export default AllNews;