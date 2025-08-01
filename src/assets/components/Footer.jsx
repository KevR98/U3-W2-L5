const Footer = function () {
  return (
    <footer
      className='text-center bg-black text-white footer-height'
      data-bs-theme='dark'
    >
      <p>EPICODE - {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
