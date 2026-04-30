import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Header/Navbar/Navbar";

export default function MainLayout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />

        </>
    );
}