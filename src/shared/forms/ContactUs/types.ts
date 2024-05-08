import type { FieldValues } from "react-hook-form";

export interface IContactUsFormPayload extends FieldValues {
  fullname: string;
  email: string;
  country: string;
  phone: string;
  service: string;
  description: string;
  files: File[];
}
