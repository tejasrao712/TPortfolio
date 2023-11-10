import React from 'react';

function ScrollToBottomButton() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  const handleScroll = () => {
    const scrollToBottomButton = document.getElementById('scrollToBottom');
    if (window.pageYOffset > 0) {
      scrollToBottomButton.classList.add('show');
    } else {
      scrollToBottomButton.classList.remove('show');
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <a href="#bottom" id="scrollToBottom" className="scroll-button" onClick={scrollToBottom}>
      <div className="scroll-button-icon">
        <span className="arrow"></span>
      </div>
    </a>
  );
}

export default ScrollToBottomButton;
