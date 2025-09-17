import Link from "next/link"

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-6">SURIAMENTARI</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              A full service agency focused on Strategy, Media, Design, Content, and Technology. We redefine excellence
              in digital innovation and creative solutions.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                LinkedIn
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                Twitter
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                Instagram
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Strategy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Media
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Design
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Content
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Technology
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-3 text-gray-300">
              <p>hello@suriamentari.com</p>
              <p>+1 (555) 123-4567</p>
              <p>New York, NY</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">Copyright 2024 Design by Suriamentari</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Cookie Notice */}
        <div className="mt-8 p-4 bg-gray-800 rounded-lg flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300 mb-4 md:mb-0">
            This website uses cookies, by continuing to use this website you consent to the use of cookies.
          </p>
          <div className="flex space-x-4">
            <button className="text-sm text-gray-300 hover:text-white transition-colors">Close</button>
            <button className="text-sm text-white hover:text-gray-300 transition-colors">More Information →</button>
          </div>
        </div>
      </div>
    </footer>
  )
}
