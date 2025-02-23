import useNewsLetter from "../api/useNewsLetter";
import { useState } from "react";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import handlePromisError from "../../../../utils/handlePromiseError";
const useNewsLetterLogic = () => {
  const { isPending, mutateAsync } = useNewsLetter();
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() && !phone.trim()) {
      toast.error(t("all fields are required"));
      return;
    } else if (!name.trim()) {
      toast.error(t("name field is required"));
      return;
    } else if (!phone.trim()) {
      toast.error(t("phone field is required"));
      return;
    } else {
      const formData = new FormData();
      formData.append("name", name);

      formData.append("phone", phone);
      try {
        const response = await mutateAsync(formData);
        console.log("response from contact", response);
        if (response?.status) {
          toast.success(response?.message);
          setName("");
          setPhone("");
        }
      } catch (error) {
        handlePromisError(error);
      }
    }
  };
  return {
    states: {
      name,
      phone,
    },
    handlers: {
      handleNameChange,
      handlePhoneChange,

      handleSubmit,
    },
    isPending,
  };
};
export default useNewsLetterLogic;
