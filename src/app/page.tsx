import { Suspense } from "react";
import Layout from "@/components/layout";
import Content from "@/modules/home/content";

export default function Home() {
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Content />
      </Suspense>
    </Layout>
  );
}
