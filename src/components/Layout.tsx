import Navbar from "./NavBar";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col items-center min-h-screen w-full">
      {/* changing this div changes the width of everything */}
      <div className="flex flex-col w-[65%]">
        <Navbar />
        <div  className="flex flex-col items-center justify-center py-28 w-full">
          <main
            id="main"
            className="w-[98%]"
          >
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
