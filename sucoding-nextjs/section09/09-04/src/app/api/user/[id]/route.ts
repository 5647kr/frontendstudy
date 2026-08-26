import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  _: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const id = (await params).id;
  return NextResponse.json(`This is a DELETE Dynamic Route Handler. id:${id}`);
}
