import Sidebar from "./components/Sidebar";
import Project from "./components/Project";
import { useState, useRef } from "react";

function App() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(-1);
  const [addProject, setAddProject] = useState(false);

  function handleAddProject(value) {
    setAddProject(!value);
  }

  function handleProjects({ title, description, dueDate, tasks }) {
    setProjects((prevProjects) => {
      const tempPrevProjects = [
        ...prevProjects,
        { title, description, dueDate, tasks },
      ];
      return tempPrevProjects;
    });
    handleAddProject(true);
  }

  function handleSelectedProject(index) {
    setSelectedProject(index);
  }

  function handelAddTask(newTask, selecetdProject) {
    setProjects((prevProjects) => {
      const previousProjects = [...prevProjects];
      const selectedProject = previousProjects.find(
        (project) => project.title === selecetdProject
      );
      const selectedProjectTasks = selectedProject.tasks;
      selectedProjectTasks.push(newTask);
      return previousProjects;
    });
  }

  function handleDeleteTask(selectedTask, selecetdProject) {
    setProjects((prevProjects) => {
      const previousProjects = [...prevProjects];
      const selectedProject = previousProjects.find(
        (project) => project.title === selecetdProject
      );
      const selectedProjectTasks = selectedProject.tasks;
      const updatedTasks = selectedProjectTasks.filter(
        (task) => task !== selectedTask
      );
      selectedProject.tasks = updatedTasks;
      return previousProjects;
    });
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        projects={projects}
        handleSelectedProject={handleSelectedProject}
        selectedProject={selectedProject}
        handleAddProject={handleAddProject}
      ></Sidebar>
      <Project
        project={selectedProject >= 0 ? projects[selectedProject] : null}
        setSelectedProject={setSelectedProject}
        projects={projects}
        setProjects={setProjects}
        addProject={addProject}
        handleAddProject={handleAddProject}
        handleProjects={handleProjects}
        onAdd={handelAddTask}
        onDelete={handleDeleteTask}
      ></Project>
    </main>
  );
}

export default App;
