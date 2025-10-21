"use client";
import { LoginForm } from "./LoginForm";



interface AuthModalProps {
  mode: "login" | "register";
  onClose: () => void;
}


export default function AuthModal ({ mode, onClose } : AuthModalProps) {

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl shadow-lg max-w-md w-full p-6 relative">
        {/* Botón de cerrar */}
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Contenido del modal según mode */}
        {mode === "login" ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  )
}