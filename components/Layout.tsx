import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { ReactNode } from "react";
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <div className="flex flex-col min-h-screen w-full">
                <Navbar />
                <main className="flex-grow">{children}</main>
                <Footer />
            </div>
        </SidebarProvider>
    );
}