const generateSitemap = require("./src/api/generate-sitemap");

const mockRequest = {};
const mockResponse = {
  setHeader: () => {},
  send: (content) => console.log(content),
  status: () => ({ send: (msg) => console.error(msg) }),
};

generateSitemap(mockRequest, mockResponse);
