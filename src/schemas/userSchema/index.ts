import { z } from "zod";

export const userSchema = z.object({
    usernameLogin: z.string({
        required_error: "O nome de usuário é obrigatório"
    }).min(3, "O nome de usuário deve ter no mínimo 3 caracteres"),
    passwordLogin: z.string({
        required_error: "A senha é obrigatória"
    }).min(6, "A senha deve ter no mínimo 6 caracteres")
});

export type UserFormData = z.infer<typeof userSchema>;
