export function Footer() {
  const y = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <p>
          © {y} Muhammad Zain Sohail · MERN Stack Developer · Crafted with React & attention to
          detail.
        </p>
      </div>
    </footer>
  );
}
