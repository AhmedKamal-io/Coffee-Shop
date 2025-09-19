import NavBar from "@/Components/NavBar";
import Home from "@/Components/Home";
import NewRelease from "@/Components/NewRelease";
import Contact from "@/Components/Contact";
// import Navbottom from "@/Components/Navbottom";
export default function page() {
  return (
    <div className="">
      <NavBar />
      {/* <Navbottom /> */}
      <Home />
      <NewRelease />
      <Contact />
    </div>
  );
}
