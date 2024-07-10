interface PriceProps {
  price: string;
  currency: string;
}
export interface PaymentFooter {
  price: PriceProps;
  buttonPressHandler: () => void;
  buttonTitle: string;
}
