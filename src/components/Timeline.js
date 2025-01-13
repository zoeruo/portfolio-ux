import { Timeline } from "@mui/lab";
import { timelineItemClasses } from '@mui/lab/TimelineItem';
import React from "react";
import TimelineCard from "./TimelineCard";

import deptsketch from "../asset/img/CHGH_D_sketch.png";
import ia from "../asset/img/CHGH_IA.png";

const MyTimeline = () => {
  return (
    <Timeline sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}>
      <TimelineCard activity="Evaluated and reorganized the website's content structure" details="The old website seems disorganized. It looks like some content was added later on, and it doesn't match the rest of the website."/>
      <TimelineCard activity="Restructured the website's information architecture and redefined the scope of editable content" details="Redefined the types of user roles, what they can typically do (use cases), and what information each role can edit." img={ia}/>
      <TimelineCard activity="Sketched & Wireframed" details="" img={deptsketch}/>
      <TimelineCard activity="Mid-Fidelity Prototype & Discussed with our medical director (decision-maker)" details="Unfortunately, I didn't meet with the medical director, the key decision-maker, until I had a more finalized version of the prototype (mid-fidelity stage). He was very busy, and my manager felt that it was unnecessary to bother him with an extra meeting in the early stages. At the time, I wasn't aware of the importance of getting user feedback early on. This led to a challenging meeting where several design aspects weren't his top priority. I addressed this by iterating on the design and holding further meetings with him."/>
      <TimelineCard activity="Cross-Departmental Stakeholder Meeting" details="While meeting a few users from different departments for design feedback, I discovered some conflicts in needs between users and even the medical director. For example, a user loved the original design for a feature that had been changed based on the medical director's input.
      I needed to gather wider user feedback. That’s where I met with the representatives from over 80 departments, which of course, was chaos."/>
      <TimelineCard activity="Optimized Mid-Fidelity Prototype based on new feedback" details="The meeting marked a turning point. While revisions to the mid-fidelity prototype required extra effort, they were necessary."/>
      <TimelineCard activity="Lack of Comprehensive Testing" details="Back then, I wore both designer and developer hats, and testing wasn't a big priority in my head. I was under a lot of pressure and always working against deadlines, so I jumped right into development without much testing beforehand."/>
      <TimelineCard activity="Developed" details="I was the only front-end developer on the team, working with two back-end developers and a database engineer."/>
      <TimelineCard activity="Project on hold" details="I was surprised to hear the project might be put on hold and outsourced. I knew I wanted to fix the situation. Here are the key points I used to convince the director to keep it going in-house:<br><ul><li>Highlighting the total cost, including the time and effort already invested in the project, compared to outsourcing from scratch.</li><li>Emphasizing our team's deep understanding of the company and its systems, which would lead to a faster and smoother development process with fewer problems.</li></ul>"/>
      <TimelineCard activity="Rapid deployment without testing" details="Convincing the director to keep the project in-house was a big win, but it came with a challenge: he wanted to see the final product right away." notlast="false" />
    </Timeline>

    
  );
};

export default MyTimeline;


// const Timeline = () => {
//     const [scheduleData, setScheduleData] = useState([]);
  
//     useEffect(() => {
//       const fetchSchedule = async () => {
//         fetch("http://localhost:3000/schedules")
//           .then((response) => response.json())
//           .then((schedules) => setScheduleData(schedules));
//       };
//       fetchSchedule();
//     }, []);
  
//     return (
//       <Timeline position="alternate">
//         {scheduleData.map((schedule) => (
//           <TimelineCard key={schedule.id} {...schedule} />
//         ))}
//       </Timeline>
//     );
//   }