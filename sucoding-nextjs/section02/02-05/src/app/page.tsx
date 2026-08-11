// "use client";

import ClientWrapper from "@/components/ClientWrapper";
import DataFetch from "@/components/DataFetch";

export default function Page() {
  return (
    <>
      <h1>Page</h1>
      {/* <DataFetch /> */}
      <ClientWrapper>
        <DataFetch />
      </ClientWrapper>
    </>
  );
}
