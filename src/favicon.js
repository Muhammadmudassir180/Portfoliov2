// Turns the portfolio photo into a round browser-tab icon, cropped around the face so it still reads at 16px.
export function setFavicon(src) {
  const img = new Image();
  img.onload = () => {
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = 64;
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(32, 32, 32, 0, 2 * Math.PI);
    ctx.clip();
    const crop = Math.min(img.width, img.height) * 0.62;
    ctx.drawImage(img, (img.width - crop) / 2, img.height * 0.03, crop, crop, 0, 0, 64, 64);
    document.querySelector('link[rel="icon"]').href = canvas.toDataURL();
  };
  img.src = src;
}
