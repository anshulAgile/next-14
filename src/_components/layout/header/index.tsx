import { getServerSessionData } from "@/_utils/getServerSession";
import { ROUTES } from "@/_utils/routes";
import Link from "next/link";
import LogoutBtn from "./component/logoutBtn";

const Header = async () => {
  const session = await getServerSessionData();

  return (
    <header
      style={{ height: "200px", marginBottom: "40px", textAlign: "center" }}
    >
      <nav>
        <h1>Header</h1>
        <ul
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            fontSize: "20px",
            margin: "30px",
            listStyle: "none",
          }}
        >
          <li>
            <Link href={ROUTES.home}>Home</Link>
          </li>
          <li>
            <Link href={ROUTES.profile}>Profile</Link>
          </li>
          <li>
            <Link href={ROUTES.dashboard}>Dashboard</Link>
          </li>
          {!session?.user ? (
            <li>
              <Link href={ROUTES.signIn}>Login</Link>
            </li>
          ) : (
            <li>
              <LogoutBtn />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
