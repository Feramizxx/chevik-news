import React, {useEffect, useState} from 'react';
import {getColorFromURL} from "color-thief-node";

const UseColorThief = (image) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [color, setColor] = useState({
        r: 255,
        g: 255,
        b: 255
    });

    const getColor = async () => {
        try {
            const color = await getColorFromURL(image);
            setColor(color);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getColor().catch(console.error);
    },[image]);

    return { color, isLoading, error }
};

export default UseColorThief;