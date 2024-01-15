interface rupiahProps {
  number: number
  signDisplay?: "auto" | "never" | "always" | "exceptZero" | undefined
}

export const toRupiah = ({ number, signDisplay }: rupiahProps) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    signDisplay: signDisplay,
  }).format(number);
}

export const toNumber = (currency: string): number => {
  const string = currency.replace(/\D/g, '');
  const number = parseInt(string);
  return number;
};