export function WhatsAppButton() {
  const phoneNumber = "919791397392";
  const message = encodeURIComponent("Hello Arun Online Services,");
  const wpLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={wpLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#1ebe57] transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Contact us on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-7 h-7 fill-current"
      >
        <path d="M11.97 2.005a10.027 10.027 0 00-8.58 15.03l-1.39 5.087 5.234-1.37A10.032 10.032 0 1011.97 2.005zm0 18.046a8.01 8.01 0 01-4.086-1.118l-.292-.174-3.036.795.811-2.955-.192-.304A8.026 8.026 0 1111.97 20.051zm4.394-5.996c-.24-.12-1.425-.705-1.644-.785-.22-.08-.38-.12-.54.12-.16.24-.62.785-.76.945-.14.16-.28.18-.52.06-.24-.12-1.018-.376-1.94-1.2-.716-.64-1.2-1.43-1.34-1.67-.14-.24-.015-.37.105-.49.108-.108.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.305-.74-1.785-.195-.47-.395-.405-.54-.415-.14-.01-.3-.01-.46-.01-.16 0-.42.06-.66.32-.24.26-.92.895-.92 2.18s.94 2.53 1.07 2.71c.13.18 1.83 2.83 4.49 3.96 2.37 1.01 2.66.8 3.14.76.48-.04 1.425-.585 1.625-1.145.2-.56.2-.104.14-.114-.06-.01-.22-.03-.46-.15z" />
      </svg>
      {/* Optional tooltip */}
      <span className="absolute right-full mr-4 bg-white text-black text-xs font-semibold px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg pointer-events-none">
        Chat with us!
      </span>
    </a>
  );
}
