import { classNames } from "@/lib/util/style/classNames";
import Link from "next/link";

export type ButtonProps = (LinkProps | DefaultProps) & SharedProps;

type LinkProps = {
  href?: string;
  children?: React.ReactNode;
  element: "link";
};

type SharedProps = {
  text?: string;
  className?: string;
  pre?: React.ReactNode;
  post?: React.ReactNode;
};

type DefaultProps = {
  element?: "button";
  href?: undefined;
  onClick?: () => void;
};

export const Button = ({
  text,
  className: classNameProp,
  pre,
  post,
  element,
  ...props
}: ButtonProps) => {
  const className = classNames(
    "border border-blueish rounded-sm",
    classNameProp
  );
  if (!text) return null;
  switch (element) {
    case "link":
      if (!props.href) return;
      return (
        <Link
          {...props}
          href={props.href || ""}
          className={classNames(className, "text-center")}
        >
          {pre}
          <InnerSpan text={text} />
          {post}
        </Link>
      );
    default:
      return (
        <button {...props} className={className}>
          {pre} <InnerSpan text={text} />
          {post}
        </button>
      );
  }
};

const InnerSpan = ({ text }: { text: string }) => (
  <span className="m-[2px] text-2xl hover:bg-blueish-light text-white font-exo rounded-sm py-2 block px-4 bg-blueish">
    {text.toUpperCase()}
  </span>
);
