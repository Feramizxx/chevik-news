const Advertisement = ({ advertisement }) => {
    return (
        <div className="w-full sm:max-w-[27vw] relative">
            <p className="absolute bottom-0 p-2 bg-black bg-opacity-30 text-lg"> {advertisement.text} </p>
            <img className="object-cover object-center w-full h-full" src={advertisement.image} />
        </div>
    );
}

export default Advertisement;