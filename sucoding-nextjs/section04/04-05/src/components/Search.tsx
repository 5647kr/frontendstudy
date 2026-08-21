"use client";

import { useEffect } from "react";

export default function Search() {
  useEffect(() => {
    console.log("search");
  }, []);
  return (
    <>
      <h1>Search</h1>
    </>
  );
}
