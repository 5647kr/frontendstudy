import { useCallback, useState } from "react";
import Box from "./Box";

export default function Example2() {
  const [size, setSize] = useState(100);
  const [isDark, setIsDark] = useState(false);

  const createBoxStyle = useCallback(() => {
    return {
      backgroundColor: "pink",
      width: `${size}px`,
      height: `${size}px`,
    };
  }, [size]);

  return (
    <div style={{ background: isDark ? "black" : "white" }}>
      <input
        type="number"
        value={size}
        onChange={(e) => setSize(parseInt(e.target.value))}
      />
      <button onClick={() => setIsDark(!isDark)}>change theme</button>
      <Box createBoxStyle={createBoxStyle} />
    </div>
  );
}
