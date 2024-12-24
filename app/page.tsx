"use client";
import React, { useState } from "react";
import HomePage from "./page/homePage"
import ProjectsPage from "./page/ProjectsPage"
import SkillsPage from "./page/SkillsPage"
import ContactPage from "./page/ContactPage"
function MainComponent() {
  const [currentPage, setCurrentPage] = useState("home");
  
  return (
    <div className="bg-gray-100">
      <nav className="bg-white shadow-lg p-4">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center">
          <h1 className="text-2xl font-bold font-montserrat">足立卓斗</h1>
          <div className="flex space-x-4">
            <button
              onClick={() => setCurrentPage("home")}
              className={`px-4 py-2 ${
                currentPage === "home" ? "text-blue-600" : ""
              }`}
            >
              トップ
            </button>
            <button
              onClick={() => setCurrentPage("projects")}
              className={`px-4 py-2 ${
                currentPage === "projects" ? "text-blue-600" : ""
              }`}
            >
              プロジェクト
            </button>
            <button
              onClick={() => setCurrentPage("skills")}
              className={`px-4 py-2 ${
                currentPage === "skills" ? "text-blue-600" : ""
              }`}
            >
              スキル
            </button>
            <button
              onClick={() => setCurrentPage("contact")}
              className={`px-4 py-2 ${
                currentPage === "contact" ? "text-blue-600" : ""
              }`}
            >
              連絡先
            </button>
          </div>
        </div>
      </nav>

      {currentPage === "home" && <HomePage />}
      {currentPage === "projects" && <ProjectsPage />}
      {currentPage === "skills" && <SkillsPage />}
      {currentPage === "contact" && <ContactPage />}
    </div>
  );
}

export default MainComponent;