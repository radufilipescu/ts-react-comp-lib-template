import React from "react";
import "./Button.css";

interface IButtonProps {
  readonly label: string;
}

export function Button(props: IButtonProps) {
  return <button className="my-button">{props.label}</button>;
}