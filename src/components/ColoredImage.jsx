const ColoredImage = ({ image, children }) => {
    return (
        <div
            className="w-screen max-w-[1600px] bg-no-repeat bg-cover bg-center h-[70vh] relative"
            style={{ backgroundImage: image }}
        >
            <div
                className="w-full absolute top-0 h-full bg-image-shadow"
                style={{ background: "linear-gradient(90deg, rgba(11, 44, 94, 0.75) 0%, rgba(65, 107, 172, 0.75) 100%)" }}
            />
            {children}
        </div>
    );
}

export default ColoredImage;