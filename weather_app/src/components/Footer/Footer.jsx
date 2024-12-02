import "./Footer.scss";

export default function Footer() {
  const getYear = new Date().getFullYear();
  const yourName = "Anna Starenka";

  return (
    <section className="footer-block">
      <p className="footer-info main-font ">
        {yourName} {getYear}
      </p>
    </section>
  );
}
