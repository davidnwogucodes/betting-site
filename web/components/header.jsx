import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link href="/">
        <a className="title">Troisplay</a>
      </Link>
      <div className="links">
        <Link href="/#">
          <a className="link">home</a>
        </Link>
        <Link href="/#about">
          <a className="link">about</a>
        </Link>
        <Link href="/contact">
          <a className="link">contact</a>
        </Link>
        <Link href="/signup">
          <a className="link">Join</a>
        </Link>
      </div>
    </header>
  );
}
