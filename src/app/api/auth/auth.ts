"use server";

import bcrypt from "bcryptjs";
import { NewUser } from "@/types/NewUser.model";
import { ResponseRequest } from "@/types/ResponseRequest.model";
import { db } from "@/libs/db";

export async function registerUser(
    payload: NewUser
): Promise<ResponseRequest> {

    if (
        !payload.userName ||
        !payload.name ||
        !payload.email ||
        !payload.password
    ) {
        return {
            success: false,
            message: "Preencha todos os campos.",
        };
    }

    if (payload.password.length < 6) {
        return {
            success: false,
            message: "A senha deve ter pelo menos 6 caracteres.",
        };
    }

    const username = payload.userName.trim();
    const name = payload.name.trim();
    const email = payload.email.trim().toLowerCase();

    const existingUser = await db.user.findFirst({
        where: {
            OR: [
                { username },
                { email },
            ],
        },
    });

    if (existingUser) {
        return {
            success: false,
            message: "Usuário ou e-mail já cadastrado.",
        };
    }

    const hashedPassword = await bcrypt.hash(
        payload.password,
        10
    );

    const user = await db.user.create({
        data: {
            username,
            name,
            email,
            password: hashedPassword,
        },
        select: {
            id: true,
            username: true,
            name: true,
            email: true,
            avatarUrl: true,
            createdAt: true,
        },
    });

    return {
        success: true,
        message: "Usuário criado com sucesso.",
        value: user,
    };
}
