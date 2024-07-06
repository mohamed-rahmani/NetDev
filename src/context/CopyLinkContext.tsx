import { createContext, Dispatch, SetStateAction } from "react";

// Définir le type pour le contexte
interface CopyLinkContextType {
  copyNotificationVisible: boolean;
  setCopyNotificationVisible: Dispatch<SetStateAction<boolean>>;
}

// Créer le contexte avec une valeur par défaut
export const CopyLinkContext = createContext<CopyLinkContextType>({
  copyNotificationVisible: false,
  setCopyNotificationVisible: () => {}, // Placeholder to avoid errors
});
