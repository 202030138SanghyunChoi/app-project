import RootHeader from "./components/RootHeader";
import RootFooter from "./components/RootFooter";
import NavBar from "./components/NavBar";

export const metadata = {
  title: "Next.js Page",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <RootHeader />
        <NavBar />
        <main>{children}</main>
        <RootFooter />
      </body>
    </html>
  );
}
