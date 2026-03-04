import React, { useState } from "react";

export default function AdminPanel({ addProject }) {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProject = {
      title,
      desc
    };

    addProject(newProject);

    setTitle("");
    setDesc("");
  };

  return (
    <div className="admin-panel">

      <h2>Add New Project</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          placeholder="Project Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          required
        />

        <button type="submit">
          Add Project
        </button>

      </form>

    </div>
  );
}