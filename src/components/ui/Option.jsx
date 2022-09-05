import React, {useCallback} from 'react';

const Option = ({clickable = true, children, className}) => {
    const onClick = clickable? useCallback(() => {

    },[]) : undefined;

    return (
        <div onClick={onClick} className={`w-full max-w-[180px] py-2 px-4 bg-[#D9D9D9] flex items-center justify-center ${clickable && 'hover:cursor-pointer'} ${className}`}>
            <div className='text-black'> {children} </div>
        </div>
    );
};

export default Option;