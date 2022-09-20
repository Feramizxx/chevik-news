import React from 'react';
import Footer from "./Footer";
import Header from './Header';

const LayOut = ({ children }) => {
    return (
        <>
            <Header />
            <main id='main' className=''>
                <div>
                    {children}
                </div>
            </main>
            <Footer />
        </>
    );
};

export default LayOut;