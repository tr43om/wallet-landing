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
  const [sex, setSex] = useState("male");

  const methods = useForm<ContactFormDto>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const {
    formState: { errors, isValid, isSubmitted },
    reset,
  } = methods;

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
        <Input label="Email" placeholder="nick@example.com" name="email" />

        <Input
          label="Phone"
          placeholder="+44 (000) 000-0000"
          name="phone"
          mask={`${country.idd} (999) 999-99-99`}
        />

        <Fieldset $gap={60} $mb={5}>
          {!loading && (
            <Select
              options={countries}
              chooseOption={(option) => setCountry(option)}
              selected={country}
              isLight={true}
              label="Country"
            />
          )}
          <Fieldset $gap={30} $mt={15}>
            <RadioButton
              id="male"
              value="male"
              label="Man"
              name="sex"
              onChange={(e) => setSex(e.target.value)}
              defaultChecked={true}
            />
            <RadioButton
              id="female"
              value="female"
              label="Woman"
              name="sex"
              defaultChecked={false}
            />
          </Fieldset>
        </Fieldset>

        <TextArea
          label="Message"
          maxLength={MESSAGE_LIMIT}
          name="message"
          placeholder="Enter your message here"
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
            <Link>data processing</Link>. <br /> and compiled with{" "}
            <Link>confidentiality documents</Link>
          </CheckboxLabel>
        </TermsContainer>

        <StyledSecondaryButton
          title="Send message"
          type="submit"
          disabled={isSubmitted && !isValid && !checked}
        />
      </FormContainer>
    </FormProvider>
  );
};

const StyledSecondaryButton = styled(SecondaryButton)`
  margin-top: 10px;
  max-width: 244px;

  ${media.greaterThan("large")`
    max-width: 200px !important;
  `}
`;

const FormContainer = styled.form`
  display: grid;
  gap: 1.1rem;
  max-width: 30rem;
  margin: 0 auto;
  padding-inline: 11px;

  ${media.greaterThan("large")`
    gap: 1.5rem;

    margin: 0;
    padding: 0;
  `}
`;

const CheckboxLabel = styled.label`
  font: ${({ theme }) => theme.variants.caption1};
  color: #797979;
  cursor: pointer;
`;

const TermsContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: start;
  margin-top: -5px;

  ${media.greaterThan("large")`
    align-items: center;
    margin-top: -25px;
  `}
`;

const Link = styled.span`
  text-decoration: underline;
`;
const Fieldset = styled.fieldset<{ $gap?: number; $mt?: number; $mb?: number }>`
  all: unset;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  column-gap: ${({ $gap }) => `${$gap}px`};
  margin-top: ${({ $mt }) => `${$mt}px`};
  margin-bottom: ${({ $mb }) => `${$mb}px`};

  row-gap: 15px;

  ${media.greaterThan("large")`
    row-gap: 1.5rem;
    margin-bottom: 0;
  `}
`;

export default ContactForm;
