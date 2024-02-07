//import 

export default function Nav({ links }) {
  console.log("linked")
  return (
    <>
      <header>
        <h1 className="banner">Hudson Pepper</h1>
        <figure><img id="headshot" src="../src/assets/headshot.jpg" alt="Professional Headshot" /></figure>

        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="me-auto mb-2 mb-lg-0">
                {links.map((link) => link)}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
