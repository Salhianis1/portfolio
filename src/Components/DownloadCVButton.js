import React from "react";
import { FaDownload } from "react-icons/fa"; // optional icon

function DownloadCVButton() {
  return (
    <a
    href="/cv_salhi_anis.pdf"
    download="cv_salhi_anis.pdf"
    className="inline-flex items-center gap-2 text-blue-600 border border-blue-600 px-5 py-2 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition duration-300"
    >
    <FaDownload />
    Download CV
    </a>
  );
}

export default DownloadCVButton;