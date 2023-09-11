import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

import { StyledAvatar } from "./Timeline.style";

import { timelineJson } from "../../assets/photos/timelineJson";

const Timeline = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getDatas = async () => {
      try {
        setData(timelineJson);
        console.log(timelineJson);
      } catch (error) {
        console.log("error", error);
      } finally {
      }
    };
    getDatas();
  }, []);

  return (
    <VerticalTimeline>
      {data?.map((data) => (
        <VerticalTimelineElement
          key={data.id}
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#454f5a", color: "#D7DFE6" }}
          contentArrowStyle={{ borderRight: "7px solid  #24292F" }}
          iconStyle={{ background: "#454f5a", color: "#ffdf22" }}
          icon={<WbSunnyIcon />}
        >
          <Typography
            variant="h5"
            gutterBottom
            className="vertical-timeline-element-title"
          >
            {data?.text}
          </Typography>
          {data?.img && (
            <StyledAvatar variant="rounded" alt=" " src={data?.img} />
          )}
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default Timeline;
