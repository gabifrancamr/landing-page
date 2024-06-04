import { Contact } from "./contact";
import { Header } from "./header";
import { Hero } from "./hero";
import { Services } from "./services";

export function Gamma() {
  return (
    <div className="container w-full h-full z-10">
      <Header />
      <Hero />
      <Services />
      <Contact />
    </div>
  );
}
