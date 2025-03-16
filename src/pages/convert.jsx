import { useState } from "preact/compat";
import Modal from "bootstrap/js/src/modal";
import Helmet from "preact-helmet";
import Breadcrumb from "@/components/breadcrumb";
import UploadImage from "@/components/partials/upload-image";
import ConvertModal from "@/components/modals/convert-modal";

export default function Convert() {
    const [originalImage, setOriginalImage] = useState({});

    const uploadImage = (e) => {
        Modal.getOrCreateInstance("#convertModal").show();
        const file = e.currentTarget.files[0];
        const reader = new FileReader();
        reader.onload = (ev) => {
            setOriginalImage(Object.assign(file, { src: ev.target.result }));
        };
        reader.readAsDataURL(file);
        e.currentTarget.value = null;
    };

    return (
        <>
            <Helmet title="Convert Image" />
            <Breadcrumb>
                <Breadcrumb.Item url="/">
                    <i className="bi bi-house"></i> Home
                </Breadcrumb.Item>
                <Breadcrumb.Item active>
                    <i className="bi bi-arrow-left-right"></i> Convert Image
                </Breadcrumb.Item>
            </Breadcrumb>
            <UploadImage title="Convert Image" uploadImage={uploadImage} />
            <ConvertModal originalImage={originalImage} />
        </>
    );
}
