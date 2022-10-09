import styled from "styled-components";
import { Field } from "formik";
import InputMask from "react-input-mask";

export const SLabel = styled("label")`
  position: relative;
  width: 250px;
  background-color: #fff;
  display: flex;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: #0170f0;
    transform: scale(0);
    transform-origin: center;
    transform-origin: left;
    transition: transform 0.25s;
  }
  &:focus-within::before {
    transform: scale(1);
  }
`;
export const SField = styled(Field)`
  border: none;
  outline: none;
  background-color: transparent;
  color: #8e8e8e;
  width: 100%;
  padding: 10px;
`;

export const SMaskedInput = styled(InputMask)`
  border: none;
  outline: none;
  background-color: transparent;
  color: #8e8e8e;
  width: 100%;
  padding: 10px;
`;
export const ButtonSub = styled("button")`
  margin-top: ${(p) => p.theme.space[4]}px;
  align-items: center;
  appearance: none;
  background-color: #fcfcfd;
  border-radius: 4px;
  border-width: 0;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  box-sizing: border-box;
  color: #36395a;
  cursor: pointer;
  display: inline-flex;
  font-family: "JetBrains Mono", monospace;
  height: 48px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow 0.15s, transform 0.15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow, transform;
  font-size: 18px;
  &:focus {
    box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  }
  &:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
    transform: translateY(-2px);
  }
  &:active {
    box-shadow: #d6d6e7 0 3px 7px inset;
    transform: translateY(2px);
  }
`;
