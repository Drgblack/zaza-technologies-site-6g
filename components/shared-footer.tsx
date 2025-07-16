import { Button } from "@/components/ui/button"
import { Shield, Lock, Heart } from "lucide-react"

interface SharedFooterProps {
  currentPage?: string
}

export default function SharedFooter({ currentPage }: SharedFooterProps) {
  const isCurrentPage = (page: string) => currentPage === page

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-200 border-t border-slate-800 dark:border-slate-700 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Zaza Branding Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img src="/zaza-logo.png" alt="Zaza Technologies" className="h-10 w-10" />
              <span className="text-xl font-bold text-white">Zaza Technologies</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Empowering teachers through emotionally intelligent AI.
            </p>
            <Button
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-medium px-6 py-2 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              asChild
            >
              <a href="/products">Explore Zaza</a>
            </Button>
          </div>

          {/* Support Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="/contact" className="text-slate-300 hover:text-white transition-colors duration-200 text-sm">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-slate-300 hover:text-white transition-colors duration-200 text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-slate-300 hover:text-white transition-colors duration-200 text-sm">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>

          {/* Trust & Security Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Trust & Security</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Shield className="h-5 w-5 text-purple-400" />
                <span className="text-slate-300 text-sm">GDPR Compliant</span>
              </li>
              <li className="flex items-center space-x-3">
                <Lock className="h-5 w-5 text-pink-400" />
                <span className="text-slate-300 text-sm">FERPA Safe</span>
              </li>
              <li className="flex items-center space-x-3">
                <Heart className="h-5 w-5 text-purple-400 fill-current" />
                <span className="text-slate-300 text-sm">Built by Educators</span>
              </li>
            </ul>
          </div>

          {/* Zaza Ecosystem Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Zaza Ecosystem</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/zaza-teach"
                  className={`transition-colors duration-200 text-sm ${
                    isCurrentPage("zaza-teach") ? "text-purple-300 font-medium" : "text-slate-300 hover:text-white"
                  }`}
                >
                  Zaza Teach
                </a>
              </li>
              <li>
                <a
                  href="/zaza-promptly"
                  className={`transition-colors duration-200 text-sm ${
                    isCurrentPage("zaza-promptly") ? "text-purple-300 font-medium" : "text-slate-300 hover:text-white"
                  }`}
                >
                  Zaza Promptly
                </a>
              </li>
              <li>
                <a
                  href="/zaza-inbox"
                  className={`transition-colors duration-200 text-sm ${
                    isCurrentPage("zaza-inbox") ? "text-purple-300 font-medium" : "text-slate-300 hover:text-white"
                  }`}
                >
                  Zaza Inbox
                </a>
              </li>
              <li>
                <a
                  href="/zaza-visuals"
                  className={`transition-colors duration-200 text-sm ${
                    isCurrentPage("zaza-visuals") ? "text-purple-300 font-medium" : "text-slate-300 hover:text-white"
                  }`}
                >
                  Zaza Visuals
                </a>
              </li>
              <li>
                <a
                  href="/zaza-claritydeck"
                  className={`transition-colors duration-200 text-sm ${
                    isCurrentPage("zaza-claritydeck")
                      ? "text-purple-300 font-medium"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  Zaza ClarityDeck
                </a>
              </li>
              <li>
                <a
                  href="/zaza-schwoop"
                  className={`transition-colors duration-200 text-sm ${
                    isCurrentPage("zaza-schwoop") ? "text-purple-300 font-medium" : "text-slate-300 hover:text-white"
                  }`}
                >
                  Zaza Schwoop
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-12 pt-8 border-t border-slate-800 dark:border-slate-700">
          <div className="text-center">
            <h4 className="text-sm font-semibold text-white mb-6 tracking-wider uppercase">Follow Us</h4>
            <div className="flex justify-center space-x-6">
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors duration-200"
                aria-label="TikTok"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors duration-200"
                aria-label="X (Twitter)"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-8 pt-8 border-t border-slate-800 dark:border-slate-700">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <p className="text-slate-400 text-sm text-center lg:text-left">
              © 2025 Zaza Technologies UG (haftungsbeschränkt). All rights reserved.
            </p>
            <p className="text-slate-400 text-sm text-center lg:text-right">
              Made with <span className="text-blue-400">💙</span> by teachers, for learners. Trusted by educators
              worldwide.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
