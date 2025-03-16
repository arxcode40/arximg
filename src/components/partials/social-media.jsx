export default function SocialMedia({ icon, label, url }) {
    return (
        <div className="col-auto">
            <a
                aria-label={label}
                className="link-body-emphasis"
                href={url}
                target="_blank"
                title={label}
            >
                <i className={`bi bi-${icon} fs-5 lh-1`}></i>
            </a>
        </div>
    );
}
