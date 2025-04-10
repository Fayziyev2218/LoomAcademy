

import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";


export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    mail: ""
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    const onlyNumbers = name === "phone" ? value.replace(/\D/g, "") : value;
  
    setFormData(prev => ({
      ...prev,
      [name]: onlyNumbers
    }));
  };

  const sendMassage = (event) => {
    event.preventDefault();

    const { name, phone, mail } = formData;

    if (!name.trim() || !phone.trim() || !mail.trim()) {
      toast.warn("⚠️ Iltimos, barcha maydonlarni to‘ldiring!", {
        position: "top-center",
        autoClose: 2000,
        theme: "colored"
      });
      return;
    }

    setIsSending(true); // Loading holati

    const token = "7238149873:AAEBuK_9Motnu_SFd9X04HjxmG-UaJGO6S4";
    const chatId = "862300228";
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const allMassage = `Ism: ${name} \nPhone: ${phone} \nEmail: ${mail}`;

    axios.post(url, {
      chat_id: chatId,
      text: allMassage
    })
      .then(() => {
        toast.success("✅ Muvaffaqiyatli yuborildi!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          theme: "light"
        });
        setFormData({ name: "", phone: "", mail: "" });
      })
      .catch(() => {
        toast.error("❌ Xatolik yuz berdi!", {
          position: "top-center",
          autoClose: 2000,
          theme: "colored"
        });
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <form onSubmit={sendMassage} className="w-[50%] max-md:w-full space-y-3">
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Имя"
        type="text"
        className="w-full p-[20px] bg-[#F6F6F6] rounded-[5px] text-[18px] text-[#282944B2] border-2 border-transparent focus:border-[#141024] focus:outline-none focus:shadow-md transition-all duration-200"
      />
      <input
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Телефон"
        type="tel"
        maxLength={9}
        className="w-full p-[20px] bg-[#F6F6F6] rounded-[5px] text-[18px] text-[#282944B2] border-2 border-transparent focus:border-[#141024] focus:outline-none focus:shadow-md transition-all duration-200"
      />
      <input
        name="mail"
        value={formData.mail}
        onChange={handleChange}
        placeholder="E-mail"
        type="email"
        className="w-full p-[20px] bg-[#F6F6F6] rounded-[5px] text-[18px] text-[#282944B2] border-2 border-transparent focus:border-[#141024] focus:outline-none focus:shadow-md transition-all duration-200"
      />
      <button
        disabled={isSending}
        className={`w-full p-[20px] rounded-[5px] text-[18px] text-white font-medium transition-colors ${
          isSending ? 'bg-gray-500 cursor-not-allowed' : 'bg-[#141024] hover:bg-[#2b243d]'
        }`}
      >
        {isSending ? 'Yuborilmoqda...' : 'Оформить заявку'}
      </button>
    </form>
  );
}

