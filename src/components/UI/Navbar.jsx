//import 

export default function Nav({ links }) {
  return (
    <>
      <header>
        <h1 class="banner">Hudson Pepper</h1>
        <figure><img id="headshot" src="../" alt="Professional Headshot" /></figure>
        <nav>
          <ul>
            <li><a href="#aboutme">About Me</a></li>
            <li><a href="#works">Work</a></li>
            <li><a href="#contact">Contact Me</a></li>
            <li><a href="#resume">Resume (Coming Soon)</a></li>
          </ul>
        </nav>

        <nav className="navbar navbar-expand-lg bg-secondary">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {links.map((link) => link)}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
