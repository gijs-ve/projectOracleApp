import { classNames } from "@/lib/util/style/classNames";
import { sidePadding } from "@/lib/util/style/spacing";

export const Header = () => {
  return (
    <header
      className={classNames(
        "h-navbar-h text-7xl flex flex-col justify-center bg-blueish border-grayish border-b",
        sidePadding
      )}
    >
      <h2>Oracle</h2>
    </header>
  );
};
