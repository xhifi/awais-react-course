import Navigation from "../Navigation/Main";
import Footer from "../Footer";

export default function MainLayout({ children }) {
  return (
    <div>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}
