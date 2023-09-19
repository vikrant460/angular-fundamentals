export function calculateTotalPrice(price:number,tax:number) : number {
    const totalPrice = price + tax;
    return  calculateAmount(totalPrice);
}

export function calculateMaxRefund(price:number,tax:number,credit: number) : number {
    const maxRefund =  price + tax - credit;
    return calculateAmount(maxRefund);
}

export function calculateAmount(dollarAmount:number) {
    return Math.round(calculatePennyAmount(dollarAmount)/100);
}

export function calculatePennyAmount(dollarAmount:number) {
    return dollarAmount * 100;
}
