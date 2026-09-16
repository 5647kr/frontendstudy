import CacheComponent from "@/components/CacheComponent";
import DynamicComponent from "@/components/DynamicComponent";
import StaticComponent from "@/components/StaticComponent";

export default function Page() {
  return (
    <>
      {/* 정적 콘텐츠 - 자동 프리렌더링 */}
      <StaticComponent />
      {/* 캐시된 동적 콘텐츠 - 정적 셸 */}
      <CacheComponent />

      {/* 동적 콘텐츠 - 요청 시점 스트리밍 */}
      <Suspense fallback={<h1>loading...</h1>}>
        <DynamicComponent />
      </Suspense>
    </>
  );
}
