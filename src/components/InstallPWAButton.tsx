import { JSX, useEffect, useState } from 'react';

// Define un tipo para el evento 'beforeinstallprompt'
// Esto asume que el evento tendrá el método 'prompt' y la promesa 'userChoice'
// Si la estructura del evento no es exactamente así en todos los navegadores, puede que
// necesites refinar este tipo. 'any' se usa aquí como un tipo de escape si no estás seguro.
// Una alternativa más precisa sería:
// type BeforeInstallPromptEvent = Event & {
//   prompt: () => void;
//   userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
// };

// Para este ejemplo, usaremos el tipo más general y seguro 'any' para el deferredPrompt,
// ya que 'BeforeInstallPromptEvent' no es un tipo global estándar en TypeScript
// y tendríamos que definirlo o importarlo de alguna biblioteca si existiera.

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type DeferredPromptType = any; 

function InstallPWAButton({children}: {children: JSX.Element}): JSX.Element {
  // El estado para controlar la visibilidad del botón es un booleano.
  const [showInstallButton, setShowInstallButton] = useState<boolean>(false);

  // El estado para almacenar el evento diferido tiene el tipo personalizado o 'null'.
  const [deferredPrompt, setDeferredPrompt] = useState<DeferredPromptType | null>(null);

  useEffect(() => {
    const handler = (e: Event): void => {
      console.log("🚀 ~ InstallPWAButton ~ e:", e);
      
      // Asegúrate de que el evento sea el esperado (aunque el listener de 'beforeinstallprompt' ya lo filtra)
      // Forzamos el tipo aquí con 'as DeferredPromptType' ya que el evento e
      // no tiene por defecto los métodos prompt() y userChoice
      const promptEvent = e as DeferredPromptType; 

      // Previene el prompt predeterminado del navegador
      promptEvent.preventDefault();
      
      // Almacena el evento para ser usado más tarde
      setDeferredPrompt(promptEvent);
      
      // Muestra el botón de instalación
      setShowInstallButton(true);
    };

    // Agregar el listener con el tipo 'any' para el evento, ya que 'beforeinstallprompt'
    // no es un evento estándar del DOM con un tipo predefinido como 'MouseEvent'.
    window.addEventListener('beforeinstallprompt', handler as EventListener);

    // Función de limpieza de useEffect
    return () => {
      window.removeEventListener('beforeinstallprompt', handler as EventListener);
    };
  }, []);

  const handleInstallClick = async (): Promise<void> => {
    // Muestra el prompt de instalación para el usuario
    console.log("🚀 ~ handleInstallClick ~ deferredPrompt:", deferredPrompt);
    
    if (deferredPrompt) {
      // Llama al método prompt()
      deferredPrompt.prompt();
      
      // Espera la respuesta del usuario
      // El resultado 'outcome' debería ser 'accepted' o 'dismissed'
      const { outcome } = await deferredPrompt.userChoice;
      console.log(`El usuario seleccionó: ${outcome}`);
      
      // Restablece el prompt para que no se muestre de nuevo
      setDeferredPrompt(null);
      setShowInstallButton(false);
    }
  };

  return (
    <>
      {showInstallButton && (
        <button  
          title="Instalar"
          style={{ border: 'none', background: 'transparent', cursor: 'pointer', padding: 10 }}
          onClick={handleInstallClick}>
            {children}
        </button>
      )}
    </>
  );
}

export default InstallPWAButton;