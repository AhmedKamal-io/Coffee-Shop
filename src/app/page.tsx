import NavBar from "@/Components/NavBar";
import Home from "@/Components/Home";
import NewRelease from "@/Components/NewRelease";
import Contact from "@/Components/Contact";
import Testimonials from "@/Components/Testimonials";
import Blog from "@/Components/Blog";
// import Navbottom from "@/Components/Navbottom";
export default function page() {
  return (
    <div className="">
      <NavBar />
      {/* <Navbottom /> */}
      <Home />
      <NewRelease />

      <Testimonials />
      <Blog />
      <Contact />
    </div>
  );
}
