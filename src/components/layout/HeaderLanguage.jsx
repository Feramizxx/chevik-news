import React, { useContext, useState } from "react";
import { POSSIBLE_LANGUAGES } from "../../contexts/LanguageContext";
import { LanguageContext } from './../../contexts/LanguageContext';
import Dropdown from './../ui/Dropdown';

const HeaderLanguage = () => {
  const { setCurrentLanguage } = useContext(LanguageContext)
  const [languages, setLanguages] = useState(POSSIBLE_LANGUAGES);

  return (
    <Dropdown
      data={languages}
      setData={setLanguages}
      sortCb={(lang) => lang}
      displayCb={(lang) => lang.toUpperCase()}
      setCurrentCb={(lang) => setCurrentLanguage(lang)}
    />
  );
};
export default HeaderLanguage;
