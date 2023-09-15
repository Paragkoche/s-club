import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import db from "@/app/api/db";
const jwt_key =
  "f18eb85ec7830f1ee4127dc18a6f519252f7e459ceecf306cb8192660e4c6e67f4824339925c207559cfad15180a101b1f37a3f60021b0211c9818ecbe7cd1dd7e0eb8a88210785adda193180e302c4cf8b3649a3d1220c58b4abb14ccb78440d49fa6bef8c4efdbb749bc383d911cee7ea54b0c6b65cc2910619c285e6d272681ec3151a5763ce99e2f03429834ea253718773ee17ca898067221945c309dca02add29ec5eda6a08e106b9e58133c27b3e8660764c44fa7fba1591024f37311f3983928655984f6b4d200f1d6b30d48d769bbf7d608a1b0d9f5d5d7f6885d0b4a0e039b7483d72436148f4a3a4875ea85a3d801ff0765be63d73d8c8302938d50c2fd3864479f4de8cbbb813c0342fddee010004739a01fae74e4fc688fbf3bc724c4fb42a2994a0c286e8c55415512b23d8a9ccecb6d072b5082b39a9eb4e752cca66e59408d5dbf5c444c4d0e440af45e088029eb23301cff809c0ae09a21cbe7b781ac414518";
export function middleware(request: Request) {
  const api_key = new Headers(request.headers);
  const token = api_key.get("Authorization");
  if (!token)
    return NextResponse.json(
      {
        status: 401,
        message: "un-Authorize",
      },
      {
        status: 401,
      }
    );
  const { id }: any = jwt.verify(token, jwt_key);
  if (!id)
    return NextResponse.json(
      {
        status: 401,
        message: "Token invalid",
      },
      {
        status: 401,
      }
    );
  const user = db.admin.findUnique({ where: { id } });
  if (!user)
    return NextResponse.json(
      {
        status: 401,
        message: "Token invalid",
      },
      {
        status: 401,
      }
    );
  return NextResponse.next();
}
