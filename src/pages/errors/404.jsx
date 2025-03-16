import Helmet from "preact-helmet";

export default function NotFound() {
    return (
        <>
            <Helmet title="404: Page Not Found" />
            <div className="align-items-center d-flex flex-column row-gap-3">
                <i className="bi bi-exclamation-triangle display-3 text-danger"></i>
                <h1 className="text-center">404: Page Not Found</h1>
                <a className="btn btn-primary" href="/" title="Go Home">
                    <i className="bi bi-house"></i> Go Home
                </a>
            </div>
        </>
    );
}
