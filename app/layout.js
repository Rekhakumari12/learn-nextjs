export const metadata = {
  title: {
    template: "%s | Technical Agency",
    default: "Technical Agency",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ backgroundColor: "pink" }}>Header</header>
        {children}
        <footer style={{ backgroundColor: "pink" }}>Footer.</footer>
      </body>
    </html>
  );
}
