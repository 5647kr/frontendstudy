"use client";

import Button from "./html/Button";

export default function TodoDownload() {
  return (
    <div className="todo__download">
      <Button className="todo__button todo__download--json">JSON</Button>
      <Button className="todo__button todo__download--excel">EXCEL</Button>
    </div>
  );
}
