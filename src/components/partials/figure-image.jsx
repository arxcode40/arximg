export default function FigureImage({ alt, children, source }) {
    return (
        <figure className="figure mb-0">
            <img
                alt={alt}
                className="figure-img img-fluid rounded"
                loading="lazy"
                src={source}
            />
            <figcaption className="figure-caption">{children}</figcaption>
        </figure>
    );
}
