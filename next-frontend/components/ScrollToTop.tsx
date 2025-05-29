import { TiArrowUp } from "react-icons/ti";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className="fixed bottom-4 right-4 bg-orange-500 hover:bg-orange-700 font-bold py-2 px-4 rounded"
      onClick={scrollToTop}
    >
      <TiArrowUp/>
    </button>
  );
};

export default ScrollToTopButton;