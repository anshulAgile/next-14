export interface ISignInForm {
  email: string;
  password: string;
  singleColor: { label: string; value: string };
  favoriteColors: Array<{ label: string; value: string }>;
  birthDate: Date;
}
