export const Navbar = ({ setCategory }) => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <div className="nav-link" onClick={() => setCategory("general")}>
            <span className="badge bg-light text-dark fs-4">AV News</span>
          </div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <div
                className="nav-link hover-transparent"
                onClick={() => setCategory("technology")}
              >
                Technology
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link hover-transparent"
                onClick={() => setCategory("business")}
              >
                Business
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link hover-transparent"
                onClick={() => setCategory("health")}
              >
                Health
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link hover-transparent"
                onClick={() => setCategory("sports")}
              >
                Sports
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link hover-transparent"
                onClick={() => setCategory("entertainment")}
              >
                Entertainment
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link hover-transparent"
                onClick={() => setCategory("science")}
              >
                Science
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
