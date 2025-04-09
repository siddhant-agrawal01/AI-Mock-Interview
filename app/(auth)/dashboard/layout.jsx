import { ThemeProvider } from "../../../lib/ThemeContext";
import Header from "./_components/Header";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <div className="pt-[80px] px-4 sm:px-6 md:px-8 lg:px-10 max-w-full transition-colors duration-200">
        <ThemeProvider>{children}</ThemeProvider>
      </div>
    </div>
  );
}
