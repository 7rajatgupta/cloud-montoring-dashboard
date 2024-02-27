import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 mb-6">
      <Link href="#">
        <Image
          height={306}
          width={150}
          src={
            "https://montycloud.com/hs-fs/hubfs/MC_logo-text-only.png?width=1000&height=306&name=MC_logo-text-only.png"
          }
          alt="MontyCloud"
        />
      </Link>
    </header>
  );
};

export default Nav;
