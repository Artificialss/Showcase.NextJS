import { Mail } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { GithubIcon, LinkedinIcon, XIcon, YoutubeIcon } from "@/components/ui/social-icons";

const socialLinks = [
  { href: "mailto:info@artificialss.ai", platform: "Email", Icon: Mail },
  { href: "https://github.com/Artificialss", platform: "GitHub", Icon: GithubIcon },
  { href: "https://x.com/ArtificialssAI", platform: "X / Twitter", Icon: XIcon },
  { href: "https://www.linkedin.com/company/Artificialss", platform: "LinkedIn", Icon: LinkedinIcon },
  { href: "https://www.youtube.com/@Artificialss", platform: "YouTube", Icon: YoutubeIcon },
] as const;

export function Footer() {
  return (
    <footer className="py-8 md:py-12 border-t border-border bg-background" id="contact">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <Logo className="h-12 w-12" animated={false} />
            <span className="font-bold text-xl font-headline">Artificialss</span>
          </div>

          <div className="flex gap-4">
            {socialLinks.map(({ href, platform, Icon }) => (
              <a
                key={platform}
                href={href}
                target={platform === "Email" ? undefined : "_blank"}
                rel={platform === "Email" ? undefined : "noopener noreferrer"}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={platform}
                title={platform}
              >
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Artificialss. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
