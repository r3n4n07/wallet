import { z } from "zod";

export const registerSchema = z.object({
    usernameRegister: z.string({
        required_error: "O nome de usuário é obrigatório"
    }).min(3, "O nome de usuário deve ter no mínimo 3 caracteres"),
    emailRegister: z.string({
        required_error: "O email é obrigatório"
    }).email("Email inválido"),
    passwordRegister: z.string({
        required_error: "A senha é obrigatória"
    }).min(6, "A senha deve ter no mínimo 6 caracteres")
});

export type RegisterFormData = z.infer<typeof registerSchema>;

