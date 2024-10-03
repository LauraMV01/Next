import { inter } from '@/app/ui/fonts';
import '@/app/ui/global.css';
import { sql } from '@vercel/postgres';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        layout
        {children}
        <footer className='flex justify-center items-center py-10'>
          hecho con mucho amor
        </footer>
      </body>
    </html>
  );
}
