import './globals.css'; 

export const metadata = {
  title: 'EricLuec Portfolio',
  description: 'NextJS-Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}