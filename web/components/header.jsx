import Link from "next/link";

export default function Header() {
  return (
    <header>
      <span className="title">Troisplay</span>
      <div className="links">
        <Link href="#">
          <a className="link">home</a>
        </Link>
        <Link href="#about">
          <a className="link">about</a>
        </Link>
        <Link href="#support">
          <a className="link">support</a>
        </Link>
        <Link href="/signup">
          <a className="link">Join</a>
        </Link>
      </div>
    </header>
  );
}
