export default function compressImage(file, level, setCompressedImage) {
    const image = new Image();
    const quality = (100 - level) / 100;
    image.src = URL.createObjectURL(file);
    image.onload = function () {
        URL.revokeObjectURL(image.src);
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = image.width;
        canvas.height = image.height;
        ctx.drawImage(image, 0, 0);
        const dataURL = canvas.toDataURL("image/webp", quality);
        setCompressedImage({
            src: dataURL,
            size: atob(dataURL.split(",")[1]).length,
        });
    };
}
