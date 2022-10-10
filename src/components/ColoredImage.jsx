const ColoredImage = ({ image, children, className }) => {
    return (
        <div
            className={`w-screen max-w-[1600px] bg-no-repeat bg-cover bg-center h-[50vh] relative ${className}`}
            style={{ backgroundImage: image }}
        >
            {children}
            <div
                className="w-full absolute top-0 h-full z-0"
                style={{ background: "linear-gradient(90deg, rgba(11, 44, 94, 0.75) 0%, rgba(65, 107, 172, 0.75) 100%)" }}
            />
        </div>
    );
}

export default ColoredImage;