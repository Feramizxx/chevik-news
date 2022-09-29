import React from "react";
import img from '../../assets/img/rublikimg.png';
import LayOut from '../../components/layout';
import { useNavigate } from "react-router";
import PageDirectory from './../../components/ui/PageDirectory';
import useFetchRubrics from './../../hooks/useFetchRubrics';
import PageLoader from './../../components/PageLoader';
import ColoredImage from './../../components/ColoredImage';
import { storageBaseURL } from "../../app/App";
import { NavLink } from 'react-router-dom';
import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";

const Rubrics = () => {
  return (
    <RubricsContent />
  );
};

const RubricsContent = () => {
  const { language } = useContext(LanguageContext);
  const { rubrics, isRubricsLoading } = useFetchRubrics(language);
  if (isRubricsLoading) return <PageLoader />

  return (
    <div className="mt-52">
      <PageDirectory to='Rubrikalar' className='p-12' />
      <div>
        {rubrics.map((rubric) =>
          <ColoredImage key={rubric.id} className='mt-4' image={`url(${storageBaseURL + rubric.image})`}>
            <div className="w-full h-full flex items-center px-12 sm:px-24 relative" style={{
              zIndex: 1
            }}>
              <h1 className="text-[3rem] font-bold"> {rubric.title} </h1>
              <NavLink to={`/rubrics/${rubric.slug}`} className="bg-white py-1 px-12 text-black absolute bottom-3 sm:bottom-6 right-12 sm:right-24"> Ətrafli </NavLink>
            </div>
          </ColoredImage>
        )}
      </div>
    </div>
  )
}

export default Rubrics;
