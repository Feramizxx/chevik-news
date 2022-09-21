import { useEffect, useState } from "react";

const useCurrentLocation = () => {
    const [lat, setLat] = useState(0);
    const [long, setLong] = useState(0);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
        });
    }, [lat, long]);

    return { lat, long };
}

export default useCurrentLocation;