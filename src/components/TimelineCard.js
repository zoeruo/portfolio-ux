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
                <TimelineContent className="pt-0 pb-4">
                    <div className="text-c-chgh"><strong>{activity}</strong></div>
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
                <TimelineContent className="pt-0 pb-4">
                    <div className="text-c-chgh"><strong>{activity}</strong></div>
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
