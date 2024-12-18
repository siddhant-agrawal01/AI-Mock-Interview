import Header from "./_components/Header";

export default function DashboardLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="pt-20 mx-5 md:mx-20 lg:mx-36">{children}</div>
    </div>
  );
}
