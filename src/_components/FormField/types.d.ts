import { OptionTypeBase } from 'react-select';

export interface ICommonInputFieldProps {
  labelName: string;
  type?: string;
  name: string;
  containerClass?: string;
  inputClass?: string;
  errorClass?: string;
}

export interface ICommonInputFieldProps {
  labelName: string;
  type?: string;
  name: string;
  containerClass?: string;
  inputClass?: string;
  errorClass?: string;
}

export interface ICommonSelectFieldProps {
  labelName: string;
  name: string;
  options: OptionTypeBase[];
  containerClass?: string;
  selectClass?: string;
  errorClass?: string;
  isMulti?: boolean;
}

export interface ICommonDateFieldProps {
  labelName: string;
  name: string;
  containerClass?: string;
  dateClass?: string;
  errorClass?: string;
}
