import { useCallback } from "preact/compat";
import BaseModal from "./base-modal";
import FigureImage from "@/components/partials/figure-image";
import readableBytes from "@/utils/readable-bytes";
import download from "downloadjs";

export default function CompressModal({
    compressedImage,
    level,
    originalImage,
    setLevel,
}) {
    const onChange = useCallback(
        (e) => setLevel(e.currentTarget.value),
        [level]
    );
    const downloadImage = useCallback(() => {
        download(compressedImage.src, originalImage.name, originalImage.type);
    }, [compressedImage, originalImage]);

    return (
        <BaseModal
            downloadImage={downloadImage}
            icon="arrows-angle-contract"
            id="compressModal"
            title="Compress Image"
        >
            <div className="g-3 row">
                <div className="col-lg-6">
                    <FigureImage
                        alt="Original image"
                        source={originalImage.src}
                    >
                        Original size:{" "}
                        <strong className="text-danger">
                            {readableBytes(originalImage.size)}
                        </strong>
                    </FigureImage>
                </div>
                <div className="col-lg-6">
                    <FigureImage
                        alt="Compressed image"
                        source={compressedImage.src}
                    >
                        Compressed size:{" "}
                        <strong className="text-success">
                            {readableBytes(compressedImage.size)}
                        </strong>
                    </FigureImage>
                </div>
                <div className="col-12">
                    <label className="form-label" htmlFor="level">
                        Compression Level
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
