import { useEffect } from "react";
import { useState } from "react";

const fixTime = (num) => {
    return num < 10 ? `0${num}` : num;
}

const useTimer = () => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [isTimerLoading, setIsTimerLoading] = useState(true);

    useEffect(() => {
        setInterval(() => {
            const currentDate = new Date();
            setHours(currentDate.getHours());
            setMinutes(currentDate.getMinutes());
            setIsTimerLoading(false);
        }, 1000);
    }, []);

    return { hours: fixTime(hours), minutes: fixTime(minutes), isTimerLoading };
}

export default useTimer;