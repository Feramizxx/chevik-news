import { useParams } from "react-router";
import LayOut from "../../components/layout";
import helpers from "../../helpers";
import PageDirectory from "../../components/ui/PageDirectory";
import ColoredImage from "../../components/ColoredImage";
import Video from "../../components/ui/Video";


const tempText1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
const tempText2 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
const tempParagraphs = [tempText1, tempText2];

const Rubric = () => {
    const { id } = useParams();

    return (
        <>
            {helpers.validateId(id)}
            <LayOut>
                <div className="px-14">
                    <PageDirectory to="Rubrikalar" />
                    <div className="my-6">
                        <h1 className="my-3 text-2xl font-semibold"> STAT OF THE DAY: Lorem Ipsum... </h1>
                        <p className="w-full max-w-[450px]"> Lorem Ipsum is simply dummy text of the printing and typesetting industry... </p>
                    </div>
                </div>
                <ColoredImage image={`url(${require('../../assets/img/presidents.png')})`} />
                <div className="w-full flex justify-center">
                    <div className="max-w-[1400px]">
                        <RubricText paragraphs={tempParagraphs} />
                        <Video video={require('../../assets/video/temp-video.mp4')} />
                        <RubricText paragraphs={tempParagraphs} />
                    </div>
                </div>
            </LayOut >
        </>
    );
}

const RubricText = ({ paragraphs }) => {
    return (
        <div className="py-24 max-w-[1400px]">
            {paragraphs.map((paragraph, index) => {
                return (
                    <div key={index}>
                        <p>
                            {paragraph}
                        </p>
                        <br />
                    </div>
                )
            })}
        </div>
    )
}

export default Rubric;