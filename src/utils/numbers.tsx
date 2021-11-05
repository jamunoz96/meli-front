export const parsePriceProduct = (price : number, currency : string) => {
    return Math.trunc(price).toLocaleString(currency)
}