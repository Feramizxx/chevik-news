import { useParams } from "react-router";
import LayOut from "../../components/layout";
import PageDirectory from "../../components/ui/PageDirectory";
import ColoredImage from "../../components/ColoredImage";
import useFetchSingleRubric from './../../hooks/useFetchSingleRubric';
import PageLoader from "../../components/PageLoader";
import { storageBaseURL } from "../../app/App";
import { Axios, AxiosError } from "axios";
import { Navigate } from "react-router";
import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";

const SingleRubric = () => {
  return (
    <SingleRubricsContent />
  );
};

const SingleRubricsContent = () => {
  const { slug } = useParams();
  const { language } = useContext(LanguageContext);
  const { rubric, isRubricLoading, rubricError } = useFetchSingleRubric(slug, language);
  if (isRubricLoading) return <PageLoader />

  if (rubricError && rubricError instanceof AxiosError) {
    if (rubricError.response.status === 404) {
      return <Navigate to='/' />
    }
  }

  return (
    <>
      <div className="mt-60">
        <PageDirectory to="Rubrikalar" className='px-12' />
        <div className="my-6 px-12">
          <h1 className="my-6 text-2xl font-semibold">
            {rubric.title}
          </h1>
          <p className="w-full  max-w-[450px]">
            {rubric.excerpt}
          </p>
        </div>
      </div>
      <ColoredImage
        image={`url(${storageBaseURL + rubric.image})`}
      />
      <div className="w-full flex justify-center">
        <div className="max-w-[1400px]">
          <div dangerouslySetInnerHTML={{ __html: rubric.body }} className="py-24 px-4 max-w-[1400px]" />
        </div>
      </div>
    </>
  )
}

export default SingleRubric;
