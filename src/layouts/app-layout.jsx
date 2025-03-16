import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function AppLayout({ children }) {
    return (
        <div className="d-flex flex-column min-dvh-100">
            <Navbar />
            <main className="flex-grow-1">
                <div className="container py-3">{children}</div>
            </main>
            <Footer />
        </div>
    );
}
