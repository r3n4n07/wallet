export const cardNumberMask = (text: string): string => {
    if (text.length <= 19) return text
        .replace(/\D/g, '') 
        .replace(/(\d{4})(\d{1,4})/, '$1 $2') 
        .replace(/(\d{4}) (\d{4})(\d{1,4})/, '$1 $2 $3') 
        .replace(/(\d{4}) (\d{4}) (\d{4})(\d{1,4})/, '$1 $2 $3 $4')
        .trim();
        
    return text.slice(0, 19);
}

export const validMask = (text: string): string => {
    if (text.length <= 5) return text
        .replace(/\D/g, '')  // Remove tudo que não for número
        .replace(/(\d{2})(\d{1,2})?/, '$1/$2')

    return text.slice(0,5);
}

export const CvcMask = (text:string): string=>{
    return text.replace(/\D/g, '');
}