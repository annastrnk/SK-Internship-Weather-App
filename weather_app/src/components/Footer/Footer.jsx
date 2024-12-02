import "./Footer.scss";

export default function Footer() {
  const getYear = new Date().getFullYear();

  return (
    <section className="footer-block">
      <p className="footer-info normal-font ">Your Name {getYear}</p>
    </section>
  );
}
