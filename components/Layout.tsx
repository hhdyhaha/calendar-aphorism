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
            <div className="flex h-screen">
                <AppSidebar />
                <div className="flex flex-col flex-1 overflow-auto">
                    <Navbar />
                    <main className="flex-1 overflow-auto p-4">{children}</main>
                    <Footer />
                </div>
            </div>
        </SidebarProvider>
    );
}