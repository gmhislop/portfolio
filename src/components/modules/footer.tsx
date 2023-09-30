export const Footer = () => {
  return (
    <footer className="px-4 mb-10 text-center text-gray-500">
      <small className="block mb-2 text-xs">
        &copy; {new Date().getFullYear()}
        {' Giovanni Hislop - All rights reserved.'}
      </small>
      <p className="text-xs uppercase">
        <span className="font-semibold uppercase">About this website:</span> built with React &
        Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email
        & Resend, Vercel Hosting.
      </p>
    </footer>
  );
};
