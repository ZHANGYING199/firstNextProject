"use client"; // 添加这一行
import Layout from "@/components/layout";
import Content from "@/modules/post/content";

import { useParams } from "next/navigation";

export default function PostPage() {
  const { id } = useParams();
  console.log(id);
  return (
    <Layout>
      <Content />
    </Layout>
  );
}
