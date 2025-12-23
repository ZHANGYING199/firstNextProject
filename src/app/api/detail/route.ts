import { NextRequest } from "next/server";
import { withApiHandler } from "@/utils/withApiHandler";
import { error, success } from "@/utils/apiResponse";
import clientPromise from "@/lib/mongodb";
import { DB_NAME } from "@/config/constants";

export const GET = withApiHandler(async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return Response.json(error("ID is required"), {
      status: 400,
    });
  }

  const client = await clientPromise; // 建立client的连线
  const db = client.db(DB_NAME);
  const collection = db.collection("posts");
  const post = await collection.findOne({ id });
  return Response.json(success({ post }), {
    status: 200,
  });
});
