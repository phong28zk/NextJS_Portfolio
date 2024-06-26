"use client";
import { useRouter } from "next/navigation";

import { motion } from "framer-motion";
import {
  slideInFromTop,
} from "@/utils/motion";

import { sendEmail } from "@/lib/providers/send-email";

import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { SparklesIcon } from "lucide-react";

const Contact = () => {

  const router = useRouter();
  const { toast } = useToast();
  const currentTime = new Date();
  const formattedTime = currentTime.toLocaleTimeString();
  
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className={`flex flex-col items-center justify-center mt-20 px-20 w-full h-full z-[20]`}
    >
      <motion.div
        variants={slideInFromTop(0.5)}
        className={`Welcome-box py-2 px-4 border border-green-500 opacity-[0.9]`}
      >
        <SparklesIcon className={`h-5 w-5 text-green-500 inline-block mr-2`} />
        <h1 className={`text-[14px] text-washed-blue-400`}>Contacts</h1>
      </motion.div>
      <motion.div
        variants={slideInFromTop(0.5)}
      >
      <form
        className="mt-10 flex flex-col w-[20rem]"
        action = {async(formData) => {
          await sendEmail(formData);
          router.push("/intro");
          toast({
            title: "Email sent",
            description: `Your email has been sent successfully at ${formattedTime}`,
            duration: 3000,
          });
        }}
      >
        <input
          type="email"
          placeholder="Email"
          name="senderEmail"
          className="border border-gray-400 p-2 mb-4 rounded-md"
          required
          maxLength={500}
        />
        <input
          type="title"
          placeholder="Title"
          name="title"
          className="border border-gray-400 p-2 mb-4 rounded-md"
          required
          maxLength={500}
        />
        <textarea
          placeholder="Message"
          name="message"
          className="border border-gray-400 p-2 mb-4 rounded-md"
          required
          maxLength={500}
        />
        <Button
          type="submit"
          className="bg-green-500 text-white p-2 mt-4"
        >
          Send
        </Button>

      </form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;