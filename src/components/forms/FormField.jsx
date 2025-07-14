"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function FormField({
  type,
  name,
  placeholder,
  rows,
  value,
  setFormValues,
  formState,
}) {
  const isTextarea = type === "textarea";
  const InputComponent = isTextarea ? "textarea" : "input";

  const [showError, setShowError] = useState(!!formState.errors?.[name]);

  useEffect(() => {
    if (formState.errors?.[name]) {
      setShowError(true);
      const timer = setTimeout(() => setShowError(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [formState.errors, name]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setFormValues((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  return (
    <div className="relative border-b border-white">
      <InputComponent
        type={!isTextarea ? type : undefined}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        rows={rows}
        className="w-full py-3 bg-transparent font-medium text-white placeholder-light-peach focus:outline-none resize-none"
        suppressHydrationWarning={true}
      />

      {formState.errors?.[name] && showError && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-3 text-sm text-white italic">
          <p>{formState.errors[name]}</p>
          <Image
            src="/contact/desktop/icon-error.svg"
            alt="error"
            width={24}
            height={24}
          />
        </div>
      )}
    </div>
  );
}
