import React from "react";
import FormatQuestion from "../FormatQuestion.jsx/FormatQuestion";
import ToggleText from "../ToggleText/ToggleText";

import { Content, Plot } from "./plotsStyle";

const Plots = ({ checklistPlot }) => {
  return (
    <Content>
      {checklistPlot?.map((plot, index) => (
        <Plot key={index}>
          <ToggleText title={`سوالات قطعه ${index + 1}`}>
            <FormatQuestion items={plot?.plotQuestions} />
          </ToggleText>
          {plot?.stations?.map((station, index) => (
            <ToggleText key={index} title={`استگاه ${index + 1}`}>
              <FormatQuestion
                items={station?.stationQuestions}
                easting={station?.easting}
                northing={station?.northing}
              />
            </ToggleText>
          ))}
        </Plot>
      ))}
    </Content>
  );
};

export default Plots;
