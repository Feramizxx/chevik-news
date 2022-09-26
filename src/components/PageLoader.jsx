const PageLoader = () => {
    return (
        <div className="w-screen h-screen fixed top-0 left-0 flex items-center justify-center z-50 bg-primary-bg">
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    );
}

export default PageLoader;