export default function resizeImage(file, level, setResizedImage) {
    const image = new Image();
    const percentage = (100 - level) / 100;
    image.src = URL.createObjectURL(file);
    image.onload = function () {
        URL.revokeObjectURL(image.src);
        const [newWidth, newHeight] = [
            image.width * percentage,
            image.height * percentage,
        ];
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = newWidth;
        canvas.height = newHeight;
        ctx.drawImage(image, 0, 0, newWidth, newHeight);
        const dataURL = canvas.toDataURL("image/webp");
        setResizedImage({
            height: newHeight,
            src: dataURL,
            width: newWidth,
        });
    };
}
