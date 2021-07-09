import Image from "next/image";
import HeaderItem from "./HeaderItem";

function NavBar() {
  return (
    <header className="">
      <Image
        className="object-contain"
        src="https://ice-cream-assets.s3.amazonaws.com/ice-cream-logo-with-text.png"
        width={180}
        height={100}
      />
      <div>
        <HeaderItem title="HOME" />
        <HeaderItem title="CONES" />
        <HeaderItem title="BOWLS" />
        <HeaderItem title="BARS" />
        <HeaderItem title="ACCOUNTS" />
      </div>
    </header>
  );
}

export default NavBar;
