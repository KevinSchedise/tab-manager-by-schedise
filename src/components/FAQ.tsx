
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  faqs: FAQItem[];
  title?: string;
  className?: string;
};

const FAQ = ({ faqs, title, className = "" }: FAQProps) => {
  return (
    <div className={`rounded-lg border border-gray-200 p-6 bg-white ${className}`}>
      {title && <h3 className="text-xl font-bold mb-6">{title}</h3>}
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 last:border-b-0">
            <AccordionTrigger className="text-left font-medium py-4 hover:text-schedise-indigo">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 pt-1 pb-4">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
