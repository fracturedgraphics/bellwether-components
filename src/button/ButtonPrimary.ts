import styled from '@emotion/styled';
import { ButtonProps } from './index';

export const ButtonPrimary = styled.button<ButtonProps>`
    background-color: ${(props: ButtonProps) => props.theme.palette.primary.color};
    color: ${(props: ButtonProps) => props.theme.palette.primary.text_color};
    border-radius: 6px;
    display: inline-block;
`;
