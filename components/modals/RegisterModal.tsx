import useLoginModal from "@/hooks/useLoginModel";
import useRegisterModal from "@/hooks/useRegisterModel";

import axios from "axios";
import { useCallback, useState } from "react";

import Input from "../Input";
import Modal from "../Modal";
import toast from "react-hot-toast";

const RegisterModal = () => {

  const loginModal = useLoginModal()
  const registerModal = useRegisterModal();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true)

      await axios.post('api/register', {
        email,
        password,
        username,
        name
      })

      toast.success(`Sucesso!`,{ position: "top-center" })

      loginModal.onClose()
    } catch (e) {
      toast.error(`Ocorreu um error ${e}`,{ position: "top-right" })

      console.log(e)
    } finally {
      setIsLoading(false)
    }

  }, [loginModal, email, password, username, name])

  const onToggle = useCallback(() => {
    if (isLoading) return

    registerModal.onClose()
    loginModal.onOpen()
  }, [loginModal, registerModal, isLoading])

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoading}
      />

      <Input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
        disabled={isLoading}
      />

      <Input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        disabled={isLoading}
      />

      <Input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={isLoading}
      />
    </div>
  )

  const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p>Já possui conta no Twitter?
        <span
          onClick={onToggle}
          className="
            text-white 
            cursor-pointer 
            hover:underline
          "
        > Acesse sua conta</span>
      </p>
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Cadastrar uma conta"
      actionLabel="Registrar-se"
      onClose={registerModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  )
}


export default RegisterModal;