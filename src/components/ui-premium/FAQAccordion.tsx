import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
  value?: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

const FAQAccordion = ({ items, className }: FAQAccordionProps) => {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border/60 bg-card px-6 py-2 shadow-premium",
        className
      )}
    >
      <Accordion type="single" collapsible>
        {items.map((item, i) => {
          const val = item.value ?? `faq-${i}`;
          return (
            <AccordionItem
              key={val}
              value={val}
              className="border-border/50"
            >
              <AccordionTrigger className="text-left text-base font-medium text-foreground hover:text-primary hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-sm leading-7 text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default FAQAccordion;
