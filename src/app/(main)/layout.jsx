import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Header/Navbar/Navbar";

export default function MainLayout({ children }) {
    return (
        <>
            <Navbar />
            <main className="flex-grow py-24 px-6 sm:px-12 md:px-24">
                {children}
            </main>
            <Footer />

        </>
    );
}