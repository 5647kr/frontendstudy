import Image from "next/image";
import cat from "@/assets/cat.png";

export default function Page() {
  return (
    <>
      {/* public 폴더에 있어 절대 경로로 작성한다. */}
      <img src="/space.png" alt="space" />

      {/* 이미지 최적화가 적용된 Image태그를 nextjs에서 제공한다. */}
      {/* Image 태그는 Width와 Height 값이 필수로 들어가야 한다. */}
      <Image src="/space.png" alt="space" width={500} height={500} />

      {/* assets/cat.png를 사용할 땐 import 를 사용한다. */}
      {/* width와 height의 값을 의무적으로 작성할 필요는 없다. */}
      <Image src={cat} alt="space" />

      {/* 외부 이미지 경로 사용시에도 width와 height값을 작성해주어야 한다. */}
      <Image
        src="https://cdn.pixabay.com/photo/2021/11/08/21/41/autumn-6780191_1280.jpg"
        alt="space"
        width={500}
        height={500}
      />
    </>
  );
}
