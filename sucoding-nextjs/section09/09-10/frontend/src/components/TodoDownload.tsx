"use client";

import Button from "./html/Button";

export default function TodoDownload() {
  const handleJsonDownload = () => {
    window.location.href = "/api/json-download";
  };
  const handleExcelDownload = () => {
    window.location.href = "/api/excel-download";
  };
  return (
    <div className="todo__download">
      <Button
        className="todo__button todo__download--json"
        onClick={handleJsonDownload}>
        JSON
      </Button>
      <Button
        className="todo__button todo__download--excel"
        onClick={handleExcelDownload}>
        EXCEL
      </Button>
    </div>
  );
}
