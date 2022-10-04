import React from "react";
// components
import Typography from "../Typography/Typography";
// styled components
import { MainQuestion, QuestionItem } from "./formatQuestionStyle";

const FormatQuestion = ({ items, easting, northing }) => {
  return (
    <MainQuestion>
      {easting && <Typography>عرض جفرافیایی : {easting}</Typography>}
      {northing && <Typography>طول جغرافیایی : {northing}</Typography>}
      {items?.map((item, index) => (
        <QuestionItem key={index}>
          <Typography size="15px">{item.text}</Typography>
          <Typography size="15px">{item.answer}</Typography>
        </QuestionItem>
      ))}
    </MainQuestion>
  );
};

export default FormatQuestion;
