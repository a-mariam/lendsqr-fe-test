export const formateDigits = (digit:  number) => {

    if (!isNaN(digit)) {
        const formattedAmount = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "NGN",
            minimumFractionDigits: 0,
        }).format(digit);
        return  formattedAmount.replace("NGN", "").trim();
    }


    return "0.00";
}