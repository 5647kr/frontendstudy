import { useEffect, useState } from "react";

export default function Box(
  createBoxStyle: () => {
    backgroundColor: string;
    width: string;
    height: string;
  },
) {
  const [style, setStyle] = useState({});

  useEffect(() => {
    setStyle(createBoxStyle());
  }, [createBoxStyle]);
  return <div style={style}></div>;
}
