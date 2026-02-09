import { FaExternalLinkAlt, FaGithub, FaPlay } from 'react-icons/fa';
import './allProjects.css';
import { useEffect } from 'react';

const AllProjects = ({ project }) => {
  const { image, name, details, tech, live_link, code_link } = project;
  const techList = tech.split(',').map(item => item.trim());

  const handleOpenModal = () => {
    const modal = document.getElementById(`modal_${name}`);
    if (modal) modal.showModal();
    // document.body.classList.add('modal-open');
  };

  const handleCloseModal = () => {
    const modal = document.getElementById(`modal_${name}`);
    if (modal) modal.close();
    // document.body.classList.remove('modal-open');
  };

  useEffect(() => {
    const modal = document.getElementById(`modal_${name}`);
    const handleModalClose = () => {
      // No scroll toggling needed
    };

    if (modal) {
      modal.addEventListener("close", handleModalClose);
    }

    return () => {
      if (modal) {
        modal.removeEventListener("close", handleModalClose);
      }
    };
  }, [name]);



  return (
    <>
      <div className="card glass mx-auto w-full max-w-sm bg-slate-800 shadow-lg">
        <div
          className="image-wrap"
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <img src={image} alt={name} />
        </div>

        <div
          className="card-body p-5"
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h2 className="card-title text-xl font-semibold mb-2">{name}</h2>
          <div className="flex flex-wrap gap-2 my-2">
            {techList.map((tech, idx) => (
              <span
                key={idx}
                className="badge badge-outline rounded-lg px-2 py-1 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4 justify-center mt-auto pt-4 w-full">
            <a
              className="inline-flex items-center bg-yellow-400 text-slate-900 px-5 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
              href={live_link}
              target="_blank"
              rel="noreferrer"
            >
              <FaPlay className='mr-2' /> Live
            </a>
            <a
              className=" inline-flex items-center border border-cyan-500 text-cyan-500 px-5 py-2 rounded-lg font-semibold hover:bg-cyan-500 hover:text-slate-900 transition"
              href={code_link}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className='mr-2' /> GitHub
            </a>
          </div>
          <div className='flex justify-center pt-4 w-full'>
            <a
              onClick={handleOpenModal}
              className="cursor-pointer inline-flex items-center border border-cyan-500 text-cyan-500 px-5 py-2 rounded-lg font-semibold hover:bg-cyan-500 hover:text-slate-900 transition "
            >
              <FaExternalLinkAlt className='mr-2' />Details
            </a>
          </div>

        </div>
      </div>


      <dialog
        id={`modal_${name}`}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box bg-slate-900 text-white relative">
          {/* Close Icon */}
          {/* Close Icon */}
          <button
            className="absolute right-3 top-3 text-xl text-white hover:text-red-400"
            onClick={handleCloseModal}
          >
            ✕
          </button>

          <h3 className="font-bold text-lg mb-2">{name}</h3>
          <p className="py-2">{details}</p>

          <div className="flex flex-wrap gap-2 my-2">
            {techList.map((tech, idx) => (
              <span
                key={idx}
                className="badge badge-accent badge-outline rounded-lg px-2 py-1 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>

        {/* Overlay click closes modal */}
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

    </>
  );
};

export default AllProjects;
