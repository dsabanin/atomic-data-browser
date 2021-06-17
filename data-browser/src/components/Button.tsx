import React from 'react';
import styled from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  /** Renders the button less clicky */
  subtle?: boolean;
  /** If it's just an icon */
  icon?: boolean;
  /** If it needs margins */
  margins?: boolean;
  /** Minimal styling */
  clean?: boolean;
  onClick: (...a: any) => unknown;
}

export function Button({ children, clean, icon, ...props }: ButtonProps): JSX.Element {
  let Comp = ButtonMargin;
  if (icon) {
    Comp = ButtonIcon;
  }
  if (clean) {
    Comp = ButtonClean;
  }

  return (
    <Comp type='button' {...props}>
      {children}
    </Comp>
  );
}

// /** Style-only props */
// interface ButtonProps {
//   // Less visually agressive button. Show only borders in color, instead of entire button
//   subtle?: boolean;
// }

/** Extremly minimal set of button properties */
export const ButtonClean = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  font-size: 1rem;
  padding: 0;
  color: inherit;
  margin: 0;
  -webkit-appearance: none;
  background-color: initial;
  -webkit-tap-highlight-color: transparent; /** Remove the tap / click effect on touch devices */
`;

/** Base button style. You're likely to want to use ButtonMargin in most places */
export const ButtonBase = styled(ButtonClean)`
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.main};
  color: ${props => props.theme.colors.bg};
  white-space: nowrap;
  transition: 0.1s transform, 0.1s background-color, 0.1s box-shadow, 0.1s color;

  /** Prevent sticky hover buttons on touch devices */
  @media (hover: hover) and (pointer: fine) {
    &:hover:not([disabled]),
    &:focus-visible:not([disabled]) {
      color: ${props => props.theme.colors.main};
      border-color: ${props => props.theme.colors.main};
      outline: 0;
    }
  }

  &:active:not([disabled]) {
    transition: all 0s;
    /* background-color: ${props => props.theme.colors.mainDark}; */
    /* color: ${props => props.theme.colors.bg}; */
  }

  &:disabled {
    cursor: default;
    display: auto;
    opacity: 0.5;
  }
`;

interface ButtonBarProps {
  leftPadding?: boolean;
  rightPadding?: boolean;
  selected?: boolean;
}

/** Button inside the navigation bar */
// eslint-disable-next-line prettier/prettier
export const ButtonBar = styled(ButtonClean) <ButtonBarProps>`
  padding-right: 0.7rem;
  padding-left: 0.7rem;
  /* border: none; */
  color: ${p => p.theme.colors.main};
  background-color: ${p => (p.selected ? p.theme.colors.bg2 : p.theme.colors.bg)};
  height: 100%;

  &:hover:not([disabled]),
  /* &:active:not([disabled]), */
  &:focus-visible:not([disabled]) {
    background-color: ${p => p.theme.colors.bg1};
  }

  &:active:not([disabled]) {
    background-color: ${p => p.theme.colors.bg2};
  }

  padding-left: ${p => (p.leftPadding ? '1.2rem' : '')};
  padding-right: ${p => (p.rightPadding ? '1.2rem' : '')};
`;

/** Button with some basic margins around it */
// eslint-disable-next-line prettier/prettier
export const ButtonMargin = styled(ButtonBase) <ButtonProps>`
  padding: 0.4rem;
  margin-bottom: ${props => props.theme.margin}rem;
  border-radius: ${props => props.theme.radius};
  padding-left: ${props => props.theme.margin}rem;
  padding-right: ${props => props.theme.margin}rem;
  box-shadow: ${props => (props.subtle ? props.theme.boxShadow : 'none')};
  display: inline-flex;
  margin-right: ${props => props.theme.margin}rem;
  background-color: ${props => (props.subtle ? 'transparent' : props.theme.colors.main)};
  color: ${props => (props.subtle ? props.theme.colors.textLight : props.theme.colors.bg)};
  border: solid 1px ${props => (props.subtle ? props.theme.colors.bg2 : props.theme.colors.main)};

  &:hover:not([disabled]) {
    box-shadow: ${props => props.theme.boxShadowIntense};
    background-color: ${props => (props.subtle ? 'initial' : props.theme.colors.mainLight)};
    color: ${props => (props.subtle ? props.theme.colors.main : props.theme.colors.bg)};
    border-color: ${props => (props.subtle ? props.theme.colors.main : props.theme.colors.mainLight)};
  }

  &:active:not([disabled]) {
    box-shadow: inset ${props => props.theme.boxShadowIntense};
  }
`;

/** Button that only shows an icon */
export const ButtonIcon = styled(ButtonMargin)`
  box-shadow: none;
  border-color: transparent;
  border-radius: 999px;
  font-size: 0.8em;
  width: 1.3rem;
  height: 1.3rem;
  display: inline-flex;
  margin: 0;
  padding: 0;

  &:active:not([disabled]) {
    box-shadow: ${props => props.theme.boxShadowIntense};
  }

  &:active:not([disabled]) {
    box-shadow: inset ${props => props.theme.boxShadowIntense};
  }
`;

/** A button inside an input field */
export const ButtonInput = styled(ButtonBase)`
  padding: 0 0.5rem;
  background-color: ${props => props.theme.colors.bg};
  color: ${props => props.theme.colors.text};
  flex: 0;
  height: auto;
  border-left: solid 1px ${props => props.theme.colors.bg2};
  border-radius: 0;

  &:last-child {
    border-radius: ${props => props.theme.radius};
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;