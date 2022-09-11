import React from "react";
import img2 from "../../assets/img/reklam.png";
import img from "../../assets/img/President.png";
import logo from "../../assets/img/logo.png";
const NewsHero = (props) => {
  return (
    <>
      <div className="flex flex-col w-[80%] mr-auto ml-auto pt-24">
        <div>
          <h3 className="text-[16px] mb-20">Əsas xəbərlər</h3>
        </div>

        <div className="  mr-auto ml-auto">
          <div className="flex justify-between ">
            <div className="flex flex-col ">
              <div className="flex mb-3 justify-between">
                <p>STAT OF THE DAY: Lorem Ipsum...</p>
                <div className="flex">
                  <span className="mr-8">Dec 07, 2022</span>
                  <span>
                    <span className="flex">
                      <svg
                        className="mt-1 mr-1"
                        width="16"
                        height="12"
                        viewBox="0 0 16 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.7411 5.06375C15.0863 5.5066 15.0863 6.10446 14.7411 6.5466C13.6539 7.93875 11.0455 10.8052 8.00011 10.8052C4.95475 10.8052 2.34631 7.93875 1.2591 6.5466C1.09116 6.33456 1 6.07369 1 5.80518C1 5.53666 1.09116 5.2758 1.2591 5.06375C2.34631 3.6716 4.95475 0.805176 8.00011 0.805176C11.0455 0.805176 13.6539 3.6716 14.7411 5.06375Z"
                          fill="#F3F3F3"
                          stroke="#F3F3F3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      978
                    </span>
                  </span>
                </div>
              </div>
              <img className="object-fit  " src={img} />
            </div>
            <div className="ml-3 max-nav:hidden  mt-9">
              {props.reklam}
            </div>
          </div>

          <div className=" mt-24">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply
              random text. It has roots in a piece of classical Latin literature
              from 45 BC, making it over 2000 years old. Richard McClintock, a
              Latin professor at Hampden-Sydney College in Virginia, looked up
              one of the more obscure Latin words, consectetur, from a Lorem
              Ipsum passage, and going through the cites of the word in
              classical literature, discovered the undoubtable source. Lorem
              Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
              Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
              written in 45 BC. This book is a treatise on the theory of ethics,
              very popular during the Renaissance. The first line of Lorem
              Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
              section 1.10.32. <br />
              <br />
              <br />
              <br />
              <br />
              <h2 className="mb-2 text-[20px]">
                Section 1.10.32 of "de Finibus Bonorum et Malorum", written by
                Cicero in 45 BC
              </h2>
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?" "Sed ut perspiciatis unde omnis iste
              natus error sit voluptatem accusantium doloremque laudantium,
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
              quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
              ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
              sed quia consequuntur magni dolores eos qui ratione voluptatem
              sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
              dolor sit amet, consectetur, adipisci velit, sed quia non numquam
              eius modi tempora incidunt ut labore et dolore magnam aliquam
              quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
              exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
              ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
              qui in ea voluptate velit esse quam nihil molestiae consequatur,
              vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
            </p>
          </div>
        </div>
      </div>

    </>
  );
};

export default NewsHero;
