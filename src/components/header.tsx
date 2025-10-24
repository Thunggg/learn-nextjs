import Link from "next/link"
import { ModeToggle } from "./toggle-theme";

const Header = () => {
     return(
        <>
            <div>
                <ul>
                    <li>
                        <Link href={'/login'}>đăng nhập</Link>
                    </li>
                    <li>
                        <Link href={'/register'}>đăng ký</Link>
                    </li>
                </ul>
                <ModeToggle/>
            </div>
        </>
     )
}

export default Header;