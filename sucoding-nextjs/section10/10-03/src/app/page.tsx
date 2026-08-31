import Image from "next/image";

export default function Page() {
  return (
    <>
      <Image
        src={"https://pixabay.com/ko/images/download/x-6780191_1920.jpg"}
        alt="fall"
        width={500}
        height={500}
      />
    </>
  );
}
