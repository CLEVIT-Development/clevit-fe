type CountryFormat = {
  countryCode: string;
  format: number[];
};

const countryFormats: Record<string, CountryFormat> = {
  Armenia: { countryCode: "+374", format: [2, 3, 3, 2] },
  USA: { countryCode: "+1", format: [3, 3, 4] },
  // Add other countries and their formats here
};

export const formatPhoneNumber = (phoneNumber: string, country: string): string => {
  const countryFormat = countryFormats[country];

  const { countryCode, format } = countryFormat;

  // Extract the part of the phone number without the country code
  const phoneNumberWithoutPrefix = phoneNumber.replace(countryCode, "");

  // Split the phone number based on the format
  let index = 0;
  const splitPhoneNumber = format.map((groupSize) => {
    const part = phoneNumberWithoutPrefix.slice(index, index + groupSize);
    index += groupSize;
    return part;
  });

  // Reconstruct the formatted phone number with spaces
  const formattedPhoneNumber = [countryCode, ...splitPhoneNumber].join(" ");

  return formattedPhoneNumber;
};
