import { z } from "zod"

export const passwordRecoverySchema = z.object({
    emailPasswordRecoverySchema: z.string({
        required_error: "O Email de recuperação é obrigatório",
    }).email("Email inválido")
});

export type PasswordRecoveryFormData = z.infer<typeof passwordRecoverySchema>;
