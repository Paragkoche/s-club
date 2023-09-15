import { PrismaClient } from "@prisma/client";

const db = (async () => {
  let d = new PrismaClient();
  await d.$connect();
  return d;
})();

export default await db;
