'use client'
export const Footer = ({ name = "Eric", year = 2025 }) => (
  <footer className="py-8 px-6 border-t border-gray-800">
    <div className="max-w-4xl mx-auto text-center">
      <p className="text-gray-400">
        © {year} {name} L. Crafted on Arch Linux using Next.js & Tailwind CSS
      </p>
    </div>
  </footer>
);