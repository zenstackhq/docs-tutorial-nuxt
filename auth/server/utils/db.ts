import type { User } from '@prisma/client';
import { prisma } from '~/server/prisma';

export async function findUserByEmail(email: string) {
    return prisma.user.findUnique({ where: { email } });
}

export async function createUser(user: Omit<User, 'id'>) {
    return prisma.user.create({
        data: user,
    });
}
