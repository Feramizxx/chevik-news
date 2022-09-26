import { useEffect, useState } from 'react';
import { getColor } from "color-thief-node";

const useColorThief = (image) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [color, setColor] = useState({
        r: 255,
        g: 255,
        b: 255
    });

    const fetchColor = async () => {
        try {
            const imageObj = new Image();
            imageObj.crossOrigin = 'anonymous';
            imageObj.addEventListener('load', async () => {
                const color = await getColor(imageObj);
                setColor(color);
            })
            imageObj.src = image;
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchColor().catch(console.error);
    }, [image]);

    return { color, isLoading, error }
};

export default useColorThief;