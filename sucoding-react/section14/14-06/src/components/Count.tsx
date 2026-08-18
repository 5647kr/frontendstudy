import { useEffect } from "react";
import CountGroup from "./CountGroup";
import { useCountStore } from "../store/countStore";

export default function Count() {
  useEffect(() => {
    const unsubscribe = useCountStore.subscribe(
      (state) => state.count,
      (newCount) => {
        console.log(newCount);
      },
    );

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <>
      <CountGroup />
    </>
  );
}
