export default function BaseModal({
    children,
    downloadImage,
    icon,
    id,
    title,
}) {
    return (
        <div className="fade modal" id={id} tabIndex={-1}>
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">
                            <i className={`bi bi-${icon}`}></i> {title}
                        </h5>
                        <button
                            className="btn-close"
                            data-bs-dismiss="modal"
                            type="button"
                        ></button>
                    </div>
                    <div className="modal-body">{children}</div>
                    <div class="modal-footer">
                        <button
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                            type="button"
                        >
                            <i className="bi bi-x-lg"></i> Close
                        </button>
                        <button
                            class="btn btn-primary"
                            onClick={downloadImage}
                            type="button"
                        >
                            <i className="bi bi-download"></i> Download
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
