const PageDirectory = ({ to, className }) => {
    return (
        <p className={className}> Əsas xəbərlər / <span className="text-primary-light"> {to} </span> </p>
    );
}

export default PageDirectory;