import Link from "next/link";
import ButtonLogout from "../button-logout";
import { ModeToggle } from "../toggle-theme";

const Header = () => {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link href={"/login"}>đăng nhập</Link>
          </li>
          <li>
            <Link href={"/register"}>đăng ký</Link>
          </li>
          <li>
            <ButtonLogout />
          </li>
        </ul>
        <ModeToggle />
      </div>
    </>
  );
};

export default Header;
