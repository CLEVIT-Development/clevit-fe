import { useCallback } from "react";
import { useForm } from "react-hook-form";

import AutoCompleteInput from "@/shared/ui/forms/AutoCompleteInput";
import FileInput from "@/shared/ui/forms/FileInput";
import { filesSizeValidation, mailRegExp } from "@/utils/validation.utils";

import Button from "../../ui/Button";
import Input from "../../ui/forms/Input";
import PhoneInput from "../../ui/forms/PhoneInput";
import TextArea from "../../ui/forms/TextArea";
import { contactUsCountriesConstants, contactUsServicesConstants } from "./constants";
import type { IContactUsFormPayload } from "./types";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors, isValid, isDirty },
  } = useForm<IContactUsFormPayload>({
    mode: "onChange",
  });

  const onFormSubmit = useCallback((data: IContactUsFormPayload) => console.log(data), []);

  return (
    <form
      className="h-full w-full max-w-[660px] flex flex-col desktop:items-start items-center space-y-6 bg-white shadow-base-300 rounded-lg desktop:p-6 p-4"
      onSubmit={handleSubmit(onFormSubmit)}
    >
      <div className="w-full grid desktop:grid-cols-2 grid-cols-1 desktop:gap-5 gap-4">
        <Input
          required
          label="Full Name"
          error={errors.fullname?.message}
          placeholder="Enter Your Full Name"
          {...register("fullname", { required: "Full Name Required" })}
        />
        <Input
          required
          label="Email"
          error={errors.email?.message}
          placeholder="Enter Your Email Address"
          {...register("email", {
            required: "Email Required",
            pattern: {
              value: mailRegExp,
              message: "Email Format not valid",
            },
          })}
        />
        <AutoCompleteInput
          required
          label="Country"
          placeholder="Please select Country"
          error={errors.country?.message}
          items={contactUsCountriesConstants}
          onMenuClick={(title) => setValue("country", title)}
          {...register("country", { required: "Country Required" })}
        />
        <PhoneInput
          name="phone"
          label="Phone"
          control={control}
          placeholder="Enter Your Phone Number"
          error={errors.phone?.message}
        />
        <AutoCompleteInput
          required
          label="Interested Services"
          className="desktop:col-span-2"
          placeholder="Please select service"
          error={errors.service?.message}
          items={contactUsServicesConstants}
          onMenuClick={(title) => setValue("service", title)}
          {...register("service", { required: "Service Required" })}
        />
        <TextArea
          maxLength={2000}
          label="How Can We Help"
          className="desktop:col-span-2"
          placeholder="Describe your idea/project briefly"
          {...register("description")}
        />
        <FileInput
          error={errors.files?.message}
          {...register("files", {
            validate: {
              fileSize: (value) => filesSizeValidation(value),
            },
          })}
        />
      </div>
      <Button type="submit" disabled={!isValid && isDirty} className="w-fit">
        Submit
      </Button>
    </form>
  );
};

export default ContactUs;
