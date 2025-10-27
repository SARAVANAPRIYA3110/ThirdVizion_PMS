
import React, { useState } from "react";

const ProjectForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    projectName: "",
    projectDuration: "",
    description: "",
  });

  
  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Project submitted!");
    setFormData({ projectName: "", projectDuration: "", description: "" });
    setShowForm(false);
  };

  return (
    <div className="p-6">
      <button
        onClick={handleToggleForm}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        {showForm ? "Hide Form" : "Add Project"}
      </button>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="mt-4 p-4 border rounded shadow-md bg-white max-w-md"
        >
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Project Name:</label>
            <input
              type="text"
              name="projectName"
              value={formData.projectName}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-semibold">Project Duration:</label>
            <input
              type="text"
              name="projectDuration"
              value={formData.projectDuration}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-semibold">Description:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              rows="4"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default ProjectForm;
