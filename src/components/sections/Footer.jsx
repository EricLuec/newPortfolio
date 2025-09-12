'use client'
export const Footer = ({ name = "Alex", year = 2024 }) => (
  <footer className="py-8 px-6 border-t border-gray-800">
    <div className="max-w-4xl mx-auto text-center">
      <p className="text-gray-400">
        © {year} {name} Developer. Crafted with 💙 using Next.js & Tailwind CSS
      </p>
    </div>
  </footer>
);