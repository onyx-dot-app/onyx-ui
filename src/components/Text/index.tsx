import React from "react";

const fonts = {
  hero: "font-hero",
  heading: "font-heading",
  subheading: "font-subheading",
  callout: "font-callout",
  button: "font-button",
  main: "font-main",
  secondary: "font-secondary",
};

const colors = {
  text05: "text-text-05",
  text04: "text-text-04",
  text03: "text-text-03",
  text02: "text-text-02",
  text01: "text-text-01",

  inverted: {
    text05: "text-text-inverted-05",
    text04: "text-text-inverted-04",
    text03: "text-text-inverted-03",
    text02: "text-text-inverted-02",
    text01: "text-text-inverted-01",
  },
};

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  nowrap?: boolean;

  // size
  hero?: boolean;
  heading?: boolean;
  subheading?: boolean;
  callout?: boolean;
  button?: boolean;
  main?: boolean;
  secondary?: boolean;

  // color
  text05?: boolean;
  text04?: boolean;
  text03?: boolean;
  text02?: boolean;
  text01?: boolean;
  inverted?: boolean;
}

export default function Text({
  nowrap,
  hero,
  heading,
  subheading,
  callout,
  button,
  main,
  secondary,
  text05,
  text04,
  text03,
  text02,
  text01,
  inverted,
  children,
  className,
}: TextProps) {
  const font = hero
    ? "hero"
    : heading
      ? "heading"
      : subheading
        ? "subheading"
        : callout
          ? "callout"
          : button
            ? "button"
            : main
              ? "main"
              : secondary
                ? "secondary"
                : "main";

  const color = text01
    ? "text01"
    : text02
      ? "text02"
      : text03
        ? "text03"
        : text04
          ? "text04"
          : text05
            ? "text05"
            : "text05";

  return (
    <p
      className={`${fonts[font]} ${inverted ? colors.inverted[color] : colors[color]} ${nowrap && "whitespace-nowrap"} ${className}`}
    >
      {children}
    </p>
  );
}
