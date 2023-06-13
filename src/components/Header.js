const Header = () => {
  return (
    <>
      <section className="banner">
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent fixed">
          <div className="container" style={{paddingLeft: "24px"}}>
            <img className="navbar-brand" src={"/images/logo.webp"} />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Course</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Event</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Teacher</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Blog</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Buy Now</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

  <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={"images/slider1.webp"} class="d-block w-100" alt="..." style={{height: "100vh"}}/>
      <div class="carousel-caption d-none d-md-block">
      <h3>EDUCATION MAKES </h3>
      <h2>PROPER HUMANITY </h2>
      <p>I must explain to you how all this mistaken idea of denouncing pleasure and prsing pain was born and I will give you a complete account of the system  </p>
        <a class="default-btn" href="about.html">Learn more</a>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={"images/slider2.webp"} class="d-block w-100" alt="..." style={{height: "100vh"}}/>
      <div class="carousel-caption d-none d-md-block">
      <h3>EDUCATION MAKES </h3>
      <h2>PROPER HUMANITY </h2>
      <p>I must explain to you how all this mistaken idea of denouncing pleasure and prsing pain was born and I will give you a complete account of the system  </p>
        <a class="default-btn" href="about.html">Learn more</a>
      </div>
    </div>
    <div class="carousel-item">
      <img src={"images/slider3.webp"} class="d-block w-100" alt="..." style={{height: "100vh"}}/>
      <div class="carousel-caption d-none d-md-block">
      <h3>EDUCATION MAKES </h3>
      <h2>PROPER HUMANITY </h2>
      <p>I must explain to you how all this mistaken idea of denouncing pleasure and prsing pain was born and I will give you a complete account of the system  </p>
        <a class="default-btn" href="about.html">Learn more</a>
      </div>
    </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>


      </section>


    </>
  );
}

export default Header;