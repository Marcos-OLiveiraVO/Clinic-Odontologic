import { v4 as uuidV4 } from "uuid";
import { hashSync } from "bcrypt";
import { PrismaService } from "../prisma.service";

async function create(prismaService: PrismaService) {
  const id = uuidV4();
  const passwordHashed = hashSync("admin", 6);

  await prismaService.onModuleInit();

  await prismaService.prisma.admin.create({
    data: {
      id,
      name: "admin5",
      email: "admintest2727@gmail.com",
      password: passwordHashed,
      username: "adminTest253",
      authorization_level: "admin",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  await prismaService.onModuleDestroy();
}

create(new PrismaService()).then(() => console.log(`admin created`));
