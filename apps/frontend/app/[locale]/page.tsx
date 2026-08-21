
import HeroSection from "@/components/layout/hero";
import OurCommunitySection from "@/components/layout/OurCommunitySection";
import OurMissionSection from "@/components/layout/OurMissionSection";
import OurProgramsSection from "@/components/layout/OurProgramsSection";
export default function Home(){
    return(
        <main className="pt-3 flex flex-col">
            <HeroSection/>
            <OurProgramsSection/>
            <OurCommunitySection/>
        </main>
        
    )
}