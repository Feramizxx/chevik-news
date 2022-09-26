import React from "react";
import { ReactComponent as Instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as Telegram } from "../../assets/icons/telegram.svg";
import { ReactComponent as TheJavaChip } from "../../assets/icons/thejavachip.svg";
import { NavLink } from 'react-router-dom';
import helpers from '../../helpers';
import Logo from './../Logo';
import useFetchCategories from "../../hooks/useFetchCategories";
import useFetchContacts from "../../hooks/useFetchContacts";
import useFetchSocials from "../../hooks/useFetchSocials";
import { useContext } from "react";
import { LanguageContext } from './../../contexts/LanguageContext';
import PageLoader from './../PageLoader';

const Footer = () => {
  const { language } = useContext(LanguageContext);
  const { categories, isCategoriesLoading } = useFetchCategories(language);
  const { contacts, isContactsLoading } = useFetchContacts();
  const { socials, isSocialsLoading } = useFetchSocials();
  if (isCategoriesLoading || isContactsLoading || isSocialsLoading) return <PageLoader />

  return (
    <div className="mt-24 ">
      <hr className="bg-line h-[1px] border-none" />
      <div className="flex items-center justify-center py-16 px-6">
        <p className="max-w-[600px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged
        </p>
      </div>
      <footer className="bg-primary-card flex flex-col">
        <div className="grid grid-cols-4 max-lg:grid-cols-2 max-lg:place-items-start max-sm:grid-cols-1 place-items- px-16 py-8 ">
          <div>
            <Logo />
            <p className="max-w-[450px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque laboriosam molestiae ducimus, magni perspiciatis vel ipsum officiis commodi consectetur. Ipsam accusamus id enim animi pariatur laboriosam dolorem, possimus officia reprehenderit!
            </p>
          </div>
          <div className="pl-20 max-lg:pl-32 max-sm:pl-0">
            <p className="my-6">Quick Links </p>
            <ul className="pointer">
              <li> <FooterLink to={'/'}>Əsas Xəbərlər</FooterLink> </li>
              {categories.map(category => <li key={category.id}> <FooterLink to={`/news/${category.slug}`}>{category.name}</FooterLink> </li>)}
            </ul>
          </div>
          <div>
            <h3 className="no-underline"> Əlaqə </h3>
            <ul>
              <li className="no-underline">
                <a
                  href="https://www.google.com/maps/place/7+Heyd%C9%99r+%C6%8Fliyev+prospekti,+Bak%C4%B1+1033,+%D0%90%D0%B7%D0%B5%D1%80%D0%B1%D0%B0%D0%B9%D0%B4%D0%B6%D0%B0%D0%BD/@40.3976489,49.8697907,17z/data=!3m1!4b1!4m5!3m4!1s0x40307d4789526da9:0xd89917404bcaeea1!8m2!3d40.3976448!4d49.8719794"
                  target="_blank"
                >
                  {contacts.address}
                </a>
              </li>
              <li className="no-underline">
                <a href={`tel:${contacts.phone}`}> {contacts.phone} </a>
              </li>
              <li className="no-underline">
                <a href={`mailto:${contacts.email}`}>
                  {contacts.email}
                </a>
              </li>
            </ul>
          </div>
          <div className="max-lg:pl-32 max-sm:pl-0" >
            <h3 className="no-underline"> Sosial şəbəkələrimiz </h3>
            <div className="flex justify-between max-w-[170px]">
              <a href={socials.telegram}> <Instagram /> </a>
              <a href={socials.facebook}> <Facebook /> </a>
              <a href={socials.instagram}> <Telegram /> </a>
            </div>
          </div>
        </div>
        <div className="px-16 mt-4 flex w-full justify-between flex-row  max-sm:flex-col"> <p> © Bütün hüquqlar qorunur </p>
          <p className="flex  items-center max-sm:pt-4"> Site created by:
            <TheJavaChip className="ml-6 w-[120px] bg-white bg-opacity-80" />
          </p>
        </div>
      </footer>
    </div>
  );
};

const FooterLink = ({ to, children }) => {
  const onLinkClick = () => {
    helpers.scrollTop();
  }

  return (
    <NavLink to={to} onClick={onLinkClick}>
      {children}
    </NavLink>
  );
}

export default Footer;
