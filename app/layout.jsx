import "./globals.css";

export const metadata = {
  title: "MIMI PICK | The Perfect Pick is Coming",
  description: "Mimi Pick landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
