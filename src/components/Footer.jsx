export const Footer = () => {
  return (
    <footer className="mt-20 py-6 text-center text-sm text-stone-600 border-t border-stone-300">
      <p>
        &copy; {new Date().getFullYear()} Gabriella Andrade. All rights
        reserved.
      </p>
      <p className="mt-1">Built with ❤️ using React & Tailwind CSS</p>
    </footer>
  );
};
