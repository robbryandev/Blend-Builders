export default function Footer() {
  return (
    <footer id="footer" className="w-full min-h-[20vh] bg-black pb-12">
      <h2 className="p-4 text-2xl text-center text-white md:text-3xl text-shadow">
        Contact Us
      </h2>
      <p className="text-lg font-semibold text-center text-white">
        Email:{" "}
        <a className="font-normal text-md" href="mailto:robbryandev@gmail.com">
          robbryandev@gmail.com
        </a>
      </p>
      <p className="text-lg font-semibold text-center text-white">
        Phone: <span className="font-normal text-md">971-284-6154</span>
      </p>
      <p className="text-lg font-semibold text-center text-white">
        LinkedIn:{" "}
        <a
          className="font-normal text-md"
          href="https://www.linkedin.com/in/robbryandev/"
        >
          linkedin.com/in/robbryandev
        </a>
      </p>
      <p className="text-lg font-semibold text-center text-white">
        Github:{" "}
        <a
          className="font-normal text-md"
          href="https://github.com/robbryandev"
        >
          github.com/robbryandev
        </a>
      </p>
    </footer>
  );
}
