import Link from "next/link"

export function Footer() {
  return (
    // Add the data-cursor="dark" attribute here
    <footer id="contact" data-cursor="dark" className="bg-white text-black py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-6">SURIAMENTARI</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              A full service agency focused on Strategy, Media, Design, Content, and Technology. We redefine excellence
              in digital innovation and creative solutions.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-black transition-colors">
                LinkedIn
              </Link>
              <Link href="#" className="text-gray-600 hover:text-black transition-colors">
                Twitter
              </Link>
              <Link href="#" className="text-gray-600 hover:text-black transition-colors">
                Instagram
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-600 hover:text-black transition-colors">
                  Strategy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-black transition-colors">
                  Media
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-black transition-colors">
                  Design
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-black transition-colors">
                  Content
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-black transition-colors">
                  Technology
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-3 text-gray-600">
              <p>hello@suriamentari.com</p>
              <p>+1 (555) 123-4567</p>
              <p>New York, NY</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">Copyright 2024 Design by Suriamentari</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-500 hover:text-black text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-500 hover:text-black text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Cookie Notice */}
        <div className="mt-8 p-4 bg-gray-100 rounded-lg flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-700 mb-4 md:mb-0">
            This website uses cookies, by continuing to use this website you consent to the use of cookies.
          </p>
          <div className="flex space-x-4">
            <button className="text-sm text-gray-700 hover:text-black transition-colors">Close</button>
            <button className="text-sm text-black hover:text-gray-600 transition-colors">More Information →</button>
          </div>
        </div>
      </div>
    </footer>
  )
}