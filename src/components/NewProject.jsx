import Input from "./Input";
import { useRef } from "react";

export default function NewProject({ handleProjects, handleAddProject }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function addProjects() {
    const project = {
      title: title.current.providedInput(),
      description: description.current.providedInput(),
      dueDate: dueDate.current.providedInput(),
      tasks: [],
    };
    handleProjects(project);
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button
            className="text-stone-800 hover:text-stone-950"
            onClick={() => handleAddProject(true)}
          >
            Cancel
          </button>
        </li>
        <li>
          <button
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            onClick={addProjects}
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input label="Title" ref={title} type="text" />
        <Input label="Description" ref={description} textarea />
        <Input label="Due Date" ref={dueDate} type="date" />
      </div>
    </div>
  );
}
