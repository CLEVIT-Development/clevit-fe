export const formatPhoneNumber = (phoneNumber: string) => {
  // Match the phone number format and capture groups
  const regex = /^(\+\d{3})(\d{2})(\d{2})(\d{2})(\d{2})$/;

  // Use replace with captured groups to format the phone number
  const formattedPhoneNumber = phoneNumber.replace(regex, "$1 $2 $3 $4 $5");

  return formattedPhoneNumber;
};
