import { ContactForm } from "components/ContactForm";
import {
  WelcomeScreen,
  CryptoScreen,
  BlogScreen,
  LocationScreen,
  ContactScreen,
  Footer,
  FaqsScreen,
} from "./screens";
import { CtaBanner } from "components";

function App() {
  return (
    <>
      <WelcomeScreen />
      <main>
        <CryptoScreen />
        <BlogScreen />
        <LocationScreen />
        <ContactScreen />
        <FaqsScreen />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}

export default App;
