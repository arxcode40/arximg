export default function UploadImage({ title, uploadImage }) {
    return (
        <div className="card">
            <div className="align-items-center card-body d-flex flex-column p-5">
                <h1 className="mb-4">{title}</h1>
                <label
                    className="btn btn-primary btn-lg fw-medium"
                    htmlFor="image"
                >
                    <i className="bi bi-upload"></i> Select Image
                </label>
                <input
                    accept="image/*"
                    id="image"
                    hidden
                    name="image"
                    onInput={uploadImage}
                    required
                    type="file"
                />
            </div>
        </div>
    );
}
