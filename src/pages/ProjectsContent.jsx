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
import imgdepartment from '../asset/img/CHGH_D_m0.png';
import imgflikshop from '../asset/img/Flikshop_m0.png';

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
        "role": "<ul><li><span className='text-c-chgh fw-bold'>Integrated the needs of 80+ departments.</span></li>" +
                "<li><span className='text-c-chgh fw-bold'>Executed from design to web development.</span></li>"+
                "<li><span className='text-c-chgh fw-bold'>Made it easier to love</span>: streamlined experience based on user feedback.</li></ul>",
        "problemstatement": "We knew our patients deserved better. A decade-old website with static content, outsourced updates, and no multilingual support couldn't handle our hospital's dynamic growth, especially the exciting launch of the International Medical Center. The whole new version tackled these challenges head-on, building a flexible, multilingual platform that empowers departments, connects with diverse audiences, and drives patient satisfaction.",
        "development": "Our project involved constructing four websites within a compressed time frame. Leveraging .NET, I spearheaded the front-end development with HTML, CSS, and JavaScript, collaborating closely with a talented back-end team. To maximize efficiency, we implemented an agile approach, <span className='text-c-chgh px-1 fw-bold'>concurrently developing and testing</span>. The dynamic nature of the project required <span className='text-c-chgh px-1 fw-bold'>adaptability</span>. In the final stretch, I <span className='text-c-chgh px-1 fw-bold'>independently finalized and published the websites</span>, <span className='text-c-chgh px-1 fw-bold'>incorporating valuable client feedback</span> to fine-tune functionality and ensure a successful launch.",
        "IA": chghia
    },
    DepartmentCMS: {
        "url": "DepartmentCMS",
        "img": imgdepartment,
        "title": "Hospital Department CMS",
        "subtitle": "Responsive Web Template Design",
        "overview": "<p>This case study explores the process of redesigning the hospital's departmental websites using a content management system. As the sole designer in the IT department, I faced the challenge of balancing departmental customization needs with maintaining a consistent brand identity. This study details the implemented solutions and my reflections on the project, informed by my recent HCI professional training.</p>",
        "duration": "Dec 2019 - Oct 2020",
        "problemstatement": "<p>The hospital's existing web presence suffers from a lack of cohesion and clarity due to inconsistent website development practices across departments.<br/>" +
                            "<ul><li><b>Uncoordinated Development</b>: Departments have taken independent approaches to website development, leading to a mix of outsourced websites, outdated templates, and neglected content management.</li>" +
                            "<li><b>Inconsistent Branding</b>: This fragmented approach has resulted in a lack of consistent visual identity, hindering the hospital's overall brand recognition.</li>"+
                            "<li><b>Uneven Public Awareness</b>: Inconsistent departmental representation online creates an uneven experience for the public. Some departments are well-represented, while others are difficult to find or lack essential information.</p>",
       
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
        "overview": "The 3D animation created with Maya was designed for the two LED display columns in my apartment building. I transformed the static interior design into dynamic images.",
        "duration": "Jan 2019",
        "youtube": "WVzFDd_CXkM"
    },
    IMSLPRedesigning: {
        "url": "IMSLPRedesigning",
        "img": imgimslg,
        "title": "IMSLP Redesigning",
        "subtitle": "Visual Design",
        "overview": "Imagine delving into a treasure trove of classical music scores, a vast library where concertos whisper secrets and sonatas sing their stories. This is IMSLP, a haven for music lovers, scholars, and performers alike. Its shelves, however, are dusty and cluttered, the gems within often hidden beneath layers of outdated design and cumbersome navigation.<br><br>As a pianist, fingers dancing across ivory keys, I've navigated these labyrinthine shelves countless times, unearthing forgotten scores and rediscovering familiar melodies. Yet, the journey is often arduous, the interface clunky, the visual aesthetic uninspiring. It's time to reimagine IMSLP, to transform it into a digital concert hall where every score shines, inviting exploration and sparking joy.<br><br><a href='" + imslpcasestudy + "' target='blank'>Go to the full Case Study</a>",
        "duration": "April 2023 - May 2023",
        /* "colortheme": "The color palette echoes the soul of classical music itself. Shades of ivory and charcoal, the timeless hues of a music sheet, form the foundation, exuding elegance and tradition. A whisper of spring green dances across the score, injecting vibrancy and guiding the eye like a musical phrase in motion. Deep sapphire accents then emerge, drawing attention to key navigational elements like a conductor's baton, ensuring a seamlessly intuitive experience. This harmonious blend of classicism and freshness invites immersion, transforming IMSLP into a vibrant tapestry of sound and sight." */
    },

    FlikshopLMS: {
        "url": "FlikshopLMS",
        "img": imgflikshop,
        "title": "Flikshop LMS",
        "subtitle": "A learning management system empowering incarcerated individuals",
        "overview": "",
        "duration": "",
        
    }

}