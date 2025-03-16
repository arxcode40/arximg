import { useCallback, useState } from "preact/compat";
import imageFileTypes from "@/data/image-file-types";
import BaseModal from "./base-modal";
import download from "downloadjs";

export default function ConvertModal({ originalImage }) {
    const [selectedType, setSelectedType] = useState(null);
    const outputTypeList = imageFileTypes.filter(
        (type) => type.mime !== originalImage.type
    );
    const inputType = imageFileTypes.find(
        (type) => type.mime === originalImage.type
    );
    const outputType = imageFileTypes.find(
        (type) => type.mime === selectedType
    );
    const onChange = useCallback(
        (e) => setSelectedType(e.currentTarget.value),
        [selectedType]
    );
    const downloadImage = useCallback(() => {
        download(
            originalImage.src,
            `${originalImage.name.substring(
                0,
                originalImage.name.lastIndexOf(".")
            )}${outputType?.extension}`,
            originalImage.type
        );
    }, [originalImage, outputType]);

    return (
        <BaseModal
            downloadImage={downloadImage}
            icon="arrow-left-right"
            id="convertModal"
            title="Convert Image"
        >
            <div className="g-3 row">
                <div className="col-12">
                    <img
                        alt="Original image"
                        className="img-fluid rounded"
                        loading="lazy"
                        src={originalImage.src}
                    />
                </div>
                <div className="col-12">
                    <label className="form-label" htmlFor="level">
                        Conversion Options
                    </label>
                    <div className="input-group">
                        <input
                            className="form-control"
                            readOnly
                            type="text"
                            value={inputType?.name}
                        />
                        <span className="input-group-text">
                            <i className="bi bi-arrow-left-right"></i>
                        </span>
                        <select
                            className="form-select"
                            onChange={onChange}
                            value={selectedType}
                        >
                            {outputTypeList.map((type) => (
                                <option value={type.mime}>{type.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </BaseModal>
    );
}
