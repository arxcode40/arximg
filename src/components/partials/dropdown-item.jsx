export default function DropdownItem({ currentURL, icon, title, url }) {
    const isActive = currentURL === url ? "active " : "";

    return (
        <li>
            <a className={`${isActive}dropdown-item`} href={url} title={title}>
                <i className={`bi bi-${icon}`}></i> {title}
            </a>
        </li>
    );
}
