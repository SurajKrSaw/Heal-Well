import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t bg-teal-100">
      <div className="mx-auto max-w-7xl px-6 pt-12">
        {/* Brand */}
        <div className="mb-10">
          <Link href="/">
            <h2 className="text-2xl font-semibold tracking-tight text-green-700">
              HEAL WELL
            </h2>
          </Link>

          <p className="mt-2  text-slate-600">
            Professional healthcare services at home.
          </p>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 gap-10 border-b border-teal-200 pb-10 md:grid-cols-3">
          {/* Quick Links */}
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-green-900">
              Quick Links
            </h2>

            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-green-700"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="transition-colors hover:text-green-700"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="transition-colors hover:text-green-700"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/how-it-works"
                  className="transition-colors hover:text-green-700"
                >
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-green-900">
              Services
            </h2>

            <ul className="space-y-3 text-sm text-slate-600">
              <li>Nursing Care</li>
              <li>Attendant Care</li>
              <li>Elder Care</li>
              <li>Post-Hospital Care</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-green-900">
              Contact
            </h2>

            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                📞{" "}
                <a
                  href="tel:9608511491"
                  className="transition-colors hover:text-green-700"
                >
                  9608511491
                </a>
              </li>

              <li>
                📧{" "}
                <a
                  href="mailto:sanjaykumar86698@gmail.com"
                  className="transition-colors hover:text-green-700"
                >
                  sanjaykumar86698@gmail.com
                </a>
              </li>

              <li>
                📍{" "}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Kokar%2C%20Ranchi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-green-700"
                >
                  Kokar, Ranchi
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex gap-3 pt-6 text-sm text-slate-600 md:items-center justify-between">
          <p>© 2026 Heal Well</p>

          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-green-700">
              Privacy
            </Link>

            <Link href="/terms" className="hover:text-green-700">
              Terms
            </Link>
          </div>
        </div>

        {/* Developer Credit */}
        <Link
          href="https://wa.me/918340451897"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-bold  "
        >
          <p className="my-6 p-3 bg-teal-300 text-center text-xs rounded-lg hover:bg-teal-400">
            Developed by -{" "}
            <span className="font-bold text-md font-bold">SURAJ KUMAR SAW</span>
          </p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
