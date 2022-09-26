import React from 'react';
import Footer from "./Footer";
import Header from './Header';
import LanguageContextProvider from './../../contexts/LanguageContext';

const LayOut = ({ children }) => {
    return (
        <LanguageContextProvider>
            <Header />
            <main id='main' className=''>
                <div>
                    {children}
                </div>
            </main>
            <Footer />
        </LanguageContextProvider>
    );
};

export default LayOut;