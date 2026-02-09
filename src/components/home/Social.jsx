// // import React from 'react';

// const Social = () => {
//     return (
//         <div className="home__social">
//             <a href="https://www.linkedin.com/in/forhad11/"
//                 className="home__social-icon"
//                 target="_blank">
//                 <i className="uil uil-linkedin"></i>
//             </a>
//             {/* <a href="https://www.facebook.com/r0ben"
//                 className="home__social-icon"
//                 target="_blank">
//                 <i className="uil uil-facebook"></i>
//             </a> */}
//             <a href="https://github.com/forhadislamse"
//                 className="home__social-icon"
//                 target="_blank">
//                 <i className="uil uil-github-alt"></i>
//             </a>
//         </div>
//     );
// };

// export default Social;
const Social = () => {
    return (
        <div className="flex gap-4 ">
            <a
                href="https://www.linkedin.com/in/forhad11/"
                className="text-2xl text-white hover:text-cyan-500 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
            >
                <i className="uil uil-linkedin"></i>
            </a>
            <a
                href="https://github.com/forhadislamse"
                className="text-2xl text-white hover:text-cyan-500 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
            >
                <i className="uil uil-github-alt"></i>
            </a>
            <a
                href="mailto:forhadislam.swe@gmail.com"
                className="text-2xl text-white hover:text-cyan-500 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
            >
                <i className="uil uil-envelope-alt"></i>
            </a>

        </div>
    );
};

export default Social;
