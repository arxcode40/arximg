import { useEffect, useState } from "preact/compat";
import compressImage from "@/lib/compress-image";
import Modal from "bootstrap/js/src/modal";
import Helmet from "preact-helmet";
import Breadcrumb from "@/components/breadcrumb";
import UploadImage from "@/components/partials/upload-image";
import CompressModal from "@/components/modals/compress-modal";

export default function Compress() {
    const [file, setFile] = useState(null);
    const [level, setLevel] = useState(0);
    const [originalImage, setOriginalImage] = useState({});
    const [compressedImage, setCompressedImage] = useState({});

    useEffect(() => {
        if (originalImage.src) {
            compressImage(file, level, setCompressedImage);
        }
    }, [level, originalImage]);

    const uploadImage = (e) => {
        Modal.getOrCreateInstance("#compressModal").show();
        const file = e.currentTarget.files[0];
        setFile(file);
        file.src = URL.createObjectURL(file);
        setOriginalImage(file);
        e.currentTarget.value = null;
        setLevel(70);
    };

    return (
        <>
            <Helmet title="Compress Image" />
            <Breadcrumb>
                <Breadcrumb.Item url="/">
                    <i className="bi bi-house"></i> Home
                </Breadcrumb.Item>
                <Breadcrumb.Item active>
                    <i className="bi bi-arrows-angle-contract"></i> Compress
                    Image
                </Breadcrumb.Item>
            </Breadcrumb>
            <UploadImage title="Compress Image" uploadImage={uploadImage} />
            <CompressModal
                compressedImage={compressedImage}
                level={level}
                originalImage={originalImage}
                setLevel={setLevel}
            />
        </>
    );
}
