"use client"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from '../ui/use-toast';
import { sendEmail } from '@/actions/sendEmail';

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(1, "Message is required")
});

type ContactFormData = z.TypeOf<typeof contactSchema>;

export default function Contact() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const { toast } = useToast();

  const onSubmit = () => { 
    toast({
      title: 'Message sent successfully',
      description: 'Thank you!',
    });
  };

  return (
    <div className="bg-black w-full">
      <main className="container mx-auto px-4 py-16">
        <section className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
          <Form {...form}>
            <form action={async (formData) => { await sendEmail(formData) }} className="space-y-6">
              <FormField name="name" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} className="focus:border-white"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField name="email" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Enter your email address" {...field} className="focus:border-white" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField name="message" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <textarea rows={6} placeholder="Type your message here..." {...field} className="w-full placeholder-slate-500 resize-none px-3 py-2 border bg-zinc-800 border-gray-300 rounded-lg focus:outline-none focus:border-white" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <Button type="submit" onClick={onSubmit} className="px-6 py-3 bg-purple-500 rounded-md text-lg font-medium hover:bg-purple-600 transition-colors">
                Send Message
              </Button>
            </form>
          </Form>
        </section>
      </main>
    </div>
  );
}
