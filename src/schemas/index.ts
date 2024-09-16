import type { UserFormData } from "./userSchema";
import type { RegisterFormData } from "./registerSchema";
import type { PasswordRecoveryFormData } from "./passwordRecoverySchema";

export type AllKeys = keyof UserFormData | keyof RegisterFormData | keyof PasswordRecoveryFormData