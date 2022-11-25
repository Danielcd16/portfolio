import React from "react";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  const contentStyle = { background: "#ccd6f6", color: "#31333B" };

  return (
    <div className="bg-[#0a192f] py-64">
      <div name="experience" className="bg-[#0a192f] w-full h-screen">
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#238CD8]">
            Experience
            <p className="py-6 text-base font-normal">
              // My academic and work experience
            </p>
          </p>

          <VerticalTimeline lineColor="#238CD8">
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={contentStyle}
              date="2010-2016"
              dateClassName="text-gray-300"
              iconStyle={{ background: "#3e497a", color: "#fff" }}
              icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                Colegio Nuestra Señora del Pilar, Escazu
              </h3>
              <p> High School Diploma</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={contentStyle}
              date="2017-2018"
              dateClassName="text-gray-300"
              iconStyle={{ background: "#3e497a", color: "#fff" }}
              icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">Academia UCR</h3>
              <p> CISCO IT Essentials + CCNA I-V </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={contentStyle}
              date="2018-2021"
              dateClassName="text-gray-300"
              iconStyle={{ background: "#3e497a", color: "#fff" }}
              icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                ULACIT, Costa Rica
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Bachelor's Degree
              </h4>
              <p> Computer Engineering</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={contentStyle}
              date="2021 - 2022"
              dateClassName="text-gray-300"
              iconStyle={{ background: "#e9d35b", color: "#fff" }}
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                Funding Metrics
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Costa Rica</h4>
              <p>Data Analyst</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Experience;
