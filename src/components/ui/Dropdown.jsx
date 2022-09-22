import { useEffect, useState } from 'react';
import Option from './Option';
import { ReactComponent as ArrowDown } from '../../assets/icons/arrow-down.svg';

const sortData = (data, cb, selected) => {
    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        if (cb(item) === cb(selected)) {
            data[i] = data[0];
            data[0] = item;
            break;
        }
    }

    return data;
}

const Dropdown = ({ data, setCurrentCb, setData, sortCb, displayCb }) => {
    const [isVisible, setIsVisible] = useState(false);

    const onClickItem = (item) => {
        setCurrentCb(item);
        setData(sortData(data, sortCb, item));
        setIsVisible(false);
    }

    const onClickCurrent = () => {
        setIsVisible(!isVisible);
    }

    const first = data[0];
    useEffect(() => { setCurrentCb(first) }, [])


    return (
        <div>
            <Option clickable={true} onClick={() => onClickCurrent(first)}>
                <div className='flex items-center'>
                    <p className='text-black pr-3'> {displayCb(first)} </p>
                    <ArrowDown />
                </div>
            </Option>
            {isVisible &&
                <ul className='mt-2 absolute w-full'>
                    {data.leght <= 1 ? [] : data.filter((item, index) => index != 0).map((item) => {
                        const content = displayCb(item);
                        return (
                            <DropdownOption
                                key={content}
                                cb={() => onClickItem(item)}
                            >
                                {content}
                            </DropdownOption>
                        )
                    })}
                </ul>
            }
        </div>
    );
}

const DropdownOption = ({ children, cb }) => {
    return (
        <Option clickable={true} onClick={cb}> {children} </Option>
    )
}

export default Dropdown;