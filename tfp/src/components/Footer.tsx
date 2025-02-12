import { Facebook, Linkedin, Twitter, Youtube, Instagram } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-[#A17E46y] text-white py-6">
            <div className="max-w-7xl mx-auto px-4">
                {/* Top section with copyright and logo */}
                <div className="flex justify-between items-center mb-4">
                    <p className="text-sm">©2023 TFP</p>
                    <div className="text-2xl font-bold">TFP</div>
                </div>

                {/* Divider line */}
                <div className="w-full h-px bg-white/30 mb-4"></div>

                {/* Bottom section with nav and social */}
                <div className="flex justify-between items-center">
                    {/* Navigation links */}
                    <div className="flex gap-8">
                        <a href="#" className="text-sm hover:underline">
                            Home
                        </a>
                        <a href="#" className="text-sm hover:underline">
                            About
                        </a>
                        <a href="#" className="text-sm hover:underline">
                            Contact
                        </a>
                    </div>

                    {/* Social icons */}
                    <div className="flex gap-4">
                        <a href="#" className="hover:opacity-80 transition-opacity">
                            <Facebook className="w-4 h-4" />
                        </a>
                        <a href="#" className="hover:opacity-80 transition-opacity">
                            <Linkedin className="w-4 h-4" />
                        </a>
                        <a href="#" className="hover:opacity-80 transition-opacity">
                            <Twitter className="w-4 h-4" />
                        </a>
                        <a href="#" className="hover:opacity-80 transition-opacity">
                            <Youtube className="w-4 h-4" />
                        </a>
                        <a href="#" className="hover:opacity-80 transition-opacity">
                            <Instagram className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}