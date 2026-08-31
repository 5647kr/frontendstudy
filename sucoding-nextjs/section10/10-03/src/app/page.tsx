import Image from "next/image";

export default function Page() {
  return (
    <>
      <Image
        src={"https://pixabay.com/ko/images/download/x-6780191_1920.jpg"}
        alt="fall"
        width={500}
        height={500}
        // 속성
        loading="eager" // 즉시 이미지를 로딩한다는 의미이다.
        quality={100} // 1~100 이미지 품질을 제어하는 속성이다. 1:저품질 100:고품질 기본값:75
        // 에러 발생이 되기 때문에 next.config.ts파일에서 qulities: [100, 75]를 추가해야한다.
        preload={true} // 이미지를 미리 다운로드 할지 여부의 속성이다. true 설정시 eager를 제거해도 된다.
        fill // 이미지를 부모요소의 크기에 맞게 확장해서 채우는 옵션이다. fill 속성 사용시 부모 요소는 relative, fixed, absolute 속성중 하나여야 한다. true일 경우 `={true}`이 값을 생략할 수 있다. 또한 object-fit cover, contain을 같이 사용한다.
        placeholder="blur" // 기본값은 empty인데 blur로 설정해 이미지가 로딩되기 전에 흐린 이미지를 사전에 보여준다. import 된 이미지는 에러가 나지 않고 외부 이미지의 경우엔 경로를 지정해줘야 한다.
      />
    </>
  );
}
