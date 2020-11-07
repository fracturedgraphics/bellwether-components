import styled from '@emotion/styled';
import { ButtonProps } from './index';

export const ButtonSuccess = styled.button<ButtonProps>`
    background-color: ${(props: ButtonProps) => props.theme.palette.success.color};
    color: ${(props: ButtonProps) => props.theme.palette.success.text_color};
    border-radius: 6px;
    display: inline-block;
`;
