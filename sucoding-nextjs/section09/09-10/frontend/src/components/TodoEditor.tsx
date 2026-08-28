"use client";
import { useState, useTransition } from "react";
import Button from "./html/Button";
import Input from "./html/Input";
import { addTodo } from "@/services/actions";

export default function TodoEditor() {
  const [text, setText] = useState("");
  const [isPending, startTransition] = useTransition();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    startTransition(async () => {
      await addTodo(text);
      setText("");
    });
  };
  return (
    <form className="todo__form" onSubmit={handleSubmit}>
      <div className="todo__editor">
        <Input
          type="text"
          className="todo__input"
          placeholder="Enter Todo List"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button className="todo__button" type="submit" disabled={isPending}>
          Add
        </Button>
      </div>
    </form>
  );
}
