import React from 'react';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';


interface IInputProps extends ChakraInputProps {
  name: string;
  bgHover?: string;
  bgFocus?: string;
  bgPlaceholder?: string;
  label?: string;
  error?: FieldError;
}


const InputBase: ForwardRefRenderFunction<HTMLInputElement, IInputProps> = (
  { name, as, bgHover, bgFocus, bgPlaceholder, label, error = null, ...rest },
  ref,
) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && (
        <FormLabel fontWeight="bold" htmlFor={name}>
          {label}
        </FormLabel>
      )}
      <ChakraInput
        name={name}
        id={name}
        fontSize="14px"
        variant="filled"
        _hover={{
          bg: bgHover,
        }}
        _focus={{
          bg: bgFocus,
        }}
        _placeholder={{
          color: bgPlaceholder,
        }}
        ref={ref}
        {...rest}
      />
      {!!error && <FormErrorMessage mt="-10px" mb="10px">{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
