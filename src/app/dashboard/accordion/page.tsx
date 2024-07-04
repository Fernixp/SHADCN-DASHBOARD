import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordionDemo() {
  const items = [
    {
      id: "item-1",
      question: "¿Es accesible?",
      answer: "Sí. Sigue el patrón de diseño WAI-ARIA.",
    },
    {
      id: "item-2",
      question: "¿Cómo puedo empezar?",
      answer: "Puedes comenzar leyendo la documentación.",
    },
    {
      id: "item-3",
      question: "¿Puedo usarlo en múltiples proyectos?",
      answer: "Sí. Está bajo la licencia MIT.",
    },
    {
      id: "item-4",
      question: "¿Soporta características avanzadas?",
      answer: "Sí. Tiene soporte para las últimas especificaciones.",
    },
    {
      id: "item-5",
      question: "¿Es compatible con navegadores antiguos?",
      answer: "Sí. Ofrece compatibilidad con versiones anteriores.",
    },
  ];
  return (
    <Accordion type="single" className="w-full">
      {items.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
