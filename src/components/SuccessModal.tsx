import router from "next/router";

interface SuccessModalProps {
  message: string;
  onClose: () => void;
  redirectTo?: string;
}

<<<<<<< HEAD
export default function SuccessModal({
  message,
  onClose,
  redirectTo,
}: SuccessModalProps) {
=======
export default function SuccessModal({ message, onClose, redirectTo }: SuccessModalProps) {
    
>>>>>>> 623ba91ed32aefa91ad5c14e68bcf2aa8a29ff48
  const handleButtonClick = () => {
    onClose();
    if (redirectTo) {
      router.push("/login");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full text-center">
        <h2 className="text-2xl font-bold mb-4">✅ Éxito</h2>
        <p className="mb-6">{message}</p>
        <button
          onClick={handleButtonClick}
          className="bg-sky-500 text-white px-4 py-2 rounded hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Ir a login
        </button>
      </div>
    </div>
  );
}
