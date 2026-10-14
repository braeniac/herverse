import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'H.E.R | Heal Exhale Reconnect', description: 'A welcoming space for women to heal, exhale, reconnect and experience life together.' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html> }
