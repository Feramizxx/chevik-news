import LayOut from "../../components/layout";
import InfiniteBoard from "../../components/InfiniteBoard";
import { useParams } from "react-router";
import ArrrowUp from "../../components/ArrowUp";

const Rubrics = () => {
  const { category } = useParams();

  return (
    <LayOut>
      <div className="pt-48">
        <InfiniteBoard category={category} />
        <ArrrowUp />
      </div>
    </LayOut>
  );
};

export default Rubrics;
