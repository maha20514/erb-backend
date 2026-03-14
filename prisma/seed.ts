/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // 🔹 قائمة Permissions
  const permissionsData = [
    'user.read',
    'user.create',
    'user.update',
    'user.delete',
    'product.read',
    'product.create',
    'product.update',
    'product.delete',
  ];

  // 🔹 حفظ Permissions في DB
  const permissions: { id: number; name: string }[] = [];
  for (const name of permissionsData) {
    const perm = await prisma.permission.upsert({
      where: { name },
      update: {},
      create: { name },
    });
    permissions.push({ id: perm.id, name: perm.name });
  }

  // 🔹 إنشاء Roles
  const adminRole = await prisma.role.upsert({
    where: { name: 'Admin' },
    update: {},
    create: { name: 'Admin' },
  });

  const userRole = await prisma.role.upsert({
    where: { name: 'User' },
    update: {},
    create: { name: 'User' },
  });

  // 🔹 ربط كل Permissions بالـ Admin Role
  for (const perm of permissions) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: workaround for Prisma type issue with composite PK
    await prisma.rolePermission.upsert({
      where: {
        roleId_permissionId: { roleId: adminRole.id, permissionId: perm.id },
      },
      update: {},
      create: { roleId: adminRole.id, permissionId: perm.id },
    });
  }

  // 🔹 ربط permission "user.read" فقط مع User Role
  const userReadPerm = permissions.find((p) => p.name === 'user.read');
  if (userReadPerm) {
    // @ts-ignore
    await prisma.rolePermission.upsert({
      where: {
        roleId_permissionId: {
          roleId: userRole.id,
          permissionId: userReadPerm.id,
        },
      },
      update: {},
      create: { roleId: userRole.id, permissionId: userReadPerm.id },
    });
  }

  // 🔹 إنشاء Admin User أول
  const hashedPassword = await bcrypt.hash('admin123', 10);
  await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      name: 'Admin',
      password: hashedPassword,
      roleId: adminRole.id,
    },
  });

  console.log('✅ Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
