import styled from '@emotion/styled';
import { ButtonProps } from './index';

export const ButtonSecondary = styled.button<ButtonProps>`
    background-color: ${(props: ButtonProps) => props.theme.palette.secondary.color};
    color: ${(props: ButtonProps) => props.theme.palette.secondary.text_color};
    border-radius: 6px;
    display: inline-block;
`;
