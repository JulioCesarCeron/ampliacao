import Image from "next/image"
import logoImg from "../../assets/img/default-logo.png"
import menuHamburger from "../../assets/svg/menu-hamburguer.svg"

const Header = () => (
  <header
    className="u-clearfix u-header"
    id="sec-f2bc"
    data-animation-name=""
    data-animation-duration="0"
    data-animation-delay="0"
    data-animation-direction=""
  >
    <div className="u-clearfix u-sheet u-sheet-1">
      <a href="#" className="u-image u-logo u-image-1">
        <Image src={logoImg} className="u-logo-image u-logo-image-1" alt="" />
      </a>
      <nav
        className="u-menu u-menu-hamburger u-offcanvas u-menu-1"
        data-responsive-from="XL"
        data-submenu-level="on-click"
      >
        <div
          className="menu-collapse"
          style={{
            fontSize: "1rem",
            letterSpacing: "0px",
            fontWeight: 700,
          }}
        >
          <a
            className="u-button-style u-custom-border u-custom-border-color u-custom-borders u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-text-color u-custom-top-bottom-menu-spacing u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
            href="#"
          >
            menu icon
            <Image
              priority
              src={menuHamburger}
              className="u-logo-image u-logo-image-1"
              alt=""
            />
          </a>
        </div>
        <div className="u-custom-menu u-nav-container">
          <ul className="u-nav u-spacing-20 u-unstyled u-nav-1">
            <li className="u-nav-item">
              <a
                className="u-border-no-bottom u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-palette-1-base u-text-grey-90 u-text-hover-palette-2-base"
                href="#"
                style={{ padding: "10px" }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="u-custom-menu u-nav-container-collapse">
          <div className="u-black u-container-style u-inner-container-layout u-opacity u-opacity-70 u-sidenav">
            <div className="u-inner-container-layout u-sidenav-overflow">
              <div className="u-menu-close"></div>
              <ul className="u-align-center u-nav u-popupmenu-items u-spacing-0 u-unstyled u-nav-2">
                <li className="u-nav-item">
                  <a className="u-button-style u-nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
              <nav
                className="u-menu u-menu-one-level u-offcanvas u-offcanvas-shift u-menu-2"
                data-responsive-from="MD"
              >
                <div className="menu-collapse">
                  <a className="u-button-style u-nav-link" href="#">
                    hamburger menu icon
                  </a>
                </div>
                <div className="u-custom-menu u-nav-container">
                  <ul className="u-nav u-unstyled">
                    <li className="u-nav-item">
                      <a
                        className="u-button-style u-nav-link"
                        href="Page-2.html"
                      >
                        Page 2
                      </a>
                    </li>
                    <li className="u-nav-item">
                      <a
                        className="u-button-style u-nav-link"
                        href="blog/blog.html"
                      >
                        Blog
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="u-custom-menu u-nav-container-collapse">
                  <div
                    className="u-black u-container-style u-expanded-width u-inner-container-layout u-sidenav"
                    data-offcanvas-width="2028"
                  >
                    <div className="u-inner-container-layout u-sidenav-overflow">
                      <div className="u-menu-close u-menu-close-2" />
                      <ul className="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-4">
                        <li className="u-nav-item">
                          <a
                            className="u-button-style u-nav-link"
                            href="Page-2.html"
                          >
                            Page 2
                          </a>
                        </li>
                        <li className="u-nav-item">
                          <a
                            className="u-button-style u-nav-link"
                            href="blog/blog.html"
                          >
                            Blog
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="u-black u-menu-overlay u-opacity u-opacity-70" />
                </div>
              </nav>
            </div>
          </div>
          <div className="u-black u-menu-overlay u-opacity u-opacity-70" />
        </div>
      </nav>
    </div>
  </header>
)

export default Header
