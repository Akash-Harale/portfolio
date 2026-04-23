import { Rocket, Github, Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-indigo-500/10 bg-slate-50/50 dark:bg-slate-950/50 relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <Link href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight font-display">
              Akash<span className="text-indigo-600">.dev</span>
            </span>
          </Link>

          <div className="flex items-center gap-6">
            {[
              { icon: Github, href: "https://github.com/Akash-Harale", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/akash-v-harale/", label: "LinkedIn" },
              { icon: Twitter, href: "https://x.com/akash_v_harale", label: "Twitter" },
              { icon: Mail, href: "mailto:akash.v.harale@gmail.com", label: "Email" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <social.icon className="w-5 h-5" />
                <span className="sr-only">{social.label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Akash Harale. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <span className="text-red-500">❤️</span> by Akash using <span className="font-semibold text-foreground">Next.js & Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
}