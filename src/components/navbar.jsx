import { useContext } from "preact/compat";
import AppState from "@/context/app-state-context";
import menuList from "@/data/menu-list";
import DropdownItem from "./partials/dropdown-item";
import Dropdown from "bootstrap/js/src/dropdown";
import Collapse from "bootstrap/js/src/collapse";

export default function Navbar() {
    const { currentURL } = useContext(AppState);
    const isHomeActive = currentURL === "/" ? "active " : "";
    const isDropdownActive = /^\/(compress|resize|convert)$/g.test(currentURL)
        ? "active "
        : "";

    return (
        <nav className="bg-body-tertiary navbar navbar-expand-lg sticky-top">
            <div className="container">
                <a
                    className="align-items-center d-flex navbar-brand"
                    href="/"
                    title="ArX IMG"
                >
                    <img
                        alt="ArX IMG Logo"
                        fetchPriority="high"
                        height={24}
                        loading="lazy"
                        src="/favicon.svg"
                        width={24}
                    />
                    <span className="fw-medium ms-2">ArX IMG</span>
                </a>
                <button
                    aria-label="Toggle navigation"
                    className="navbar-toggler"
                    data-bs-target="#navbarCollapse"
                    data-bs-toggle="collapse"
                    type="button"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="ms-auto navbar-nav">
                        <li className="nav-item">
                            <a
                                className={`${isHomeActive}nav-link`}
                                href="/"
                                title="Home"
                            >
                                <i className="bi bi-house"></i> Home
                            </a>
                        </li>
                        <li className="dropdown nav-item">
                            <a
                                className={`${isDropdownActive}dropdown-toggle nav-link`}
                                data-bs-toggle="dropdown"
                                href="#"
                                title="Image Tools"
                            >
                                <i className="bi bi-tools"></i> Image Tools
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                    <h6 className="dropdown-header">
                                        <i className="bi bi-tools"></i> Image
                                        Tools
                                    </h6>
                                </li>
                                {menuList.map(({ icon, title, url }, index) => {
                                    return (
                                        <DropdownItem
                                            currentURL={currentURL}
                                            icon={icon}
                                            key={index}
                                            title={title}
                                            url={url}
                                        />
                                    );
                                })}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
