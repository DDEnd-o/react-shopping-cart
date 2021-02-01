export const formatNumber = number => {
    return new Intl.NumberFormat('es-US', { style: 'currency', currency: 'USD' }).format(number);
}