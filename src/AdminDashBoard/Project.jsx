
// import React, { useState } from "react";

// const ProjectForm = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({
//     projectName: "",
//     projectDuration: "",
//     description: "",
//   });

  
//   const handleToggleForm = () => {
//     setShowForm(!showForm);
//   };

 
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

 
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data:", formData);
//     alert("Project submitted!");
//     setFormData({ projectName: "", projectDuration: "", description: "" });
//     setShowForm(false);
//   };

//   return (
//     <div className="p-6">
//       <button
//         onClick={handleToggleForm}
//         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
//       >
//         {showForm ? "Hide Form" : "Add Project"}
//       </button>

//       {showForm && (
//         <form
//           onSubmit={handleSubmit}
//           className="mt-4 p-4 border rounded shadow-md bg-white max-w-md"
//         >
//           <div className="mb-4">
//             <label className="block mb-1 font-semibold">Project Name:</label>
//             <input
//               type="text"
//               name="projectName"
//               value={formData.projectName}
//               onChange={handleChange}
//               className="w-full border px-3 py-2 rounded"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block mb-1 font-semibold">Project Duration:</label>
//             <input
//               type="text"
//               name="projectDuration"
//               value={formData.projectDuration}
//               onChange={handleChange}
//               className="w-full border px-3 py-2 rounded"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block mb-1 font-semibold">Description:</label>
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               className="w-full border px-3 py-2 rounded"
//               rows="4"
//             ></textarea>
//           </div>

//           <button
//             type="submit"
//             className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
//           >
//             Submit
//           </button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default ProjectForm;
import React, { useState } from "react";

const ProjectForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    projectName: "",
    projectDuration: "",
    description: "",
  });

  const [projects, setProjects] = useState([]);

  const handleToggleForm = () => setShowForm(!showForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProjects((prev) => [...prev, formData]);
    setFormData({ projectName: "", projectDuration: "", description: "" });
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-8">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Project Dashboard
      </h1>

      {/* Toggle Button */}
      <button
        onClick={handleToggleForm}
        className="mb-8 border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-100 transition"
      >
        {showForm ? "Close Form" : "Add Project"}
      </button>

      {/* Form Section */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white rounded-3xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100 space-y-5"
        >
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Project Name
            </label>
            <input
              type="text"
              name="projectName"
              value={formData.projectName}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Enter project name"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Project Duration
            </label>
            <input
              type="text"
              name="projectDuration"
              value={formData.projectDuration}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="e.g. 3 months"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Write a short description..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-800 text-white font-semibold py-2 rounded-md hover:bg-gray-700 transition"
          >
            Submit
          </button>
        </form>
      )}

      {/* Project Cards */}
      {projects.length > 0 && (
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-3xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_14px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col gap-2"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                {proj.projectName}
              </h2>
              <p className="text-sm text-gray-500">
                <span className="font-medium text-gray-700">Duration:</span>{" "}
                {proj.projectDuration}
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mt-1">
                {proj.description || "No description provided."}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectForm;
