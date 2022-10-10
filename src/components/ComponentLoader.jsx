const ComponentsLoader = ({ bg = 'bg-primary-card' }) => {
    return (
        <div className={`fixed w-full flex items-center justify-center ${bg} z-10`}>
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    );
}

export default ComponentsLoader;