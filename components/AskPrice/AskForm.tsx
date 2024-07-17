"use client";
import React from "react";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Nama harus diisi",
  }),
  telp: z.string().min(5, {
    message: "Telp harus diisi",
  }),
  email: z.string().email({
    message: "Format email tidak valid",
  }),
});

export function AskForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      telp: "",
      email: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div
          className="flex justify-between flex-col gap-5
        [&_label]:text-sm [&_label]:mb-2 [&_label]:block
        [&_input]:w-full [&_input]:rounded-lg [&_input]:p-2
        "
        >
          <div className="relative flex-1">
            <label>Nama</label>
            <input type="text" {...form.register("name")} />
            {form.formState.errors.name ? (
              <p className="text-red-500 mt-1">
                {form.formState.errors.name.message}
              </p>
            ) : null}
          </div>
          <div className="relative flex-1">
            <label>No. Telepon</label>
            <input type="text" {...form.register("telp")} />
            {form.formState.errors.telp ? (
              <p className="text-red-500 mt-1">
                {form.formState.errors.telp.message}
              </p>
            ) : null}
          </div>
          <div className="relative flex-1">
            <label>Email (optional)</label>
            <input type="email" {...form.register("email")} />
            {form.formState.errors.email ? (
              <p className="text-red-500 mt-1">
                {form.formState.errors.email.message}
              </p>
            ) : null}
          </div>
        </div>
        <div className="text-right mt-7 block">
          <Button variant="default">Tanya Harga</Button>
        </div>
      </form>
    </>
  );
}
