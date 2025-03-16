import baseURL from "@/utils/base-url";

export default function Panel({ delay, icon, title, url }) {
    return (
        <div className="col-sm-6 col-md-4 col-lg-3">
            <div
                className="list-group"
                data-aos="fade-up"
                data-aos-delay={delay}
            >
                <a
                    className="list-group-item list-group-item-action p-3"
                    href={baseURL(url)}
                    title={title}
                >
                    <i className={`bi bi-${icon} display-6`}></i>
                    <h5 className="mt-3 mb-0">{title}</h5>
                </a>
            </div>
        </div>
    );
}
