"use client";

import { useParams } from "next/navigation";

export default function CommentDetailPage() {
  const { id, commentId } = useParams();
  return (
    <>
      <h1>
        CommentDetailPage: {id} / {commentId}
      </h1>
    </>
  );
}
