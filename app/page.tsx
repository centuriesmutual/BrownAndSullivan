import { LetterheadHero } from "@/components/sections/home/letterhead-hero";
import { NoticeToConsumers } from "@/components/sections/home/notice-to-consumers";
import { PracticeAreas } from "@/components/sections/home/practice-areas";
import { Engagement } from "@/components/sections/home/engagement";
import { TheRecord } from "@/components/sections/home/the-record";
import { LicensureAppointments } from "@/components/sections/home/licensure-appointments";
import { ComplianceProgram } from "@/components/sections/home/compliance-program";
import { Retainer } from "@/components/sections/home/retainer";

export default function HomePage() {
  return (
    <>
      <LetterheadHero />
      <NoticeToConsumers />
      <PracticeAreas />
      <Engagement />
      <TheRecord />
      <LicensureAppointments />
      <ComplianceProgram />
      <Retainer />
    </>
  );
}
