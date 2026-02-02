import type { Metadata } from "next"
import { ContactContent } from "@/components/contact/contact-content"

export const metadata: Metadata = {
  title: "Contact | VESPERA",
  description: "Connect with VESPERA. Visit our atelier, schedule a private consultation, or reach out to our team for inquiries.",
}

export default function ContactPage() {
  return <ContactContent />
}
