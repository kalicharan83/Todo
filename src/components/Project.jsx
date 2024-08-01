import NewProject from "./NewProject";
import Tasks from "./Tasks";

export default function Project({
  project,
  projects,
  setSelectedProject,
  setProjects,
  addProject,
  handleAddProject,
  handleProjects,
  onAdd,
  onDelete,
}) {
  function handleDelete(title) {
    setProjects((prevProjects) => {
      const updatedProjects = prevProjects.filter(
        (project) => project.title !== title
      );
      return updatedProjects;
    });
    setSelectedProject(-1);
  }

  let content = "";
  if (addProject) {
    content = (
      <NewProject
        handleProjects={handleProjects}
        handleAddProject={handleAddProject}
      ></NewProject>
    );
  } else if (project === null) {
    content = (
      <>
        <div className="mt-24 text-center w-2/3">
          <img
            src="logo.png"
            alt="An empty task list"
            className="w-16 h-16 object-contain mx-auto"
          />
          <h2 className="text-xl font-bold text-stone-500 my-4">
            No Project Selected
          </h2>
          <p className="text-stone-400 mb-4">
            Select a project or get started with a new one
          </p>
          <p className="mt-8">
            <button
              className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
              onClick={() => handleAddProject(false)}
            >
              Create new project
            </button>
          </p>
        </div>
      </>
    );
  } else {
    content = (
      <>
        <div className="w-[35rem] mt-16">
          <header className="pb-4 mb-4 border-b-2 border-stone-300">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold text-stone-600 mb-2">
                {project.title}
              </h1>
              <button
                className="text-stone-600 hover:text-stone-950"
                onClick={() => handleDelete(project.title)}
              >
                Delete
              </button>
            </div>
            <p className="mb-4 text-stone-400">{project.dueDate}</p>
            <p className="text-stone-600 whitespace-pre-wrap">
              {project.description}
            </p>
          </header>
          <Tasks
            tasks={project.tasks}
            projectTitle={project.title}
            onAdd={onAdd}
            onDelete={onDelete}
          ></Tasks>
        </div>
      </>
    );
  }
  return <>{content}</>;
}
