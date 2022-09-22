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
    const { categories, isCategoriesLoading, setCategories, categoriesError } = useFetchCategories();
    const [selectedCategorySlug, setSelectedCategorySlug] = useState('');
    if (isCategoriesLoading) return <ComponentsLoader />

    return (
        <div>
            <Dropdown
                data={categories}
                setCurrentCb={(category) => setSelectedCategorySlug(category.slug)}
                setData={setCategories}
                sortCb={(category) => category.slug}
                displayCb={(category) => category.name}
            />
            <InfiniteBoard />
        </div>
    );
};

export default AllNews;