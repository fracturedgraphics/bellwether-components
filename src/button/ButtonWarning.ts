import styled from '@emotion/styled';
import { ButtonProps } from './index';

export const ButtonWarning = styled.button<ButtonProps>`
    background-color: ${(props: ButtonProps) => props.theme.palette.warning.color};
    color: ${(props: ButtonProps) => props.theme.palette.warning.text_color};
    border-radius: 6px;
    display: inline-block;
`;
