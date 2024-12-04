import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between items-center p-2">
      <div className="text-3xl font-bold">MyAlmanack</div>
      <div className="flex flex-row gap-10">
        <div>About</div>
        <div>Pricing</div>
      </div>
      <Button>
        <Link href={"/login"}>Login</Link>
      </Button>
    </nav>
  );
};

export default Navbar;
