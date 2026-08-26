import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  return NextResponse.json(`This is a POST Dynamic Handler`);

  // const body = await request.json();
  // return NextResponse.json(body);

  // formData가 넘어올 경우
  // const formData = await request.formData();
  // const name = formData.get("name") as string;
  // const file = formData.get("profile_image") as File;
  // return NextResponse.json({
  //   name,
  //   file: {
  //     name: file.name,
  //     size: file.size,
  //     type: file.type,
  //   },
  // });

  // 텍스트 방식으로 넘어올 경우
  // const text = await request.text();
  // return NextResponse.json(text);
}

export async function DELETE(
  _: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const id = (await params).id;
  return NextResponse.json(`This is a DELETE Dynamic Route Handler. id:${id}`);
}
