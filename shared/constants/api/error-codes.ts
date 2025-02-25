export enum ErrorMessages {
  BadRequest = "bad_request",
  Unauthorized = "unauthorized",
  Forbidden = "forbidden",
  NotFound = "not_found",
  InternalServerError = "internal_server_error",
  UnknownError = "unknown_error",
  INCORRECT_PASSWORD = "INCORRECT_PASSWORD",
  AUTH_NOT_FOUND = "AUTH_NOT_FOUND",
}

export const ApiErrorMessages: Record<ErrorMessages, string> = {
  [ErrorMessages.BadRequest]: "Invalid request. Please check your input.",
  [ErrorMessages.Unauthorized]: "Unauthorized access. Please log in.",
  [ErrorMessages.Forbidden]: "You do not have permission to perform this action.",
  [ErrorMessages.NotFound]: "The requested resource was not found.",
  [ErrorMessages.InternalServerError]: "An internal server error occurred. Please try again later.",
  [ErrorMessages.UnknownError]: "An unexpected error occurred.",
  [ErrorMessages.INCORRECT_PASSWORD]: "Wrong email or password.",
  [ErrorMessages.AUTH_NOT_FOUND]: "User not found.",
};

export const getApiErroByMessage = (message: keyof typeof ApiErrorMessages): string => {
  return ApiErrorMessages[message] || ApiErrorMessages[ErrorMessages.UnknownError];
};
