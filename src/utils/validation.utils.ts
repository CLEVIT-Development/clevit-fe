// Example: limit file size
export const filesSizeValidation = (
  files: File[],
  size = 100 * (1024 * 100),
  message = "File size must be less than 100MB"
) => {
  if (files?.[0]?.size > size) {
    return message;
  }

  return true;
};

export const mailRegExp = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
