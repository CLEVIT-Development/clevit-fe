// Example: limit file size
export const filesSizeValidation = (
  file?: File,
  size = 100 * (1024 * 100),
  message = "File size must be less than 100MB"
) => {
  if (file && file?.size > size) {
    return message;
  }

  return true;
};
