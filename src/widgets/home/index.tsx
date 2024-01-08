import { FadeInAnimation } from "@/shared/ui/animations";
import { FeaturesSection, IntroSection } from "./ui";

export default function HomePage() {
  return (
    <main className=" overflow-x-hidden">
      <FadeInAnimation>
        <IntroSection />
      </FadeInAnimation>

      <FadeInAnimation direction="right">
        <FeaturesSection />
      </FadeInAnimation>
    </main>
  );
}
