import LayOut from "../../components/layout";
import { useParams } from "react-router";
import ArrrowUp from "../../components/ArrowUp";
import InfiniteNews from './../../components/InfiniteNews';

const RubricsPage = () => {
  const { slug } = useParams();

  return (
    <div className="pt-48 px-6">
      <InfiniteNews type="rubrics" slug={slug} />
      <ArrrowUp />
    </div>
  );
};

export default RubricsPage;
