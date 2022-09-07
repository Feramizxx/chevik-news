import LayOut from '../../components/layout';
import InfiniteBoard from '../../components/InfiniteBoard';
import { useParams } from 'react-router';
import ArrrowUp from '../../components/ArrowUp';

const Rubrics = () => {
    const { category } = useParams();

    return (
        <LayOut>
            <InfiniteBoard category={category} />
            <ArrrowUp />
        </LayOut>
    );
}

export default Rubrics;