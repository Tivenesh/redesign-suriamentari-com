import Link from "next/link"

export function Footer() {
  return (
    <footer id="contact" data-cursor="dark" className="bg-white text-black py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-6">SURIAMENTARI</h3>
            {/* Updated description to match the company's focus */}
            <p className="text-gray-600 mb-6 leading-relaxed">
              A leading agency in the maintenance and cleaning industry, focused on satisfying customer requirements with the latest technology.
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
            {/* Updated services to match the services page */}
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-gray-600 hover:text-black transition-colors">
                  Carpet Care
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-black transition-colors">
                  Waste Disposal
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-black transition-colors">
                  Build Care
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-black transition-colors">
                  Office Care
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-black transition-colors">
                  Trans Care
                </Link>
              </li>
               <li>
                <Link href="/services" className="text-gray-600 hover:text-black transition-colors">
                  Home Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            {/* Updated with official contact information */}
            <div className="space-y-3 text-gray-600">
              <p>info@suriamentari.com</p>
              <p>+603-5192 8113</p>
              <p>Shah Alam, Selangor</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">Copyright 2025 Design by BuildUrWeb</p>
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