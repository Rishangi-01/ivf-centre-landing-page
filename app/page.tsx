import AboutSection from "@/components/home/AboutSection";
import BookNowForm from "@/components/home/BookNowForm";
import ContactForm from "@/components/home/ContactForm";
import FAQSection from "@/components/home/FAQSection";
import HeroSection from "@/components/home/HeroSection";
import MedicalServices from "@/components/home/MedicalServices";
import TeamSection from "@/components/home/TeamSection";
import TreatmentProcess from "@/components/home/TreatmentProcess";
import WellnessGallery from "@/components/home/WellnessGallery";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <HeroSection />
      <AboutSection/>
      <MedicalServices />
      <WhyChooseUs />
      <TeamSection />
      <TreatmentProcess />
      <WellnessGallery />
      <FAQSection />
      <BookNowForm />
      <ContactForm />
    </div>
  );
}
