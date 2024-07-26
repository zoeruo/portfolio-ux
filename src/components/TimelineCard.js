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
                    <TimelineDot variant="outlined" >
                        {/* <img src={Star} /> */}
                    </TimelineDot>
                </TimelineSeparator>
                <TimelineContent>
                    <h4>{activity}</h4>
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
                        {/* <img src={Star} /> */}
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <h4>{activity}</h4>
                    <React.Fragment>{parse(details)}</React.Fragment>

                    <div className="">
                        <img src={img} className="img-fluid" />
                    </div>
                </TimelineContent>
            </TimelineItem>
        );
    }

};

export default TimelineCard;
