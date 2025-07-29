'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ChevronDown, Phone, Mail, MapPin, Bot } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const faqAnswers: Record<string, string> = {
  'What is Shedula?':
    'Shedula is a mobile app that helps you find doctors and book appointments easily. You can search for doctors, view their profiles, and see when they’re available. We even have an AI feature that recommends doctors based on your symptoms!',
  'How do I cancel an appointment?':
    "To cancel your appointment, go to the 'Appointments' section in the app, select the appointment you wish to cancel, and tap the 'Cancel' button. Please note that appointments can be rescheduled up to one hour before the scheduled time. If it’s less than an hour, you can only cancel.",
  'Why can I not book an appointment?':
    "There are a couple of reasons why you might not be able to book an appointment. Either the doctor is fully booked for that day, or they haven’t published their schedule yet. Please try another day or doctor.",
  'Why are there no appointment slots available?':
    "It means that the doctor is either fully booked for that day or hasn’t published their schedule yet. Please check again later or try a different doctor.",
};

const faqQuestions = Object.keys(faqAnswers);

function FaqItem({ question }: { question: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionItem value={question}>
      <AccordionTrigger onClick={handleToggle}>
        <span className="flex-1 text-left">{question}</span>
      </AccordionTrigger>
      <AccordionContent>
        <div className="flex gap-4">
          <Bot className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
          <p className="text-muted-foreground">{faqAnswers[question]}</p>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

export default function HelpAndSupportPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col h-screen bg-muted/40">
      <header className="bg-background p-4 flex items-center gap-4 border-b fixed top-0 left-0 right-0 z-10">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => router.back()}
        >
          <ArrowLeft />
        </Button>
        <h1 className="text-xl font-bold">Help and support</h1>
      </header>
      <main className="flex-1 overflow-y-auto pt-20 p-4">
        <Tabs defaultValue="faq" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>
          <TabsContent value="faq" className="pt-4">
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqQuestions.map((q) => (
                <FaqItem key={q} question={q} />
              ))}
            </Accordion>
          </TabsContent>
          <TabsContent value="contact" className="pt-4">
            <div className="space-y-4">
              <Card>
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Call us</p>
                    <a
                      href="tel:+19874561238"
                      className="text-muted-foreground"
                    >
                      +1 98745 61238
                    </a>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Email us</p>
                    <a
                      href="mailto:support@shedula.com"
                      className="text-muted-foreground"
                    >
                      support@shedula.com
                    </a>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-muted-foreground">
                      123 Health St, Wellness City, 54321
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
