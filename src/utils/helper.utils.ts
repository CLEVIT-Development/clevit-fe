export const generateUniqueTitlePath = (title: string) => {
  const randomChars = Math.random().toString(36).substring(2, 8); // Generates a random string

  return `${title.replace(/\s+/g, "-").toLowerCase()}-${randomChars}`;
};
