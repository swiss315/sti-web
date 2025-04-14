export function formatAmount(amount) {
    const formatted = parseFloat(amount).toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    });
    return `₦${formatted}`;
}
