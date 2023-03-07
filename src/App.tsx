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
      </main>
      <Footer />
    </>
  );
}

export default App;
