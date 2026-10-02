/**
 * Consistent page wrapper — matches the max-width and padding of the site header.
 */
export default function PageContainer({ children, className = "" }) {
  return (
    <main className={`max-w-2xl mx-auto px-6 pb-16 animate-fade-in-up ${className}`}>
      {children}
    </main>
  );
}
