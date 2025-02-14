import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (

        <div className="flex flex-col min-h-screen">
                <Navbar /> 
                <main className="flex-grow">{children}</main>
                <Footer />
        </div>
    );
}