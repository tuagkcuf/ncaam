import "./globals.css";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="mt-60">{children}</body>
        </html>
    );
}
