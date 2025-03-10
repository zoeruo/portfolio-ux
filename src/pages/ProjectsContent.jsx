import imgrfo from '../asset/img/RFO_m0.png';
import rfo_ia from '../asset/img/RFO_IA.png';
import rfo_lf0 from '../asset/img/RFO_lf0.png';
import rfo_lf1 from '../asset/img/RFO_lf1.png';
import rfl_cn from '../asset/img/RFO_components.png';
import rfl_hf0 from '../asset/img/RFO_hf0.png';
import rfl_hf1 from '../asset/img/RFO_hf1.png';
import rfl_hf2 from '../asset/img/RFO_hf2.png';
import rfl_hf3 from '../asset/img/RFO_hf3.png';
import rfl_hf4 from '../asset/img/RFO_hf4.png';
import rfl_hf5 from '../asset/img/RFO_hf5.png';
import imgdd from '../asset/img/DD_m0.png';
import ddp0 from '../asset/img/DD_p0.png';
import ddp1 from '../asset/img/DD_p1.png';
import ddp2 from '../asset/img/DD_p2.png';
import ddstoryboards from '../asset/img/DD_storyboard.png';
import ddia from '../asset/img/DD_IA.png';
import ddlf from '../asset/img/DD_lf.png';
import ddw0 from '../asset/img/DD_w0.png';
import ddw1 from '../asset/img/DD_w1.png';
import ddw2 from '../asset/img/DD_w2.png';
import imgchgh from '../asset/img/CHGH_m0.png';
import chghia from '../asset/img/CHGH_IA.png';
import imgTW from '../asset/img/TW_m0.png';
import twcv from '../asset/videos/TW_creating.MP4';
import twci from '../asset/img/TW_c0.jpg';
import imgsf from '../asset/img/SF_m0.png';
import imgimslg from '../asset/img/IMSLP_m0.png';
import imslpcasestudy from '../asset/IMSLP_CaseStudy.pdf';
import imgdepartment from '../asset/img/CHGH_thumbnail.jpg';
import imgflikshop from '../asset/img/Flikshop_m.jpg';
import imgcancerqa from '../asset/img/CancerQA_thumbnaildetailpage.png';
import flikshop_d0 from '../asset/img/Flikshop_d3.png';
import flikshop_d1 from '../asset/img/Flikshop_d4.png';
import flikshop_d2 from '../asset/img/Flikshop_d5.png';
import flikshop_d3 from '../asset/img/Flikshop_d6.png';
import flikshop_d4 from '../asset/img/Flikshop_d7.png';
import flikshop_d5 from '../asset/img/Flikshop_d8.png';
import cancer_d0 from '../asset/img/CancerQA_designfeature1.png';
import cancer_d1 from '../asset/img/CancerQA_designfeature2.png';
import cancer_d2 from '../asset/img/CancerQA_designfeature3.png';
import cancer_d3 from '../asset/img/CancerQA_designfeature4.png';
import videofront from "../asset/videos/CHDMS_D.mp4";
import videolms1 from '../asset/videos/LMS1.mp4';
import videolms2 from '../asset/videos/LMS2.mp4';
import videolms3 from '../asset/videos/LMS3.mp4';
import videolms4 from '../asset/videos/LMS4.mp4';
import LMSAP from '../asset/img/LMSAP_thumbnail.jpg';


const designFeaturesFS = [
    {
        title: "Simplified Onboarding with Templates and Examples",
        content: `Users can leverage customizable templates and pre-filled example content to simplify the initial setup process. 
                  This guided approach reduces user anxiety and promotes early engagement.`,
        media: [videolms1],
        // insight: "Boost engagement and reduce user anxiety by guiding them through the initial steps effortlessly."
    },
    {
        title: "Minimizing Cognitive Load through Simplified Forms",
        content: `Recognizing that extensive text can present challenges, forms are designed with a focus on simplicity, 
                  minimizing text and maximizing clarity to facilitate focused completion`,
        media: [videolms2],
        // insight: "Reduce user stress."
    },
    {
        title: "AI-Powered Resume Builder and Skill Recommendation Engine",
        content: `This feature provides users with a personalized resume building experience. By analyzing free-flowing text and course interests, 
                  the AI engine suggests relevant skills, empowering users to create impactful resumes.`,
        media: [videolms3],
    },
    {
        title: "AI Interview Coach",
        content: `Dual-tone communication coaching for individuals rejoining society, offering both professional and authentic interview practice modes to build confidence and support successful workplace reintegration.`,
        media: [videolms4],
    }
];

const designFeaturesCancerQA = [
    {
        title: "Two-way, Iterative Communication",
        content: `Medical records staff can submit questions to doctors, 
                  with responses subject to further clarification or requests for additional information. 
                  The left panel allows staff to create, review, and manage their submitted question forms.`,
        media: [cancer_d1],
    },
    {
        title: "Multi-Question Forms",
        content: `Forms can be designed with multiple related query boxes to streamline the inquiry process. 
                  Each query box includes distinct fields for specifying a category, posing a question, and providing an answer. 
                  The answer field is fully editable, accommodating both single and multiple-choice response formats.`,
        media: [cancer_d0],
    },
    {
        title: "Customizable Dictionaries",
        content: `Both medical records staff and doctors can create and manage their own terminology lists, facilitating clear and accurate communication. 
                  Integrated search functionality ensures quick and easy access to these custom terms.`,
        media: [cancer_d2, cancer_d3],
    }
];

export const contents = {
    RedFlagsOut: {
        "url": "RedFlagsOut",
        "img": imgrfo,
        "title": "Red Flags Out",
        "subtitle": "A dating app focusing on Red Flags",
        "overview": "Red Flags Out is your secret weapon for decoding dating dynamics. Our platform equips you with a radar for red flags, from subtle emotional manipulation to unhealthy attachment patterns. Learn to recognize warning signs before they escalate, set healthy boundaries with confidence, and prioritize your well-being in every interaction. Navigate the dating world with empowered intuition and cultivate meaningful connections worthy of your time and heart.",
        "duration": "9 Weeks<br/>9 March - 11 May 2023",
        "problemstatement": "In the realm of online dating, there is an urgent need to address the issue of <span className='text-c-redflagsout px-1 fw-bold'>unnoticed red flags</span>, which can lead to <span className='text-c-redflagsout px-1 fw-bold'>unhealthy relationships</span> and <span className='text-c-redflagsout px-1 fw-bold'>dating failures</span>. Existing dating platforms often lack effective mechanisms for detecting and addressing these red flags, leaving users vulnerable and their time wasted. Consequently, there is a critical demand for a dating app that <span className='text-c-redflagsout px-1 fw-bold'>prioritizes the identification of red flags.</span>",
        "requirements": "<h4>Unique Selling Point</h4>" +
            "<p>Red Flags Out prioritizes your safety, revolutionizing connections by proactively identifying red flags. Using advanced algorithms, we filter out profiles with concerns before you see them, ensuring peace of mind. With a unique focus on safety, we empower informed decisions, redefine dating, and foster secure environments for genuine connections.</p>" +
            "<h4 className='mt-3'>Business Goals</h4><ul><li>User acquisition: Attract users seeking an efficient, safe, and responsible dating experience.</li><li>User retention: Keep existing users through abundant potential matches, red flag identification tools, and safety tips.</li><li>Subscription: Offer a premium version with features like priority matching, ad-free experience, and personalized advice from experts.</li><li>Brand reputation: Establish a robust reputation as a trusted and responsible dating platform prioritizing user safety and well-being.</li><li>Market share: Target a significant percentage of the rapidly growing dating app market.</li><li>Partnership: Collaborate with relationship counseling services and safety organizations to enhance value.</li></ul>" +
            "<h4 className='mt-3'>Target Users</h4>Individuals who are looking for a safe, efficient, and responsible way to connect with potential partners. People aged between 21 - 35 who had some previous relationship experience and know exactly what to avoid in the future." +
            "<h4 className='mt-3'>User Goals</h4><ul><li>Early red flag detection in matching</li><li>Personalized match recommendations.</li><li>Learn about healthy relationships, warning signs of abuse, and stay safe while dating.</li><li>Find meaningful and positive relationships.</li></ul>" +
            "<h4 className='mt-3'>Usability Objectives</h4><ul><li>User Acquisition Rate: Aim to reach 5,000 new users within the first three months of app launch.</li><li>User Retention: Strive to achieve a 50% user retention rate within the first six months of users joining the app.</li><li>Customer Satisfaction: Target a minimum rating of 3.5 out of 5 in the customer feedback survey, encompassing ratings and reviews.</li></ul>" +
            "<h4 className='mt-3'>User Scenarios</h4><ul><li>John has had many bad relationships and is tired of wasting his time on partners with red flags. She signs up for the red flag-focused dating app hoping to find someone who shares his values and priorities.</li><li>Mandy is a busy professional who doesn't have time to waste on bad dates. She uses the red flag-focused dating app to quickly screen potential partners and weed out anyone with obvious warning signs.</li><li>Jamie is a survivor of domestic abuse and is understandably cautious about getting involved with anyone who might exhibit abusive behavior. She feels more secure using a dating app that focuses on identifying red flags and potential warning signs.</li></ul>",
        "IA": rfo_ia,
        "lowfidelity": [{ img: rfo_lf0, txt: "Identify your red flags with guidance" }, { img: rfo_lf1, txt: "Define your red flags" }],
        // {
        //     "txt": ["Identify your red flags with guidance", "Define your red flags"],
        //     "img": [rfo_lf0, rfo_lf1]

        // },
        "components": {
            "txt": "I carefully selected a peach red color as the main color for my project with the intention of creating a warm, vibrant, and inviting atmosphere for users. To add a touch of energy and excitement, I also included some yellow in the color palette.",
            "img": rfl_cn
        },
        "highfidelity": [
            { title: "Red Flags Home", txt: "Embark on your journey of understanding red flags in relationships and discover your own personal warning signs right here.", img: rfl_hf0 },
            { title: "My Red Flags", txt: "Add and sort your personal Red Flags.", img: rfl_hf1 },
            { title: "My Red Flags - Add", txt: "Add Common Red Flags from default list or add personalized Red Flag.", img: rfl_hf2 },
            { title: "Common Red Flags", txt: "Filter by category and add the common Red Flags to your personal list.", img: rfl_hf3 },
            { title: "Scenario", txt: "Go through the scenario and select your answer to continue.", img: rfl_hf4 },
            { title: "Match", txt: "Like the prompts and get ready to match.", img: rfl_hf5 }
        ],
        "reflection": "<span className='text-c-redflagsout fw-bold'>Ensure clarity in  text usage</span> : Be concise yet clear in  UI text. Poor wording can lead to misunderstandings or a diminished user experience. Strive for straightforward and easily comprehensible language to enhance user understanding and provide a seamless experience.<br><br><span className='text-c-redflagsout fw-bold'>Enhance user flow with shortcuts</span> : Incorporate skip functions to improve the experience for returning users."
    },
    Deepdive: {
        "url": "Deepdive",
        "img": imgdd,
        "title": "Deepdive",
        "subtitle": "A learning and tracking app for freedivers",
        "overview": "DeepDive empowers aspiring freedivers to unlock their underwater potential. Through interactive training programs and a user-friendly dive log, DeepDive becomes your all-in-one companion, guiding you on your journey to deeper and longer dives.",
        "duration": "4 Weeks<br/>9 February - 9 March 2023",
        "teammembers": "Zoe Lo<br>Mital Kamani",
        "problemstatement": "Diving is a thrilling and widely enjoyed sport, but it also poses risks when not executed with adequate training and safety measures. Although there are various resources available to help divers learn and keep track of their progress, such as instructor-led training, diving logs, and certification courses, there is a demand for a comprehensive mobile application that can assist divers in tracking their progress, learning new skills, and maintaining their safety.",
        "requirements": "<h4>Unique Selling Point</h4>" +
            "This app is one of its kind to offer lessons on freediving. It also allows divers to track their journey all in one place. It would be refreshingly cool and easy to use. " +
            "<h4 className='mt-3'>Business Goals</h4><ul><li>Attract new freedivers and retain existing ones</li><li>Understanding freedivers’ patterns and performances through Data collection and analysis</li><li>Allowing learners to subscribe to a premium version that provides personalized learning and tracking</li><li>Motivating game mechanics</li><li>Advertising and Other Revenue</li></ul>" +
            "<h4 className='mt-3'>Target Users</h4>Freedivers aged between 16 to 35." +
            "<h4 className='mt-3'>User Goals</h4><ul><li>Learn more about the freediving sport.</li><li>Improve their skills and techniques.</li><li>Track their training progress.</li><li>Gain safety tips and follow the guidelines.</li></ul>",
        "personas": "",
        "storyboards": ddstoryboards,
        "IA": ddia,
        "persona": [ddp0, ddp1, ddp2],
        "lowfidelity": [{ img: ddlf, txt: "" }],
        "wireframe": [{ img: ddw0, txt: "Logging a new dive" }, { img: ddw1, txt: "Read the summary and overview of your tracking data" }, { img: ddw2, txt: "Starting a lesson" }],

    },
    CHGH: {
        "url": "CHGH",
        "img": imgchgh,
        "title": "Cheng Hsin General Hospital",
        "subtitle": "Responsive Web Design",
        "overview": "Cheng Hsin General Hospital is a modern general hospital located in Taipei, and it is famous for cardiology. The goal of this project was to build a responsive website featuring the new international medical services and provide more convenient online services for the general public.&nbsp;&nbsp;<a href='https://www.chgh.org.tw/Index.aspx' target='blank'>Go to CHGH</a>",
        "duration": "Jun 2019 - Oct 2020",
        "role": `UX Designer, Font-end Developer
            <ul><li><span className='text-c-chgh fw-bold'>Integrated the needs of 80+ departments.</span></li>
            <li><span className='text-c-chgh fw-bold'>Executed from design to web development.</span></li>
            <li><span className='text-c-chgh fw-bold'>Made it easier to love</span>: streamlined experience based on user feedback.</li></ul>`,
        "problemstatement": "We knew our patients deserved better. A decade-old website with static content, outsourced updates, and no multilingual support couldn't handle our hospital's dynamic growth, especially the exciting launch of the International Medical Center. The whole new version tackled these challenges head-on, building a flexible, multilingual platform that empowers departments, connects with diverse audiences, and drives patient satisfaction.",
        "development": "Our project involved constructing four websites within a compressed time frame. Leveraging .NET, I spearheaded the front-end development with HTML, CSS, and JavaScript, collaborating closely with a talented back-end team. To maximize efficiency, we implemented an agile approach, <span className='text-c-chgh px-1 fw-bold'>concurrently developing and testing</span>. The dynamic nature of the project required <span className='text-c-chgh px-1 fw-bold'>adaptability</span>. In the final stretch, I <span className='text-c-chgh px-1 fw-bold'>independently finalized and published the websites</span>, <span className='text-c-chgh px-1 fw-bold'>incorporating valuable client feedback</span> to fine-tune functionality and ensure a successful launch.",
        "IA": chghia
    },
    DepartmentCMS: {
        "url": "DepartmentCMS",
        "img": imgdepartment,
        "title": "Custom Healthcare CMS Platform",
        "subtitle": "Responsive Web Template Design",
        "overview": "<p>This case study examines the transformation of Cheng Hsin General Hospital's digital presence through the development of an content management system. As the sole UX designer in the IT department, I led the creation of a three-tiered platform: a public-facing website, an internal management system, and a multilingual international portal. The project addressed the complex challenge of balancing individual departmental customization needs while maintaining a consistent brand identity across all platforms. Through user research, iterative design, and cross-departmental collaboration, I successfully implemented a solution that empowered staff to manage their content while ensuring a cohesive user experience. This study details the systematic approach, technical solutions, and key learnings from managing a large-scale healthcare digital transformation project, informed by my HCI professional training.</p>",
        "duration": "<p>11 months ( Dec 2019 - Oct 2020 )</p>",
        "role": `<div className="pb-2">UX Designer, Font-end Developer</div>
            <ul><li>Integrated the needs of 80+ divisions</li>
            <li>Executed from design to web development</li>
            </ul>`,
        "problemstatement":
            `<p><strong>After a decade of using its original website infrastructure, the hospital needed a comprehensive website renewal</strong> to address three interconnected challenges that were impeding its ability to serve patients effectively and maintain its reputation as a leading healthcare institution:</p>
            <h2>1. Outdated and Fragmented Digital Infrastructure</h2>
            <div className="mb-1">The hospital's decade-old website had evolved into a patchwork of solutions, with individual departments creating their own web presence through various means. This fragmentation led to:</div>
            <ul><li>Multiple outsourced websites operating independently of the main hospital website</li>
            <li>Inconsistent update cycles and maintenance schedules across different site versions</li>
            <li>Content that had remained static since the original website launch</li>
            <li>No standardized content management process for the aging infrastructure</li></ul>
            <h2>2. Brand and Experience Inconsistency</h2>
            <div className="mb-1">The 10-year-old website architecture and subsequent fragmentation directly impacted the hospital's brand presence and user experience:</div>
            <ul><li>Lack of unified visual identity across different department websites</li>
            <li>Inconsistent quality of information presentation</li>
            <li>Variable user experiences depending on which department's site was accessed</li>
            <li>Diminished overall brand recognition and trust</li></ul>
            <h2>3. Limited Digital Growth Capabilities</h2>
            <div className="mb-1">The existing decade-old infrastructure was unable to support the hospital's evolution:</div>
            <ul><li>Static content that required outsourced updates</li>
            <li>No multilingual support for international patients</li>
            <li>Inability to showcase new services effectively</li>
            <li>Limited flexibility to adapt to the hospital's growing needs, particularly with the launch of the International Medical Center</li></ul>
            <div class="text-center my-5">so ......</div>
            <div class="text-center font-display2 text-c-chgh pb-4">How might we transition from a fragmented web presence to a cohesive digital ecosystem that effectively represents the entire hospital?</div>
            `,
        "process1": " ",
        "process2": " ",
        "process3": " ",
        "process4": " ",
        "success": "<h2>Front-End Key Design Consideration &  DEMO</h2>" +
            "<ul><li><strong>User-Selectable Menu</strong>: Let users choose which features they want on their website, like events, research papers, contact info, and more.</li>" +
            "<li><strong>User-Easy Department Switching</strong>: A shortcut button lets you quickly switch between departments.</li>" +
            "<li><strong>Distinct Department Menu</strong>: The main hospital website uses a top bar menu. To maintain a consistent brand feel while offering easier navigation, I designed a sidebar menu for this department's website.</li></ul>",
        "chghbusinessoutcome": `The launch of new website drove significant business impact across multiple dimensions. <strong>International patient volume increased by 24%</strong>. 
        The new system's agility enabled immediate implementation of government-mandated policy changes, reducing response time <strong>from over a week to just 5 minutes</strong> for critical updates. 
        This enhanced operational efficiency was particularly valuable during rapidly changing pandemic protocols. 
        Additionally, the improved online presence contributed to increased outpatient numbers, with notable growth in previously lesser-known divisions. 
        The website effectively served as a digital transformation tool, improving both healthcare accessibility and operational efficiency.`,
        "change": "<h2>Early User Involvement</h2>" +
            "<ul><li><strong>Get stakeholder buy-in early</strong>: Schedule meetings with key stakeholders, including the medical director, at the beginning of the project. This ensures everyone is aligned with the goals and avoids surprises later.</li>" +
            "<li><strong>Conduct user interviews and usability testing throughout the process</strong>: Gather feedback from a variety of users (patients, staff, etc.) early and often. This helps identify usability issues early and ensures the final design meets user needs.</li>" +
            "</ul>" +
            "<h2>Improved Communication and Documentation</h2>" +
            "<ul><li><strong>Clearly define user roles and permissions</strong>: Document the different user roles (patients, doctors, etc.) and what actions each role can perform on the website. This ensures a smooth user experience for everyone.</li>" +
            "<li><strong>Create a style guide</strong>: Develop a style guide that outlines the website's visual identity, including fonts, colors, and layout. This ensures consistency across all departments.</li></ul>" +
            "<h2>Testing and Iteration</h2>" +
            "<ul><li><strong>Conduct usability testing before development</strong>: Before coding begins, test your prototypes with real users to identify any usability problems. This can save time and resources in the long run.</li>" +
            "</ul>"
    },
    TheWindow: {
        "url": "TheWindow",
        "img": imgTW,
        "title": "The Window",
        "subtitle": "Installation Art",
        "overview": "In the daytime, 'The Window' is no different from other windows. Serving as an outlet for our visions, we can see through it clearly. However, when night falls, the lights come on, and it loses its transparent qualities. 'The Window' melds the city lights into a glossy surface, concealing the unseen void behind it.<br><br>'The Window' is an installation artwork that radiates in the nighttime. We utilized Arduino to control the PWM signal.",
        "duration": "Mar 2017 - Jun 2017",
        "role": "<ul><li>Led the team.</li><li>Solved communication problems within the team</li><li>Coded the interaction for the lights.</li>",
        "creatingprocess": {
            "txt": "To make the three-meter-tall installation stand in the wind, we sought advice from an iron factory professional. To make it stand in the rain, we applied waterproof measures. We laser-cut small dots on acrylic to make the entire area shine, and we used Arduino to control the light. Sitting in front of The Window, I solely defined the lighting styles and wrote the code.",
            "img": [{ img: twci, txt: "Renovate & Maintain" }]
        },
        "youtube": "J10e9a6VZ8Q",
        "achievement": "<ul><li>1st KuanDu Light Art Festival</li><li>2017 Nuit Blanche Taipei</li><li>Tsing Hua Effects 2018 – IoT Technology and Art Festival</li>"
    },
    SwimmingFishes: {
        "url": "SwimmingFishes",
        "img": imgsf,
        "title": "SwimmingFishes",
        "subtitle": "Maya 3D Animation",
        "overview": "<p>The 3D animation created with Maya was designed for the two LED display columns in my apartment building. I transformed the static interior design into dynamic images.</p>",
        "duration": "Jan 2019",
        "youtube": "WVzFDd_CXkM"
    },
    IMSLPRedesigning: {
        "url": "IMSLPRedesigning",
        "img": imgimslg,
        "title": "IMSLP Redesigning",
        "subtitle": "Visual Design",
        "overview": "Imagine delving into a treasure trove of classical music scores, a vast library where concertos whisper secrets and sonatas sing their stories. This is IMSLP, a haven for music lovers, scholars, and performers alike. Its shelves, however, are dusty and cluttered, the gems within often hidden beneath layers of outdated design and cumbersome navigation.<br><br>As a pianist, fingers dancing across ivory keys, I've navigated these labyrinthine shelves countless times, unearthing forgotten scores and rediscovering familiar melodies. Yet, the journey is often arduous, the interface clunky, the visual aesthetic uninspiring. It's time to reimagine IMSLP, to transform it into a digital concert hall where every score shines, inviting exploration and sparking joy.<br><br><a href='" + imslpcasestudy + "' target='blank'>Go to the full Case Study</a>",
        "duration": "1 month ( April 2023 - May 2023 )",
        /* "colortheme": "The color palette echoes the soul of classical music itself. Shades of ivory and charcoal, the timeless hues of a music sheet, form the foundation, exuding elegance and tradition. A whisper of spring green dances across the score, injecting vibrancy and guiding the eye like a musical phrase in motion. Deep sapphire accents then emerge, drawing attention to key navigational elements like a conductor's baton, ensuring a seamlessly intuitive experience. This harmonious blend of classicism and freshness invites immersion, transforming IMSLP into a vibrant tapestry of sound and sight." */
    },

    FlikshopLMS: {
        "url": "FlikshopLMS",
        "img": imgflikshop,
        "title": "Flikshop LMS: AI Career Center",
        "subtitle": "Unlocking Potential: A Learning Platform for Incarcerated Individuals",
        "overview": `<p>Flikshop, a mission-driven company, empowers incarcerated individuals through technology-driven education. Building on the success of their in-person Flikshop School of Business, they developed a tablet-based Learning Management System (LMS) designed to break down educational barriers within the correctional system. This case study explores the LMS's AI Career Center, a key component in fostering skill development and career preparation.</p>`,
        "duration": "<p>3 months ( Sep 2023 - Dec 2023 )</p>",
        // "teammembers": "<div className='pb-2'><div className='d-inline pe-4'>Chao-Min Wu</div><div className='d-inline pe-4'>Shu-Ping Chang</div><span className='d-inline pe-4'>Xin Chen</span><span className='d-inline pe-4'>Ziyi Yuan</span><strong className='d-inline pe-4 text-c-purple'>Zoe Lo</strong></div>",
        "role": `UX Designer & Meeting Coordinator ( Team of 5 )`,
        // "role": "<div className='py-2 d-md-flex'><h2 className='me-3 my-auto mb-2'>Meeting Coordinator</h2><div class='d-flex'><div className='bg-purple px-2 py-1 me-3'>Organization</div><div className='bg-purple px-2 py-1 me-3'>Time Management</div></div></div>" +
        //     "<ul><li>Scheduled meetings at mutually agreeable times.</li>" +
        //     "<li>Sent invitations and reminders to participants.</li>" +
        //     "<li>Ensured meetings run smoothly and on schedule.</li>" +
        //     "</ul>" +
        //     "<div className='py-2 d-md-flex'><h2 className='me-3 my-auto mb-2'>Client Meeting Lead</h2><div className='bg-purple px-2 py-1 me-3 d-inline-block'>Communication</div><div className='bg-purple px-2 py-1 me-3 d-inline-block mb-2'>Presentation</div><div className='bg-purple px-2 py-1 me-3 d-inline-block'>Meeting Facilitation</div></div>" +
        //     "<ul><li>Managed communication with Flikshop via Slack and emails.</li>" +
        //     "<li>Lead client meetings with Flikshop, ensuring clear and concise presentations of deliverables.</li>" +
        //     "<li>Facilitated productive discussions and addressed client questions or concerns.</li>" +
        //     "</ul>",
        "problemstatement":
            `<div className="d-flex">
                              <h2 className="me-2">1.</h2>
                             <div>
                              <h2>Lack of Personalized Career Guidance</h2>
                              <div className="mb-3">
                                    Current LMS solutions offer generic career resources, failing to provide personalized guidance based on individual skills, interests, and goals, hindering effective career planning.
                              </div>
                             </div>
                            </div>
           <div className="d-flex">
                              <h2 className="me-2">2.</h2>
                             <div>
                              <h2>Difficulty Tracking Progress and Measuring Outcomes</h2>
                              <div className="mb-3">
                                   The lack of robust data collection and analysis hinders the ability to effectively track individual user progress in career development and measure the overall effectiveness of existing career services, making it difficult to demonstrate program impact and secure stakeholder buy-in.
                              </div>
                             </div> 
                            </div>
            <div className="text-center my-5">then ......</div>
            <div className="text-center font-display2 text-P-purple pb-4">How might we deliver personalized career guidance and collect the necessary data to demonstrate its impact on user outcomes and program effectiveness within the Flikshop LMS?</div>`,
        // "goal": `<p>Design an <strong>AI-powered feature</strong> within the LMS that personalizes the learning experience for incarcerated learners, maximizing their engagement and knowledge retention.</p>
        // <div class="text-center my-5">then ......</div>
        // <div class="font-display2 text-center text-P-purple pb-4">How might we leverage AI to provide personalized learning pathways that maximize engagement and knowledge retention for incarcerated learners?</div>`,
        "addon": "",
        "designfeatures": designFeaturesFS,
        "researchFS": " ",
        "designprocessFS": " ",
        "reflection": `<p>Our Sprint wrapped up with positive momentum! Teamwork was smooth, with clear communication with the client and a collaborative atmosphere. The team effectively utilized the Sprint methodology, and insightful interviews with AI experts and scholars complemented the four completed user testing sessions.</p>
                        <p>While some challenges emerged, we found effective solutions. One concern was <strong>potential user limitations in tech access</strong>. Since our target audience may lack laptops for virtual testing, we explored <strong>in-person testing</strong>, which yielded positive results.
                        Another initial hurdle involved <strong>participants occasionally missing scheduled meetings</strong>. To address this, we implemented <strong>reminder emails sent a day and an hour before each session</strong>. This proactive approach successfully eliminated further no-shows.</p>
                        <p>The initial meeting with Flikshop CEO, Marcus, was an eye-opener. His fast-paced communication style highlighted the importance of meticulous agenda planning. From that point forward, I prioritized <strong>including details like transcript requests and recording permissions to ensure a smooth and productive meeting flow</strong>. When I was in the role of a meeting coordinator, I realized the importance of tailoring communication strategies to individual preferences. I learned to adapt my approach to different communication styles and preferred tools to maximize responsiveness and engagement.</p>`,
        "creatingprocess": ""

    },
    LMSAdminPortal: {
        "url": "LMSAdminPortal",
        "img": LMSAP,
        "title": "Flikshop LMS: Admin Panel",
        "subtitle": "Unlocking Potential: A Learning Platform for Incarcerated Individuals",
        "overview": `<p>Flikshop's tablet-based Learning Management System (LMS) requires a robust administrative interface to support its educational mission within correctional facilities. The Admin Portal serves as a critical tool for course management and impact assessment, enabling instructors and facility staff to create content, track learner progress, and measure program effectiveness.</p>`,
        "duration": "<p>3 months ( Jan 2024 - April 2024 )</p>",
        "role": `UX Designer,&nbsp;&nbsp;Client Meeting Lead & Meeting Coordinator ( Team of 5 )`,
        "problemstatement": `
                            <div className="d-flex">
                              <h2 className="me-2">1.</h2>
                             <div>
                              <h2>Structured Content Flexibility</h2>
                              <div className="mb-3">
                                    Navigating the design challenge of creating a course creation interface that balances structured learning modules with instructor creativity, determining the optimal content architecture between rigid module-based systems and open free-text editors.
                              </div>
                             </div> 
                            </div>
        <div className="d-flex">
                              <h2 className="me-2">2.</h2>
                             <div>
                              <h2>Multifaceted User Ecosystem</h2>
                              <div className="mb-3">
                                    In a sensitive correctional environment, the admin portal must navigate complex user roles and relationships, identifying primary users beyond course instructors—including facility administrators who verify content and the undefined Flikshop organizational role—while establishing clear use cases and permission frameworks.
                              </div>
                             </div> 
                            </div>
                            <div className="d-flex">
                              <h2 className="me-2">3.</h2>
                             <div>
                              <h2>Outcome-Driven Performance Metrics</h2>
                              <div className="mb-3">
                                    Beyond instructor-focused student engagement metrics, the admin portal must align diverse stakeholder perspectives—facility administrators, Flikshop leadership—by developing comprehensive data visualization that connects educational interventions to meaningful reentry success indicators.
                              </div>
                             </div> 
                            </div>
                            <div className="text-center my-5">so ......</div>
            <div className="text-center font-display2 text-P-orange pb-4">How might we design an admin portal that enables flexible course creation, ensures content verification, and provides meaningful insights into educational impact and reentry success?</div>
        `,
        "LMSAPdesign": " ",
        "LMSAPresearch": " ",
        "LMSAPdesignprocess": " ",
        "LMSAPreflection": " "

    },
    CancerQA: {
        "url": "CancerQA",
        "img": imgcancerqa,
        "title": "Cancer Patient Care Inquiry Hub",
        "subtitle": "Bridging the Communication Gap: Improving Cancer Care Coordination with a Centralized Inquiry Platform",
        "overview": "<p>This system was designed to facilitate efficient and effective communication between the medical records room, doctors, and nursing staff regarding cancer patients. It serves as a centralized platform for asking and answering questions about patient care</p>",
        "duration": "<p>5 months ( Jan 2020 - May 2020 )</p>",
        "role": "UX Designer, Font-end Developer",
        "problemstatement": `Healthcare providers in oncology departments often face challenges in efficient communication and information sharing between medical records staff, physicians, and nursing staff. The traditional  paper-based systems can be time-consuming, prone to errors, and inefficient. This can lead to delays in patient care, miscommunication, and suboptimal treatment outcomes.
        <div class="text-center my-5">so ......</div>
        <div class="font-display2 text-center text-P-blue pb-4">How might we create a seamless flow of knowledge that anticipates the needs of oncology care providers?</div>`,
        // "goal": `<p>The primary goal of this project was to develop a centralized platform that would streamline communication and information exchange between medical records staff, physicians, and nursing staff, specifically related to cancer patient care. The system aimed to improve efficiency, reduce errors, and ultimately enhance patient outcomes.</p>

        "addon": `<p className="pb-3">To ensure a quick and efficient launch of the platform, I decided to implement Bootstrap as our front-end framework and designed following the styles. This decision proved crucial for several reasons:</p>
                 <h2>01 : Responsive Design with Bootstrap Grid System</h2>
                 <p>The Bootstrap Grid System enabled seamless functionality across various devices, including 4:3 and 16:9 desktop formats, as well as tablets. 
                 This adaptability ensured that all healthcare provider users could access the platform easily, enhancing overall accessibility and usability.</p>
                 <h2>02 : Pre-built Components and Customization</h2>
                 <p>Bootstrap's extensive library of pre-designed components significantly accelerated the development process. While leveraging these components as a solid foundation, I customized them using Sass to align with the specific needs of healthcare professionals. 
                 This approach allowed for efficient development while ensuring a unique and tailored user interface.</p>
                 <h2>03 : Consistency Across Internal Systems</h2>
                 <p>By implementing Bootstrap across the hospital's internal systems, I ensured a cohesive user experience that was essential for busy healthcare providers. 
                 This unified visual language reduced the learning curve when switching between applications, improved efficiency through familiar interface patterns, and facilitated seamless integration with existing systems.</p>
        `,
        "designfeatures": designFeaturesCancerQA,
        "outcome": `<p>“ The platform really saves me from our previous paper-based communication methods. ” - doctor<br>
        “ What used to take hours or even days now happens in minutes, dramatically accelerating our response time. ” - medical records staff</p>`,
        "reflection": `<p>While the platform successfully addressed the immediate need for streamlined communication between medical records staff, doctors, and nurses, ultimately easing user stress and achieving a positive initial outcome, several key areas for improvement emerged in retrospect. 
        The limited scope of usability testing at the time restricted the depth of user feedback, hindering a more comprehensive evaluation of the platform's long-term usability. Furthermore, the platform's design focused solely on question-and-answer exchanges, neglecting other crucial forms of communication within a healthcare setting, 
        such as alerts, file sharing, and real-time notifications. This narrow focus limits the platform's scalability and necessitates the continued use of other tools, potentially fragmenting workflows and reducing overall efficiency. A more robust design process incorporating thorough user testing and a broader consideration of communication needs would have resulted in a more comprehensive and sustainable solution.</p>`
    }
}