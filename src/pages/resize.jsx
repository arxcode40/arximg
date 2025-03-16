import { useEffect, useState } from "preact/compat";
import resizeImage from "@/lib/resize-image";
import Modal from "bootstrap/js/src/modal";
import Helmet from "preact-helmet";
import Breadcrumb from "@/components/breadcrumb";
import UploadImage from "@/components/partials/upload-image";
import ResizeModal from "@/components/modals/resize-modal";

export default function Resize() {
    const [file, setFile] = useState(null);
    const [level, setLevel] = useState(0);
    const [originalImage, setOriginalImage] = useState({});
    const [resizedImage, setResizedImage] = useState({});

    useEffect(() => {
        if (originalImage.src) {
            resizeImage(file, level, setResizedImage);
        }
    }, [level, originalImage]);

    const uploadImage = (e) => {
        Modal.getOrCreateInstance("#resizeModal").show();
        const file = e.currentTarget.files[0];
        setFile(file);
        const image = new Image();
        image.src = URL.createObjectURL(file);
        image.onload = function () {
            URL.revokeObjectURL(image.src);
            file.height = image.height;
            file.src = image.src;
            file.width = image.width;
            setOriginalImage(file);
        };
        e.currentTarget.value = null;
        setLevel(70);
    };

    return (
        <>
            <Helmet title="Resize Image" />
            <Breadcrumb>
                <Breadcrumb.Item url="/">
                    <i className="bi bi-house"></i> Home
                </Breadcrumb.Item>
                <Breadcrumb.Item active>
                    <i className="bi bi-box-arrow-in-down-left"></i> Resize
                    Image
                </Breadcrumb.Item>
            </Breadcrumb>
            <UploadImage title="Resize Image" uploadImage={uploadImage} />
            <ResizeModal
                level={level}
                originalImage={originalImage}
                resizedImage={resizedImage}
                setLevel={setLevel}
            />
        </>
    );
}
