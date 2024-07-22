import FeatureCourses from "@/component/FeatureCourses";
import Footer from "@/component/Footer";
import GridCard from "@/component/GridCard";
import HeroSection from "@/component/HeroSection";
import Instructor from "@/component/Instructor";
import UpCommingWebinars from "@/component/UpCommingWebinars";


export default function Home() {
  return (
     <main className="min-h-screen  antialiased ">
        <HeroSection/>
        <FeatureCourses/>
        <GridCard/>
        <UpCommingWebinars/>
        <Instructor/>
        <Footer/>
     </main>
  );
}
