import React from "react";
import projectsData from "../data/projects.json";

const Project = () => {
  return (
    <section className="mt-20">
      <h2 className="text-4xl font-bold my-6">Mes Projets</h2>
      <div className="max-w-83rem mx-auto max-w-prose mx-auto">
        {projectsData.map((project, index) => (
          <div key={project.id}>
            <div className="flex items-center">
              <img
                className="w-48 h-32 mr-4"
                src={project.image}
                alt={project.name}
              />
              <div>
                <h3 className="text-xl font-semibold mb-4">{project.name}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
            {/* Ligne de séparation entre les projets */}
            {index !== projectsData.length - 1 && (
              <hr className="my-4 w-full border-gray-300" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;

{
  /* <section className="flex justify-center wrapper ">
      <div className="">
        <h2 className="text-3xl font-bold mb-6">Mes Projets</h2>
        <div className="grid grid-cols-1 gap-6 content">
          {projectsData.map((project, index) => (
            <div className="content" key={project.id}>
              <div className="flex items-center content">
                <img
                  className="w-48 h-32 mr-4"
                  src={project.image}
                  alt={project.name}
                />
                <div>
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
              {/* Ligne de séparation entre les projets */
}
//           {index !== projectsData.length - 1 && (
//             <hr className="my-4 w-full border-gray-300" />
//           )}
//         </div>
//       ))}
//     </div>
//   </div>
// </section> */}
