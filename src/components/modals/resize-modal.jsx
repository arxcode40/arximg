import { useMemo, useCallback } from "preact/hooks";
import BaseModal from "./base-modal";
import FigureImage from "@/components/partials/figure-image";
import download from "downloadjs";

export default function ResizeModal({
    level,
    originalImage,
    resizedImage,
    setLevel,
}) {
    const dimension = useMemo(() => {
        return {
            original: `${parseInt(originalImage.width)} x ${parseInt(
                originalImage.height
            )} px`,
            resized: `${parseInt(resizedImage.width)} x ${parseInt(
                resizedImage.height
            )} px`,
        };
    }, [originalImage, resizedImage]);
    const onChange = useCallback(
        (e) => setLevel(e.currentTarget.value),
        [level]
    );
    const downloadImage = useCallback(() => {
        download(resizedImage.src, originalImage.name, originalImage.type);
    }, [originalImage, resizedImage]);

    return (
        <BaseModal
            downloadImage={downloadImage}
            icon="box-arrow-in-down-left"
            id="resizeModal"
            title="Resize Image"
        >
            <div className="g-3 row">
                <div className="col-lg-6">
                    <FigureImage
                        alt="Original image"
                        source={originalImage.src}
                    >
                        Original dimension:
                        <br />
                        <strong className="text-danger">
                            {dimension.original}
                        </strong>
                    </FigureImage>
                </div>
                <div className="col-lg-6">
                    <FigureImage alt="Resized image" source={resizedImage.src}>
                        Resized dimension:
                        <br />
                        <strong className="text-success">
                            {dimension.resized}
                        </strong>
                    </FigureImage>
                </div>
                <div className="col-12">
                    <label className="form-label" htmlFor="percentage">
                        Resizing Level
                    </label>
                    <input
                        className="form-range"
                        max={100}
                        min={0}
                        onChange={onChange}
                        type="range"
                        value={level}
                    />
                    <div className="input-group w-fit">
                        <input
                            className="form-control"
                            max={100}
                            min={0}
                            onChange={onChange}
                            type="number"
                            value={level}
                        />
                        <span className="input-group-text">
                            <i className="bi bi-percent"></i>
                        </span>
                    </div>
                </div>
            </div>
        </BaseModal>
    );
}
