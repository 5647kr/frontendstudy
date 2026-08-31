import Image from "next/image";
import cat from "@/assets/cat.png";

export default function Page() {
  return (
    <>
      <Image src={cat} alt="cat" width={200} height={200} />
      {/* 이미지 배율은 nextjs에서 설정해준다 따로 건들 필요는 없다. */}
    </>
  );
}
