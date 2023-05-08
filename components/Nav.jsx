import Image from 'next/image';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="nav flex items-center flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 text-center">
        <Image
          src="/assets/images/logo.png"
          alt="AI-Flow logo"
          width={50}
          height={50}
          className="object-contain"
        />
        <p className="logo_text">AI-Flow</p>
      </Link>
      {/* Mobile Nav */}
      <div className="sm:flex hidden">
        <h1>nai</h1>
      </div>
    </nav>
  );
};

export default Nav;
