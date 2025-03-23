import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: "Ecommerce",
	description: "Ecommerce landing page created by Cameron Conway",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className={inter.variable}>
			<body className='antialiased'>
				<Header />
				<main className='mx-auto max-w-screen-lg'>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
