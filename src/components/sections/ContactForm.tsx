"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { IconCheck } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

type Errors = Partial<Record<"naam" | "organisatie" | "email" | "bericht", string>>;

type Values = {
  naam: string;
  organisatie: string;
  email: string;
  onderwerp: string;
  bericht: string;
};

const onderwerpen = [
  "Een toepassing laten bouwen",
  "Training of opleiding",
  "Iets anders",
];

const empty: Values = {
  naam: "",
  organisatie: "",
  email: "",
  onderwerp: onderwerpen[0],
  bericht: "",
};

function validate(values: Values): Errors {
  const errors: Errors = {};
  if (!values.naam.trim()) errors.naam = "Vul je naam in.";
  if (!values.organisatie.trim()) errors.organisatie = "Vul je organisatie in.";
  if (!values.email.trim()) {
    errors.email = "Vul je e-mailadres in.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Dit e-mailadres klopt niet. Controleer het even.";
  }
  if (!values.bericht.trim()) errors.bericht = "Schrijf kort waar we mee kunnen helpen.";
  return errors;
}

const fieldBase =
  "mt-2 w-full rounded-md border bg-paper px-3 py-3 text-body text-slate-800 " +
  "placeholder:text-slate-500 transition-colors focus:border-teal min-h-[44px]";

export function ContactForm() {
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof Values>(key: K, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
    if (key in errors && errors[key as keyof Errors]) {
      setErrors((e) => ({ ...e, [key]: undefined }));
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length === 0) {
      // Geen backend in deze demo: we bevestigen de verzending lokaal.
      setSubmitted(true);
    } else {
      // Zet focus op het eerste veld met een fout (a11y).
      const first = Object.keys(found)[0];
      document.getElementById(first)?.focus();
    }
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-lg border border-line bg-paper p-8 text-center shadow-card"
      >
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#E5F6F0] text-[#0A6B4E]">
          <IconCheck className="h-6 w-6" />
        </span>
        <h2 className="mt-4 text-h3 font-display text-navy">Bedankt, {values.naam.split(" ")[0]}!</h2>
        <p className="mt-2 text-ui text-slate-600">
          We nemen binnen één werkdag contact op met {values.organisatie} om je
          vraag te bespreken.
        </p>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="rounded-lg border border-line bg-paper p-6 shadow-card sm:p-8">
      <div className="flex flex-col gap-6">
        <Field
          id="naam"
          label="Naam"
          value={values.naam}
          error={errors.naam}
          autoComplete="name"
          onChange={(v) => update("naam", v)}
        />
        <Field
          id="organisatie"
          label="Organisatie"
          value={values.organisatie}
          error={errors.organisatie}
          autoComplete="organization"
          onChange={(v) => update("organisatie", v)}
        />
        <Field
          id="email"
          label="E-mailadres"
          type="email"
          value={values.email}
          error={errors.email}
          autoComplete="email"
          inputMode="email"
          onChange={(v) => update("email", v)}
        />

        <div>
          <label htmlFor="onderwerp" className="text-ui font-medium text-slate-700">
            Onderwerp
          </label>
          <select
            id="onderwerp"
            name="onderwerp"
            value={values.onderwerp}
            onChange={(e) => update("onderwerp", e.target.value)}
            className={cn(fieldBase, "border-line")}
          >
            {onderwerpen.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="bericht" className="text-ui font-medium text-slate-700">
            Bericht
          </label>
          <textarea
            id="bericht"
            name="bericht"
            rows={4}
            value={values.bericht}
            onChange={(e) => update("bericht", e.target.value)}
            aria-invalid={errors.bericht ? true : undefined}
            aria-describedby={errors.bericht ? "bericht-error" : undefined}
            placeholder="Waar kunnen we mee helpen?"
            className={cn(fieldBase, errors.bericht ? "border-error" : "border-line")}
          />
          {errors.bericht && (
            <p id="bericht-error" role="alert" className="mt-2">
              <Badge tone="error">{errors.bericht}</Badge>
            </p>
          )}
        </div>

        <div className="flex flex-col gap-3">
          <Button type="submit" size="lg" className="w-full sm:w-auto">
            Verstuur bericht
          </Button>
          <p className="text-caption text-slate-500">
            We gebruiken je gegevens alleen om contact met je op te nemen.
          </p>
        </div>
      </div>
    </form>
  );
}

type FieldProps = {
  id: "naam" | "organisatie" | "email";
  label: string;
  value: string;
  error?: string;
  type?: string;
  autoComplete?: string;
  inputMode?: "email" | "text";
  onChange: (value: string) => void;
};

function Field({ id, label, value, error, type = "text", autoComplete, inputMode, onChange }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="text-ui font-medium text-slate-700">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        inputMode={inputMode}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(fieldBase, error ? "border-error" : "border-line")}
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-2">
          <Badge tone="error">{error}</Badge>
        </p>
      )}
    </div>
  );
}
