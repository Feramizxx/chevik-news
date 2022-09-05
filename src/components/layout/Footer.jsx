import React from 'react';
import { ReactComponent as Instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as Telegram } from "../../assets/icons/telegram.svg";
import { ReactComponent as TheJavaChip } from "../../assets/icons/thejavachip.svg";

const Footer = () => {
    return (
        <div className='mt-24'>
            <hr className='bg-line h-[1px] border-none'/>
            <div className='flex items-center justify-center py-16 px-6'>
                <p className='max-w-[600px]'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type specimen book. It has survived not
                    only five centuries, but also the leap into electronic typesetting, remaining essentially
                    unchanged
                </p>
            </div>
            <footer className='p-6 sm:p-12 lg:p-16 bg-primary-card sm:grid grid-cols-2 lg:flex justify-evenly'>
                <div>
                    <h3> Sosial şəbəkələrimiz </h3>
                    <div className='flex justify-between max-w-[170px]'>
                        <Instagram />
                        <Facebook />
                        <Telegram />
                    </div>
                </div>
                <div>
                    <h3> Əlaqə </h3>
                    <ul>
                        <li> <a href="#"> 7 H.Aliyev, Baku, Azerbaijan AZ1010 </a> </li>
                        <li className='my-1'> <a href="#"> +994 55 219 7110 </a> </li>
                        <li> <a href="#"> info@wide-travel.com </a> </li>
                    </ul>
                </div>
                <div>
                    <h3> Haqqımızda </h3>
                    <ul> {/* TODO fill this part when it will be ready */} </ul>
                </div>
                <div>
                    <p className='my-6'> © Bütün hüquqlar qorunur </p>
                    <div className='flex items-center'>
                        <p className='text-sm'> Site created by: </p>
                        <TheJavaChip className='ml-6' />
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;