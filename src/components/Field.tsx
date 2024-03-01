import React from "react";
import { useFormContext, RegisterOptions } from "react-hook-form";
import styled from "styled-components";

interface InputFieldProps {
  name: string;
  placeholder: string;
  label: string;
  options?: RegisterOptions;
}

const InputWrapper = styled.div`
  margin-bottom: 20px;
  width: 100%;
  position: relative;
`;

const StyledInput = styled.input`
  position: relative;
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
  font-family: ${({ theme }) => theme.fonts.primary};
  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.primary};
`;

const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.error};
  font-size: 14px;
`;

export const InputField: React.FC<InputFieldProps> = ({
  name,
  placeholder,
  label,
  options,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors[name]?.message as string | undefined;

  return (
    <InputWrapper>
      {label && <StyledLabel htmlFor={name}>{label}</StyledLabel>}
      <StyledInput
        id={name}
        placeholder={placeholder}
        {...register(name, options)}
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputWrapper>
  );
};
