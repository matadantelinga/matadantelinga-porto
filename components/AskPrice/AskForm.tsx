"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { showToast } from "@/lib/utils/common";
import { EAlertTypeEnum } from "@/lib/enums/eAlertTypeEnums";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Nama harus diisi",
  }),
  phone: z.string().min(5, {
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
      phone: "",
      email: "",
    },
  });

  const [message, setMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | boolean | null>(
    false
  );

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const data = {
        data: {
          email: values.email,
          name: values.name,
          phone: values.phone,
        },
      };
      const response = await axios.post(
        `${process.env.URL_API}/askprices`,
        data
      );
      setErrorMessage(false);
      showToast(
        EAlertTypeEnum.SUCCESS,
        "Pesan Anda telah terkirim",
        "successAsk"
      );
      form.reset();
    } catch (error: any) {
      console.error("Error:", error?.response.data.error.message);
      showToast(
        EAlertTypeEnum.ERROR,
        `${error?.response.data.error.message}`,
        "failedAsk"
      );
    }
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
            <input type="text" {...form.register("phone")} />
            {form.formState.errors.phone ? (
              <p className="text-red-500 mt-1">
                {form.formState.errors.phone.message}
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
