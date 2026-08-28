"use client";
import Button from "./html/Button";
import Checkbox from "./html/Checkbox";
import SvgClose from "./svg/SvgClose";
import SvgPencil from "./svg/SvgPencil";
import Input from "./html/Input";
import { deleteTodo, toggleTodo, updateTodo } from "@/services/actions";
import { startTransition, useOptimistic, useState } from "react";

export default function TodoListItem({ todo }: { todo: Todo }) {
  const [optimisticTodo, setOptimisticTodo] = useOptimistic(
    todo,
    (state, newCompleted: boolean) => ({
      ...state,
      completed: newCompleted,
    })
  );

  // 수정 여부를 판단하는 상태값
  const [isEditing, setIsEditing] = useState(false);

  // 수정할 내용을 담는 상태값
  const [editedTitle, setEditedTitle] = useState("");

  // 수정 버튼 클릭 시 수정 모드로 전환
  const updateHandler = async (id: number) => {
    if (editedTitle !== "" && editedTitle !== todo.title) {
      // 업데이트
      await updateTodo(id, editedTitle);
    }
    setIsEditing((isEditing) => !isEditing);
    setEditedTitle(editedTitle === "" ? todo.title : editedTitle);
  };

  const handleToggle = async (id: number) => {
    startTransition(async () => {
      setOptimisticTodo(!optimisticTodo.completed);
      await toggleTodo(id);
    });
  };
  return (
    // 할 일이 완료되면 .todo__item--complete 추가
    <li
      className={`todo__item ${
        optimisticTodo.completed && "todo__item--complete"
      }`}
    >
      {!isEditing && (
        <Checkbox
          parentClassName="todo__checkbox-group"
          type="checkbox"
          className="todo__checkbox"
          checked={optimisticTodo.completed}
          onChange={() => handleToggle(optimisticTodo.id)}
        >
          {optimisticTodo.title}
        </Checkbox>
      )}
      {/* 할 일을 수정할 때만 노출 (.todo__checkbox-group은 비노출) */}
      {isEditing && (
        <Input
          type="text"
          className="todo__modify-input"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
        />
      )}
      <div className="todo__button-group">
        <Button
          className="todo__action-button"
          onClick={() => updateHandler(optimisticTodo.id)}
        >
          <SvgPencil />
        </Button>
        <Button
          className="todo__action-button"
          onClick={() => deleteTodo(optimisticTodo.id)}
        >
          <SvgClose />
        </Button>
      </div>
    </li>
  );
}
