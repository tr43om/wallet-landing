import {
  Checkbox,
  RadioButton,
  SecondaryButton,
  Select,
  TextArea,
} from "components/ui";
import { Input } from "components/ui/Input";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled, { useTheme } from "styled-components";

import { SelectOptionType } from "types";
import media from "styled-media-query";
import { useMediaQuery } from "react-responsive";

const MESSAGE_LIMIT = 140;

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: yup.string().required("Bro, number is essential, you know"),
  message: yup
    .string()
    .max(MESSAGE_LIMIT, "Wow, too much spam")
    .required("Write at least something bro"),
});

type ContactFormDto = {
  email: string;
  phone: string;
  message: string;
};

interface CountryType extends SelectOptionType {
  idd: string;
}

const ContactForm = () => {
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState<CountryType>({} as CountryType);
  const [checked, setChecked] = useState(false);

  const { devices } = useTheme();
  const isDesktop = useMediaQuery({
    query: devices.desktop,
  });

  const methods = useForm<ContactFormDto>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const {
    formState: { errors, isValid, isSubmitted },
    reset,
  } = methods;

  console.log(errors);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const res = await fetch("https://restcountries.com/v3.1/all");

      const data: {
        name: { common: string };
        flags: {
          alt: string;
          png: string;
          jpg: string;
        };
        idd: {
          root: string;
        };
      }[] = await res.json();

      const countries = data
        .map((item) => {
          return {
            label: item.name.common,
            iconUrl: item.flags.png,
            value: item.name.common,
            idd: item.idd.root,
          };
        })
        .filter((item) => item.idd)
        .sort((a, b) => (a.label > b.label ? 1 : -1));

      setCountries(countries);
      setCountry(countries[0]);
      setLoading(false);
    })();
  }, []);

  return (
    <FormProvider {...methods}>
      <FormContainer
        onSubmit={methods.handleSubmit((data) => {
          console.log(data);
          reset();
        })}
      >
        {isDesktop && <Title>Contact us</Title>}

        <Input label="Email" placeholder="nick@example.com" name="email" />

        <Input
          label="Phone"
          placeholder="+44 (000) 000-0000"
          name="phone"
          mask={`${country.idd} (999) 999-99-99`}
        />

        <Fieldset $gap={60}>
          {!loading && (
            <Select
              options={countries}
              chooseOption={(option) => setCountry(option)}
              selected={country}
              isLight={true}
            />
          )}
          <Fieldset $gap={30}>
            <RadioButton
              id="male"
              label="Man"
              key="sex1"
              name="sex"
              defaultChecked={true}
            />
            <RadioButton id="female" label="Woman" key="sex2" name="sex" />
          </Fieldset>
        </Fieldset>

        <TextArea
          label="Message"
          maxLength={MESSAGE_LIMIT}
          name="message"
          placeholder="Enter your message here..."
        />

        <TermsContainer>
          <Checkbox
            checked={checked}
            toggle={() => {
              setChecked((prev) => !prev);
            }}
            id="acceptTerms"
          />
          <CheckboxLabel htmlFor="acceptTerms">
            By clicking on the button, you consent to the processing of{" "}
            <Link>data processing</Link> and compiled with{" "}
            <Link>confidentiality documents</Link>
          </CheckboxLabel>
        </TermsContainer>

        <SecondaryButton
          title="Send Message"
          type="submit"
          disabled={isSubmitted && !isValid && !checked}
        />
      </FormContainer>
    </FormProvider>
  );
};

const Title = styled.h2`
  font: ${({ theme }) => theme.variants.title2};
  margin-bottom: 20px;
`;

const FormContainer = styled.form`
  display: grid;
  gap: 1.5rem;
  max-width: 30rem;
  margin: 0 auto;

  ${media.greaterThan("large")`
    margin: 0;
  `}
`;

const CheckboxLabel = styled.label`
  color: #797979;
`;

const TermsContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const Link = styled.span`
  text-decoration: underline;
`;
const Fieldset = styled.fieldset<{ $gap?: number }>`
  all: unset;
  display: flex;
  flex-wrap: wrap;

  column-gap: ${({ $gap }) => `${$gap}px`};
  row-gap: 1.5rem;
`;

export default ContactForm;
