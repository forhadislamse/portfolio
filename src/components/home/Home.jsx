

// import Data from './Data';
// import Social from './Social';

// const Home = () => {
//     return (
//         <section
//             id="home"
//             className="min-h-screen flex items-center bg-gradient-to-r from-slate-900 to-slate-800 text-white px-4"
//         >
//             <div className="max-w-6xl mx-auto flex flex-col gap-8 pt-20">
//                 <Data />
//                 <Social />
//             </div>
//         </section>
//     );
// };

// export default Home;

import Data from './Data';
import Social from './Social';


const Home = () => {
    return (
        <section
            id="home"
            className=" flex items-center justify-center  max-w-6xl mx-auto px-4"
        >
            <div className="max-w-6xl mx-auto flex flex-col items-center gap-6 pt-12 text-center">
                {/* className-- pt-20  */}
                {/* Profile Image */}
                <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full p-1 bg-gradient-to-r from-teal-500 via-cyan-700 to-teal-500 mx-auto">
                    <img
                        src="/profile.jpg"
                        alt="Profile"
                        className="w-full h-full object-cover rounded-full border-4 border-white"
                    />
                </div>
                <Social />
                <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
                    <Data /></div>

            </div>
        </section>
    );
};

export default Home;
