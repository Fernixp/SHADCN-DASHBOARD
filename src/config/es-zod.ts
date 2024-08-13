import i18next from "i18next";
import { z as zod } from "zod";
import { zodI18nMap } from "zod-i18n-map";
// Importa el archivo de traducción para el idioma español
import translation from "zod-i18n-map/locales/es/zod.json";

// Configura i18next con el idioma y las traducciones
i18next.init({
  lng: "es", // Idioma (puedes cambiarlo según el idioma que necesites)
  resources: {
    es: { zod: translation }, // Aquí se define el recurso de traducción para Zod
  },
});

// Configura Zod para usar el mapa de traducción de zod-i18n-map
zod.setErrorMap(zodI18nMap);

// Exporta la instancia de Zod configurada
export { zod };
