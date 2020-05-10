import React from "react";
import useToggle from "../controls/useToggle";

export default function Header() {
  const [isHorizontal, LayoutToggle] = useToggle("Horizontal Layout", false);

  return (
    <header className="bg-gray-500">
      <div>
        <a href="/">Fretr</a>
      </div>
      <LayoutToggle />
    </header>
  );
}
