

const Info = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
            <div
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1000"
                className="bg-gradient-to-r from-teal-500 via-cyan-700 to-teal-500 rounded-lg p-6 shadow-lg"
            >
                <i className="bx bx-award text-4xl mb-2"></i>
                <h3 className="text-xl font-semibold mb-1">Learning Experience</h3>
                <p className="text-sm font-medium">01 year+</p>
            </div>

            <div
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1200"
                className="bg-gradient-to-r from-teal-500 via-cyan-700 to-teal-500 rounded-lg p-6 shadow-lg "
            >
                <i className="bx bx-briefcase-alt text-4xl mb-2"></i>
                <h3 className="text-xl font-semibold mb-1">Completed</h3>
                <p className="text-sm font-medium">15+ Projects</p>
            </div>

            {/* <div
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1400"
                className="bg-gradient-to-r from-cyan-600 to-teal-500 rounded-lg p-6 shadow-lg text-white"
            >
                <i className="bx bx-support text-4xl mb-2"></i>
                <h3 className="text-xl font-semibold mb-1">Support</h3>
                <p className="text-sm font-medium">Online 24/7</p>
            </div> */}
        </div>
    );
};

export default Info;
