export default function Sidebar({
  projects,
  handleSelectedProject,
  selectedProject,
  handleAddProject,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <button
          className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
          onClick={() => handleAddProject(false)}
        >
          +Add Project
        </button>
      </div>
      {projects.length > 0 && (
        <ul className="mt-8">
          {projects.map((project, index) => (
            <li className="flex justify-between my-4" key={project.title}>
              {index === selectedProject ? (
                <button
                  className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-200 bg-stone-800"
                  onClick={() => handleSelectedProject(index)}
                >
                  {project.title}
                </button>
              ) : (
                <button
                  className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"
                  onClick={() => handleSelectedProject(index)}
                >
                  {project.title}
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}
