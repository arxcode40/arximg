import baseURL from "@/utils/base-url";

const Breadcrumb = ({ children }) => {
    return (
        <nav>
            <ol className="bg-body-tertiary breadcrumb p-3 rounded">
                {children}
            </ol>
        </nav>
    );
};

const BreadcrumbItem = ({ active, children, url }) => {
    return active ? (
        <li className="active breadcrumb-item">{children}</li>
    ) : (
        <li className="breadcrumb-item">
            <a
                className="link-underline link-underline-opacity-0"
                href={baseURL(url)}
            >
                {children}
            </a>
        </li>
    );
};

export default Object.assign(Breadcrumb, { Item: BreadcrumbItem });
