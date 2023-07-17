import React from "react";
import Card from "./Card";

export default function Cards({ questions, setQuestionList }) {
  return (
    <>
      {questions.length === 0
        ? null
        : questions.map((ele) => {
            return <Card question={ele} key={ele.id} />;
          })}
    </>
  );
}
