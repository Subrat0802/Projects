import React, { useRef } from "react";
import { TbTopologyStarRing3 } from "react-icons/tb";
import { Link } from "react-router-dom";
import openai from "../utils/openai";
import { useDispatch, useSelector } from "react-redux";
import { addGptSuggetions } from "../utils/reduxStore/gptSlice";
//COVCELQ4KIDQvb++7am4VzCnEzgD"

const UberGpt = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const handleGptSearch = async () => {
    const gptQuery =
      "Act as a nutritionist who also a good chef who know very well about food" +
      searchText.current.value +
      "user will give input about his or her mood you just give one food suggetion that make user mood well and after that just suggest user order this and if user don't want to make give user recipy of food and process of making that particualr food. also tell how much nutritions in the food. only suggest food that we make in our kitchen and Indian can make easilly. ";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log("Hello",gptResults.choices[0]?.message)
    dispatch(addGptSuggetions(gptResults.choices[0]?.message?.content));
  };
  const gptTextSuggetion = useSelector((store) => store.gptSuggetionReducer.gptSuggetion)
  const textParts = gptTextSuggetion ? gptTextSuggetion.split("\n") : [];
  const renderedText = textParts.map((part, index) => {
    if (index === 0) {
      return (
        <p key={index} style={{ fontWeight: "bold", fontSize: "24px", color: "green" }}>
          {part}
        </p>
      );
    } else {
      return <p key={index}>{part}</p>;
    }
  });
  return (
    <div className="pt-5 min-h-[100vh] flex items-center justify-between pb-4 flex-col text-black  ">
      <div className="flex flex-col justify-center items-center">
        <TbTopologyStarRing3 className="text-7xl text-[#20B05F]" />
        <p className="text-xl">Uber Gpt</p>
        <Link to={"/"}>
          <p>Home</p>
        </Link>
      </div>
      <div className="typewriter w-10/12 min-h-[80vh] border mx-auto px-24 pb-16">
        {renderedText}         
      </div>
      <div className="fixed bottom-6">
        <input
          placeholder="How do you feel today? "
          className="border border-black rounded-lg w-[30vw] py-2 px-2 mr-2"
          ref={searchText}
        />
        <button
          className="py-2 px-4 hover:bg-[#00C544] bg-[#20B05F] rounded-lg font-semibold border border-black"
          onClick={handleGptSearch}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
export default UberGpt;