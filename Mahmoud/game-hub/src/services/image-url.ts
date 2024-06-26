const getCroppedImageUrl = (url: string) => {
  // TODO: Cannot read properties of null (reading 'indexOf') for games without image
  if (!url) return "";
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
