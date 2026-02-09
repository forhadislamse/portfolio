// import React from 'react';
// import ScrollToTop from "react-scroll-to-top";
// import { BiSolidPlane } from "react-icons/bi";

// const Footer = () => {
//     return (
//         <footer className="footer footer-center p-4 bg-color text-base-content">
//             <ScrollToTop smooth component={<p className="text-2xl text-red-500"><BiSolidPlane></BiSolidPlane></p>} />
//             <div>
//                 <p>Copyright © 2023 - All right reserved by Forhad</p>
//             </div>
//         </footer>
//     );
// };


// export default Footer;
import ScrollToTop from "react-scroll-to-top";
import { BiSolidPlane } from "react-icons/bi";

const Footer = () => {
    return (
        <footer className="footer footer-center p-4 z-50 bg-gradient-to-r from-teal-500 via-cyan-700 to-slate-800 bg-opacity-90 backdrop-blur-lg shadow-lg text-white " >
            {/* Scroll to Top Button */}
            <ScrollToTop
                smooth
                component={
                    <div className="text-3xl text-yellow-300 hover:text-yellow-400 transition">
                        <BiSolidPlane />
                    </div>
                }
                style={{
                    background: "transparent",
                    boxShadow: "none",
                }}
            />

            {/* Footer Content */}
            <div>
                <p className="text-lg font-medium">
                    © {new Date().getFullYear()} — All rights reserved by <span className="font-bold">Forhad</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
