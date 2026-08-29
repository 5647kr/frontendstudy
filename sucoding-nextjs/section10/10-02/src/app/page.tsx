import Image from "next/image";

export default function Page() {
  return (
    <>
      {/* 개발자 도구에서 확인해보기 */}
      <Image
        src="https://cdn.pixabay.com/photo/2021/11/08/21/41/autumn-6780191_1280.jpg"
        alt="space"
        width={500}
        height={500}
      />
    </>
  );
}
