import { classNames } from "@/lib/util/style/classNames";
import { ySidePadding } from "@/lib/util/style/spacing";
import { ComponentProps } from "react";
import { Section } from "./Section";

type NormalSectionProps = {
  children: React.ReactNode;
  sectionProps?: Partial<ComponentProps<typeof Section>>;
};
export const NormalSection = ({
  children,
  sectionProps,
}: NormalSectionProps) => {
  return (
    <Section
      {...sectionProps}
      className={classNames("bg-section", ySidePadding)}
    >
      {children}
    </Section>
  );
};
