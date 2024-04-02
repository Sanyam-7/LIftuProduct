import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className="fixed top-0 right-0 h-16 w-32 bg-zinc-900 rounded-tl-none rounded-tr-none rounded-br-none rounded-bl-3xl">
        <button>
          <Image
            src="/images/Liftu-Image.jpeg"
            alt="User Avatar"
            width={28}
            height={28}
            className="rounded absolute right-5"
          />
        </button>

        <button>
          <Image
            src="/images/bell-white.png"
            alt="User Avatar"
            width={28}
            height={28}
            className="rounded absolute right-20"
          />
        </button>
      </div>
    </header>
  );
}
