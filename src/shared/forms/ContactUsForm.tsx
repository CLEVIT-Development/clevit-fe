import type { FieldValues } from "react-hook-form";
import { FormProvider } from "react-hook-form";
import { Controller } from "react-hook-form";
import { useForm } from "react-hook-form";

import {
  contactUsCountriesConstants,
  contactUsServicesConstants,
} from "@/common/constants/contactUs.constants";
import AutoComplete from "@/shared/ui/forms/AutoComplete.tsx";
import { filesSizeValidation, mailRegExp } from "@/utils/validation.utils";

import Button from "../ui/Button";
import FileInput from "../ui/forms/FileInput";
import Input from "../ui/forms/Input";
import PhoneInput from "../ui/forms/PhoneInput";
import TextArea from "../ui/forms/TextArea";

interface IContactUsFormPayload extends FieldValues {
  fullname: string;
  email: string;
  country: string;
  phone: string;
  service: string;
  description: string;
  files: File[];
}

const ContactUs = () => {
  const methods = useForm<IContactUsFormPayload>({
    mode: "onChange",
    defaultValues: {
      fullname: "",
      email: "",
      phone: "",
      country: "",
      service: "",
      description: "",
    },
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = methods;

  const onFormSubmit = (data: IContactUsFormPayload) => console.log(data);

  return (
    <FormProvider {...methods}>
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
          <AutoComplete
            required
            label="Country"
            placeholder="Please select Country"
            error={errors.country?.message}
            items={contactUsCountriesConstants}
            {...register("country", { required: "Country Required" })}
          />
          <Controller
            name="phone"
            control={control}
            render={({ field: { ref, ...field } }) => (
              <PhoneInput
                ref={ref}
                label="Phone"
                extraProps={field}
                error={errors.phone?.message}
                placeholder="Enter Your Phone Number"
              />
            )}
          />
          <AutoComplete
            required
            label="Interested Services"
            className="desktop:col-span-2"
            placeholder="Please select service"
            error={errors.service?.message}
            items={contactUsServicesConstants}
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
        <Button type="submit" className="w-fit">
          Submit
        </Button>
      </form>
    </FormProvider>
  );
};

export default ContactUs;
