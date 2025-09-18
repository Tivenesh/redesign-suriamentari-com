"use client" // This directive is necessary for using hooks like useState and useEffect

import Link from "next/link"
import { Instagram, Linkedin } from "lucide-react"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Footer() {
  const [cookieConsent, setCookieConsent] = useState(true)

  useEffect(() => {
    // Check local storage to see if the user has already consented
    const consent = localStorage.getItem("cookie-consent")
    if (consent) {
      setCookieConsent(true)
    } else {
      setCookieConsent(false)
    }
  }, [])

  const handleCookieConsent = () => {
    // Set consent in local storage and update state to hide the banner
    localStorage.setItem("cookie-consent", "true")
    setCookieConsent(true)
  }

  const linkHoverEffect =
    "relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-500 after:ease-in-out hover:after:w-full"
  const iconHoverEffect = "transition-all duration-500 ease-in-out hover:scale-125 hover:-rotate-12"

  return (
    <footer id="contact" data-cursor="dark" className="bg-white text-black py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-6">SURIAMENTARI</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              A leading agency in the maintenance and cleaning industry, focused on satisfying customer requirements
              with the latest technology.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/company/suria-mentari/"
                className={`text-gray-600 hover:text-black ${iconHoverEffect}`}
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.instagram.com/suriamentarigroups/?hl=am-et"
                className={`text-gray-600 hover:text-black ${iconHoverEffect}`}
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className={`text-gray-600 hover:text-black transition-colors ${linkHoverEffect}`}>
                  Carpet Care
                </Link>
              </li>
              <li>
                <Link href="/services" className={`text-gray-600 hover:text-black transition-colors ${linkHoverEffect}`}>
                  Waste Disposal
                </Link>
              </li>
              <li>
                <Link href="/services" className={`text-gray-600 hover:text-black transition-colors ${linkHoverEffect}`}>
                  Build Care
                </Link>
              </li>
              <li>
                <Link href="/services" className={`text-gray-600 hover:text-black transition-colors ${linkHoverEffect}`}>
                  Office Care
                </Link>
              </li>
              <li>
                <Link href="/services" className={`text-gray-600 hover:text-black transition-colors ${linkHoverEffect}`}>
                  Trans Care
                </Link>
              </li>
              <li>
                <Link href="/services" className={`text-gray-600 hover:text-black transition-colors ${linkHoverEffect}`}>
                  Home Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-3 text-gray-600">
              <p>info@suriamentari.com</p>
              <p>+603-5192 8113</p>
              <p>
                No. 501 Block A, Mentari Business Park,
                <br />
                Jalan PJS 8/5, Bandar Sunway,
                <br />
                46150 Petaling Jaya, Selangor
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">Copyright 2025 Design by BuildUrWeb</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className={`text-gray-500 hover:text-black text-sm transition-colors ${linkHoverEffect}`}>
                Privacy Policy
              </Link>
              <Link href="#" className={`text-gray-500 hover:text-black text-sm transition-colors ${linkHoverEffect}`}>
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Cookie Notice */}
        <AnimatePresence>
          {!cookieConsent && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mt-8 p-4 bg-gray-100 rounded-lg flex flex-col md:flex-row justify-between items-center"
            >
              <p className="text-sm text-gray-700 mb-4 md:mb-0">
                This website uses cookies, by continuing to use this website you consent to the use of cookies.
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={handleCookieConsent}
                  className="text-sm text-gray-700 hover:text-black transition-colors"
                >
                  Close
                </button>
                <button className="text-sm text-black hover:text-gray-600 transition-colors">More Information →</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </footer>
  )
}