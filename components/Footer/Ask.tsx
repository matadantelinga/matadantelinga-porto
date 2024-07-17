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

export default function Ask() {
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
    <div
      className="relative 
        before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[50%] before:bg-[#EBEBEB] 
        "
    >
      <div className="wrapper relative z-10">
        <div className="bg-c-black2 w-full min-h-150px px-10 py-10 text-white rounded-3xl [&_input]:text-c-black">
          <h4 className="font-bold text-[36px] mb-5">Tanya Harga Sekarang</h4>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div
              className="flex justify-between gap-5
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
              <Button variant="white">Tanya Harga</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
