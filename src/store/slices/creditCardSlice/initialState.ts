import { CreditCard } from "./model";

export const creditCardInitialState: CreditCard = {
    cardHolderName: "",
    bank: "",
    cvc:"",
    cardNumber: "",
    status: false,
    valid: "",
    balance: 0,
    transactions: [
        // Janeiro
        {
            iconName: "play-circle-outline",
            transactionName: "Netflix",
            transactionHour: "18:35",
            cash: 45.99,
            date: "2024-01-12"
        },
        {
            iconName: "bank",
            transactionName: "PayPal",
            transactionHour: "13:44",
            cash: 105.99,
            date: "2024-01-14"
        },
        {
            iconName: "flash",
            transactionName: "Cpfl",
            transactionHour: "09:12",
            cash: 135.99,
            date: "2024-01-14"
        },
        {
            iconName: "cart-outline",
            transactionName: "Mercado Livre",
            transactionHour: "11:30",
            cash: 259.90,
            date: "2024-01-18"
        },
        {
            iconName: "car",
            transactionName: "Uber",
            transactionHour: "19:20",
            cash: 15.75,
            date: "2024-01-20"
        },
        {
            iconName: "cash",
            transactionName: "Pagamento",
            transactionHour: "10:50",
            cash: 1200.00,
            date: "2024-01-25"
        },
    
        // Fevereiro
        {
            iconName: "cart-outline",
            transactionName: "Amazon",
            transactionHour: "14:40",
            cash: 345.99,
            date: "2024-02-05"
        },
        {
            iconName: "gas-station",
            transactionName: "Posto Shell",
            transactionHour: "08:00",
            cash: 200.00,
            date: "2024-02-06"
        },
        {
            iconName: "wifi",
            transactionName: "Vivo Internet",
            transactionHour: "22:30",
            cash: 89.90,
            date: "2024-02-14"
        },
        {
            iconName: "cellphone",
            transactionName: "Claro Recarga",
            transactionHour: "16:45",
            cash: 40.00,
            date: "2024-02-16"
        },
        {
            iconName: "cash",
            transactionName: "Salário",
            transactionHour: "09:00",
            cash: 5000.00,
            date: "2024-02-17"
        },
    
        // Março
        {
            iconName: "food",
            transactionName: "iFood",
            transactionHour: "19:15",
            cash: 85.90,
            date: "2024-03-10"
        },
        {
            iconName: "heart-outline",
            transactionName: "Farmácia",
            transactionHour: "11:10",
            cash: 50.75,
            date: "2024-03-11"
        },
        {
            iconName: "ticket-outline",
            transactionName: "Cinema",
            transactionHour: "20:00",
            cash: 45.00,
            date: "2024-03-12"
        },
        {
            iconName: "account-outline",
            transactionName: "Transferência",
            transactionHour: "13:55",
            cash: 600.00,
            date: "2024-03-13"
        },
        {
            iconName: "credit-card",
            transactionName: "Cartão de Crédito",
            transactionHour: "09:45",
            cash: 800.00,
            date: "2024-03-14"
        },
    
        // Abril
        {
            iconName: "airplane",
            transactionName: "Passagem Aérea",
            transactionHour: "06:00",
            cash: 1300.00,
            date: "2024-04-10"
        },
        {
            iconName: "bag-personal-outline",
            transactionName: "Shopping",
            transactionHour: "17:10",
            cash: 450.90,
            date: "2024-04-10"
        },
        {
            iconName: "television",
            transactionName: "HBO Max",
            transactionHour: "21:30",
            cash: 29.90,
            date: "2024-04-10"
        },
        {
            iconName: "car",
            transactionName: "Estacionamento",
            transactionHour: "12:20",
            cash: 12.00,
            date: "2024-04-15"
        },
        {
            iconName: "food-fork-drink",
            transactionName: "Restaurante",
            transactionHour: "14:00",
            cash: 125.00,
            date: "2024-04-18"
        },
    
        // Maio
        {
            iconName: "credit-card",
            transactionName: "Cartão de Crédito",
            transactionHour: "10:00",
            cash: 700.00,
            date: "2024-05-10"
        },
        {
            iconName: "cart-outline",
            transactionName: "Mercado Livre",
            transactionHour: "13:45",
            cash: 199.99,
            date: "2024-05-10"
        },
        {
            iconName: "gas-station",
            transactionName: "Posto Ipiranga",
            transactionHour: "08:30",
            cash: 210.00,
            date: "2024-05-10"
        },
        {
            iconName: "cash",
            transactionName: "Salário",
            transactionHour: "10:50",
            cash: 5100.00,
            date: "2024-05-15"
        },
        {
            iconName: "home",
            transactionName: "Aluguel",
            transactionHour: "09:00",
            cash: 1200.00,
            date: "2024-05-18"
        },
    
        // Junho
        {
            iconName: "movie-open-outline",
            transactionName: "Netflix",
            transactionHour: "18:35",
            cash: 39.99,
            date: "2024-06-10"
        },
        {
            iconName: "bank",
            transactionName: "Transferência",
            transactionHour: "15:10",
            cash: 500.00,
            date: "2024-06-11"
        },
        {
            iconName: "wifi",
            transactionName: "Vivo Internet",
            transactionHour: "22:00",
            cash: 89.90,
            date: "2024-06-13"
        },
        {
            iconName: "currency-usd",
            transactionName: "Pix",
            transactionHour: "12:30",
            cash: 1500.00,
            date: "2024-06-14"
        },
        {
            iconName: "ticket-outline",
            transactionName: "Cinema",
            transactionHour: "21:00",
            cash: 45.00,
            date: "2024-06-18"
        },
    
        // Julho
        {
            iconName: "car",
            transactionName: "Uber",
            transactionHour: "19:45",
            cash: 18.75,
            date: "2024-07-10"
        },
        {
            iconName: "bag-personal-outline",
            transactionName: "Compras",
            transactionHour: "17:30",
            cash: 230.90,
            date: "2024-07-12"
        },
        {
            iconName: "home",
            transactionName: "Aluguel",
            transactionHour: "09:10",
            cash: 1250.00,
            date: "2024-07-13"
        },
        {
            iconName: "flash",
            transactionName: "Cpfl",
            transactionHour: "11:40",
            cash: 130.99,
            date: "2024-07-14"
        },
        {
            iconName: "cash",
            transactionName: "Pagamento",
            transactionHour: "16:30",
            cash: 600.00,
            date: "2024-07-15"
        },
    
        // Agosto
        {
            iconName: "cellphone",
            transactionName: "Recarga Claro",
            transactionHour: "10:30",
            cash: 30.00,
            date: "2024-08-10"
        },
        {
            iconName: "credit-card",
            transactionName: "Cartão de Crédito",
            transactionHour: "09:50",
            cash: 850.00,
            date: "2024-08-18"
        },
        {
            iconName: "cash",
            transactionName: "Salário",
            transactionHour: "11:00",
            cash: 5200.00,
            date: "2024-08-19"
        },
        {
            iconName: "food",
            transactionName: "McDonald's",
            transactionHour: "18:45",
            cash: 45.50,
            date: "2024-08-20"
        },
        {
            iconName: "gas-station",
            transactionName: "Posto Shell",
            transactionHour: "08:15",
            cash: 210.00,
            date: "2024-08-25"
        },
    
        // Setembro
        {
            iconName: "bank",
            transactionName: "PayPal",
            transactionHour: "13:44",
            cash: 120.99,
            date: "2024-09-10"
        },
        {
            iconName: "flash",
            transactionName: "Cpfl",
            transactionHour: "09:12",
            cash: 135.99,
            date: "2024-09-10"
        },
        {
            iconName: "cart-outline",
            transactionName: "Mercado Livre",
            transactionHour: "11:30",
            cash: 299.90,
            date: "2024-09-15"
        },
        {
            iconName: "car",
            transactionName: "Uber",
            transactionHour: "19:20",
            cash: 15.75,
            date: "2024-09-18"
        },
        {
            iconName: "food",
            transactionName: "iFood",
            transactionHour: "12:45",
            cash: 72.90,
            date: "2024-09-19"
        },
    ]
}