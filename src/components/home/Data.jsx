

import { FaArrowRight } from 'react-icons/fa';

const Data = () => {
    return (
        <div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-2">
                Hi, I’m Forhad
            </h1>
            <h3 className="text-xl sm:text-2xl text-cyan-500 font-semibold mb-4">
                Full Stack Developer
            </h3>
            <p className="max-w-xl text-base sm:text-lg leading-relaxed mb-6">
                I build responsive, fast, and accessible web apps using the latest technologies like ReactJS, NodeJS, ExpressJS and MongoDB.
            </p>
            <div className="flex gap-4 justify-center ">
                <a
                    href="https://drive.google.com/file/d/1ucu6yJb8sPre-XsltTZ0Fl3RENXgFmBr/view"
                    className="inline-flex items-center bg-yellow-400 text-slate-900 px-5 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Resume <FaArrowRight className="ml-2" />
                </a>

            </div>
        </div>
    );
};

export default Data;
