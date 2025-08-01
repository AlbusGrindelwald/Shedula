
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  Stethoscope,
  CalendarCheck,
  User,
  BrainCircuit,
} from 'lucide-react';
import { useState, useEffect } from 'react';

import { cn } from '@/lib/utils';

const navItems = [
  { href: '/dashboard', label: 'Home', icon: Home },
  { href: '/dashboard/doctors', label: 'Doctors', icon: Stethoscope },
  { href: '/dashboard/appointments', label: 'Appointments', icon: CalendarCheck },
  { href: '/dashboard/recommend', label: 'AI', icon: BrainCircuit },
  { href: '/dashboard/profile', label: 'Profile', icon: User },
];

function BottomNavBar() {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t z-50">
      <div className="grid grid-cols-5 h-16">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} passHref>
            <div className={cn(
              "flex flex-col items-center justify-center h-full gap-1 transition-colors hover:bg-accent/50 hover:text-primary",
              pathname === item.href ? 'text-primary' : 'text-muted-foreground'
            )}>
              <item.icon className="h-6 w-6" />
              <span className="text-xs">{item.label}</span>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-background">
      <main className="pb-20">{children}</main>
      <BottomNavBar />
    </div>
  );
}
