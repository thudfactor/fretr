import React from "react";

export default function Header({ className = "" }) {
  return (
    <header className={className}>
      <div>
        <a href="/">Fretr</a>
      </div>
    </header>
  );
}
