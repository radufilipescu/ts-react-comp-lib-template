import React from "react";

interface IButtonProps {
  readonly label: string;
}

export function Button(props: IButtonProps) {
  return <button>{props.label}</button>;
}