

import { useEffect, useState } from "react";
import AllProjects from "./AllProjects";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [viewAll, setViewAll] = useState(false);

  useEffect(() => {
    fetch("/project-data.json")
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 ">

      <h2 className="text-4xl font-semibold mb-8">Projects</h2>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {(viewAll ? projects : projects.slice(0, 4)).map(project => (
          <AllProjects key={project.id} project={project} />
        ))}
      </div>

      {!viewAll && (
        <div className="text-center mt-10">
          <button
            onClick={() => setViewAll(true)}
            className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded shadow hover:bg-yellow-500 transition-all duration-300"
          >
            View All
          </button>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
