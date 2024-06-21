import React from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller, useFormContext } from 'react-hook-form';
import Select from 'react-select';

import { Wrapper } from './style';
import { ICommonDateFieldProps, ICommonInputFieldProps, ICommonSelectFieldProps } from './types';

export const CommonInputField: React.FC<ICommonInputFieldProps> = ({
  labelName,
  type = 'text',
  name,
  containerClass,
  inputClass,
  errorClass = 'error-field'
}) => {
  const {
    control,
    formState: { errors }
  } = useFormContext();

  const errorMessage = errors[name]?.message as React.ReactNode;

  return (
    <Wrapper className={`formGroup ${containerClass}`}>
      <label htmlFor={name}>{labelName}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            {...field}
            type={type}
            className={inputClass}
            id={name}
            value={field.value ?? ''}
            onChange={field.onChange}
          />
        )}
      />
      {errorMessage && <span className={errorClass}>{errorMessage}</span>}
    </Wrapper>
  );
};

export const CommonSelectField: React.FC<ICommonSelectFieldProps> = ({
  labelName,
  name,
  options = [],
  containerClass,
  selectClass,
  isMulti = false,
  errorClass = 'error-field'
}) => {
  const {
    control,
    formState: { errors }
  } = useFormContext();

  let errorMessage: any;

  if (isMulti) {
    errorMessage = errors[name]?.message;
  } else if (errors && typeof errors === 'object') {
    const errorObject = errors[name] as any;
    errorMessage = errorObject?.label?.message || errorObject?.value?.message;
  }

  return (
    <Wrapper className={`formGroup ${containerClass}`}>
      <label htmlFor={name}>{labelName}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            name={name}
            options={options}
            isMulti={isMulti}
            className={selectClass}
            value={field.value ?? null}
            onChange={(selectedOption) => field.onChange(selectedOption)}
          />
        )}
      />
      {errorMessage && <span className={errorClass}>{errorMessage}</span>}
    </Wrapper>
  );
};

export const CommonDateField: React.FC<ICommonDateFieldProps> = ({
  labelName,
  name,
  containerClass,
  dateClass,
  errorClass = 'error-field'
}) => {
  const {
    control,
    formState: { errors }
  } = useFormContext();

  const errorMessage = errors[name]?.message as React.ReactNode;

  return (
    <Wrapper className={`formGroup ${containerClass}`}>
      <label htmlFor={name}>{labelName}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <DatePicker {...field} selected={field.value} className={dateClass} />
        )}
      />
      {errorMessage && <span className={errorClass}>{errorMessage}</span>}
    </Wrapper>
  );
};
