"use client";
import { useModalStore } from "@/hooks/useModal";
import React from "react";

const ModalWrapper: React.FC = () => {
  const { isOpen, content, closeModal } = useModalStore();

  if (!isOpen) return null;

  return (
    <div
      id="modalWrapper"
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div className="bg-white p-6 rounded-lg shadow-lg relative min-w-[65%] xxl:min-w-[50%]">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
          onClick={closeModal}
        >
          &times;
        </button>
        {content}
      </div>
    </div>
  );
};

export default ModalWrapper;
