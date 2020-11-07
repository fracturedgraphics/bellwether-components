import styled from '@emotion/styled';
import { ButtonProps } from './index';

export const ButtonInfo = styled.button<ButtonProps>`
    background-color: ${(props: ButtonProps) => props.theme.palette.info.color};
    color: ${(props: ButtonProps) => props.theme.palette.info.text_color};
    border-radius: 6px;
    display: inline-block;
`;
