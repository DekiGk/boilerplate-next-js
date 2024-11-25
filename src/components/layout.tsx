import Image from "next/image";
import Link from "next/link";
import profile from "../../public/images/profile.jpg";

export const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <Link href="/">
          <Image
            priority
            src={profile}
            height={100}
            width={100}
            alt={"profile pic"}
          />
        </Link>
      </header>

      <main>{children}</main>
    </div>
  );
};
