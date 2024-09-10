import React from "react";
import projectsData from "../data/projects.json";

const Project = () => {
  return (
    <section className="px-4">
      {/* Ajout d'une marge à droite et à gauche */}
      <div className="mt-12 mb-12 border-b flex flex-col md:flex-row border-gray-800 wrapper justify-between pb-8">
        <h2 className="text-4xl font-bold mb-4 md:mb-0 md:mr-4">Mes Projets</h2>
        <h1>Test</h1>
        <p className="text-xl">Parcourez mes réalisations</p>
      </div>
      <div className="max-w-83rem max-w-prose mx-auto">
        {projectsData.map((project, index) => (
          <div className="mt-12" key={project.id}>
            <div className="flex flex-col md:flex-row items-center">
              <a
                href={project.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {project.image && ( // Vérifiez si l'image est définie
                  <div className="w-48 h-36 mb-4 md:w-60 md:h-44 md:mr-4 rounded-md drop-shadow-2xl overflow-hidden">
                    <img
                      className="object-cover rounded-md"
                      src={project.image}
                      alt={project.name}
                    />
                  </div>
                )}
              </a>
              <div>
                <a
                  href={project.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl font-semibold mb-4 hover:underline link-no-underline"
                >
                  {project.name}
                </a>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
            {/* Ligne de séparation entre les projets */}
            {index !== projectsData.length - 1 && (
              <div className="my-4">
                <hr className="w-full border-gray-300 mb-10 mt-10" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
