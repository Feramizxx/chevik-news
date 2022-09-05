import React from 'react';
import Footer from "./Footer";

const LayOut = ({children}) => {
    return (
        <>
            {/* TODO add Header */}
            <main id='main' className='flex justify-center'>
                <div>
                    {children}
                </div>
            </main>
            <Footer />
        </>
    );
};

export default LayOut;