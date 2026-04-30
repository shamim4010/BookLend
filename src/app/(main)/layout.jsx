import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Header/Navbar/Navbar";

export default function MainLayout({ children }) {
    return (
        <>
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />

        </>
    );
}