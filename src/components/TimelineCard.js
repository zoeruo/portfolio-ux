import React from 'react';
import parse from "html-react-parser";
import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator,
} from "@mui/lab";

import Star from "../asset/img/Star.png"; //effect not as expected


const TimelineCard = ({ activity, details, notlast, img }) => {
    if (notlast == 'false') {
        return (
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot variant="outlined">
                    </TimelineDot>
                </TimelineSeparator>
                <TimelineContent className="pb-4" style={{ paddingTop: "7px" }}>
                    <h2 className="">{activity}</h2>
                    <React.Fragment>{parse(details)}</React.Fragment>
                    <div className="">
                        <img src={img} className="img-fluid" />
                    </div>
                </TimelineContent>
            </TimelineItem>
        );
    } else {
        return (
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot variant="outlined" >
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className="pb-4" style={{ paddingTop: "7px" }}>
                    <h2 className="">{activity}</h2>
                    <React.Fragment>{parse(details)}</React.Fragment>
                    {img && (
                        <div className="">
                            <img src={img} className="img-fluid" />
                        </div>
                    )}
                </TimelineContent>
            </TimelineItem>
        );
    }

};

export default TimelineCard;
