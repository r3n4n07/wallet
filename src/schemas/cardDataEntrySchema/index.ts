import { z } from "zod"

export const cardDataEntrySchema = z.object({
    cardHolderName: z.string({ required_error: "O campo é obrigatório!" }).min(5, "O nome deve ter no mínimo 5 caracteres!"),
    cvc: z.string({ required_error: "O campo é obrigatório!" }).length(3, "O CVC deve ter exatamente 3 números"),
    cardNumber: z.string({ required_error: "O campo é obrigatório!" }).length(19, "Número Inválido!"),
    valid: z.string({ required_error: "O campo é obrigatório!" }).refine((value) => {
        const month = parseInt(value.slice(0, 2));
        const year = parseInt(value.slice(3, 5));
        const currentDate = new Date()

        return value.length === 5 && month > 0 && month <= 12 && year >= Number(currentDate.getFullYear().toString().slice(2, 4));
    }, {
        message: "Data inválida"
    })
});


export type CardDataEntryFormData = z.infer<typeof cardDataEntrySchema>;