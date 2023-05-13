import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">
          Russell's Portfolio
        </Link>
      </div>
      <a href="" className="resume-btn">Resume</a>
    </div>
  )
}

export default Navbar;