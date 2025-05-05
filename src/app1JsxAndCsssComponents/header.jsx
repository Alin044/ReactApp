export default function Header(){
    return (
        <header className="header-container">
          <img src="../public/images/React.webp" className="nav-bar-logo" alt="React Logo" />
          <nav className="nav-container">
            <ul className="nav-list">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </header>
    )
  }