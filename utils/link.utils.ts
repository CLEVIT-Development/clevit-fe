export const urlShortener = (link: string) => {
  return link.replace(/^https?:\/\/(www\.)?/i, "").replace(/\/$/, "");
};
