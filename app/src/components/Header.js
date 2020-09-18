import React from "react";

export default function Header({ className = "" }) {
  return (
    <header className={className}>
      <div className="flex justify-between items-center">
        <div className="font-display text-4xl">
          <a className="hover:text-yellow-300" href="/">Fretr</a>
        </div>
        <div className="text-xl font-medium">
          <a className="inline-block mx-5 hover:text-yellow-300" href="https://github.com/thudfactor/fretr"><i className="fab fa-github-alt mr-2"></i> Source</a>
          <a className="inline-block hover:text-yellow-300" href="http://www.elfinjohn.com/"><i className="fas fa-user-astronaut mr-2"></i> Elfin John</a>
        </div>
      </div>
    </header>
  );
}
