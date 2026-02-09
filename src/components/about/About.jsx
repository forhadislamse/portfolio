// import './about.css';
// import Info from './Info';

// const About = () => {
//     // const googleDriveViewLink = 'https://drive.google.com/file/d/1ucu6yJb8sPre-XsltTZ0Fl3RENXgFmBr/view';
//     return (
//         <section id='about'>
//             <h2 >About Me</h2>
//             <span >My introduction</span>

//             <div >
//                 <div data-aos="fade-up"
//                     data-aos-easing="linear"
//                     data-aos-duration="3000">
//                     <Info />

//                     <div>
//                         <p className='mt-4 text-justify'>
//                             I am a self-taught Full-Stack Developer with a Bachelor’s degree in Computer Science & Engineering from East West University. I specialize in backend development using Node.js, Express.js, and MongoDB with Mongoose ODM, while also proficient in building dynamic, responsive frontend with React, TypeScript, and modern JavaScript (ES6+). I’m passionate about designing scalable and efficient web applications with robust backend architecture.
//                             To enhance my practical experience, I completed a project-based Web Development course from Programming Hero where I solidified my understanding of MERN Stack.
//                         </p>
//                         <br />
//                         <p className='text-justify'>
//                             My technical skill-set includes:

//                             <ul className="list-disc list-inside mt-2">
//                                 <li><strong>TypeScript</strong> – Scalable and type-safe development</li>
//                                 <li><strong>JavaScript (ES6+)</strong> – Writing clean, efficient, modern code</li>
//                                 <li><strong>Express.js & REST APIs</strong> – Backend logic and integration</li>
//                                 <li><strong>MongoDB with Mongoose ODM</strong> – Schema-based data modeling</li>
//                                 <li><strong>React</strong> – Reusable components and dynamic interfaces</li>
//                                 <li><strong>JWT</strong> – Secure, role-based access control</li>
//                                 <li><strong>Firebase</strong> – Authentication and hosting</li>
//                                 <li><strong>HTML5, CSS3, Tailwind CSS</strong> – Building responsive and accessible UIs</li>
//                                 <li><strong>Git & GitHub</strong> – Version control and collaborative workflows</li>
//                             </ul>
//                         </p>
//                         <br />
//                         <p className='text-justify'>
//                             I’m eager to grow as a Full-Stack Engineer, contribute to impactful products, and collaborate with experienced teams in fast-paced environments.
//                         </p>

//                     </div>

//                 </div>
//             </div>


//         </section >
//     );
// };

// export default About;

import Info from './Info';

const About = () => {
    return (
        <section id="about" className="max-w-6xl mx-auto px-4">
            {/* py-16 */}
            <h2 className="text-4xl font-semibold mb-8">About Me</h2>
            {/* <span className="text-sky-400 font-medium mb-8 block">My introduction</span> */}

            <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className="space-y-6 lg:text-justify  lg:hyphens-auto text-base sm:text-lg leading-relaxed">
                <Info />

                <p >
                    I am a self-taught Full-Stack Developer with a Bachelor’s degree in <span className='text-cyan-500' > Computer Science & Engineering from East West University</span> . I specialize in backend development using Node.js, Express.js, and MongoDB with Mongoose ODM, while also proficient in building dynamic, responsive frontend with React, TypeScript, and modern JavaScript (ES6+). I’m passionate about designing scalable and efficient web applications with robust backend architecture.
                    To enhance my practical experience, I completed a project-based Web Development course from Programming Hero where I solidified my understanding of MERN Stack.
                </p>

                <p className="text-cyan-500">
                    My technical skill-set includes:
                </p>

                <ul className="list-disc list-inside space-y-1 mb-6">
                    <li><strong>TypeScript</strong> – Scalable and type-safe development</li>
                    <li><strong>JavaScript (ES6+)</strong> – Writing clean, efficient, modern code</li>
                    <li><strong>Express.js & REST APIs</strong> – Backend logic and integration</li>
                    <li><strong>MongoDB with Mongoose ODM</strong> – Schema-based data modeling</li>
                    <li><strong>React</strong> – Reusable components and dynamic interfaces</li>
                    <li><strong>JWT</strong> – Secure, role-based access control</li>
                    <li><strong>Firebase</strong> – Authentication and hosting</li>
                    <li><strong>HTML5, CSS3, Tailwind CSS</strong> – Building responsive and accessible UIs</li>
                    <li><strong>Git & GitHub</strong> – Version control and collaborative workflows</li>
                </ul>

                <p>
                    I’m eager to grow as a Full-Stack Engineer, contribute to impactful products, and collaborate with experienced teams in fast-paced environments.
                </p>
            </div>
        </section>
    );
};

export default About;
