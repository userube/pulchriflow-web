/**
 * PulchriFlow logo. The mark is the official artwork from public/pulchriflow-logo.svg
 * (same paths and colours); the wordmark is live text in the current colour so it
 * reads on both the dark nav/footer and light grounds.
 */
export function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" aria-hidden="true" focusable="false" style={{ flex: "none", display: "block" }}>
      <rect width="56" height="56" rx="14" fill="#106b5f" />
      <path d="M18 36V18h12.2c6.1 0 10.1 3.5 10.1 8.8s-4 8.8-10.1 8.8h-5.4V36H18Zm6.8-6.3h5.1c2.2 0 3.6-1.1 3.6-2.9s-1.4-2.9-3.6-2.9h-5.1v5.8Z" fill="#fff" />
      <path d="M38 36c4.7 0 8.5-3.8 8.5-8.5S42.7 19 38 19" fill="none" stroke="#f4c45f" strokeWidth="3.8" strokeLinecap="round" />
    </svg>
  );
}

export default function Logo({ size = 32 }: { size?: number }) {
  return (
    <>
      <LogoMark size={size} />
      <span>PulchriFlow</span>
    </>
  );
}
