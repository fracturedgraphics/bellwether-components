import styled from '@emotion/styled';
import { ButtonProps } from './index';

export const ButtonError = styled.button<ButtonProps>`
    background-color: ${(props: ButtonProps) => props.theme.palette.error.color};
    color: ${(props: ButtonProps) => props.theme.palette.error.text_color};
    border-radius: 6px;
    display: inline-block;
`;
