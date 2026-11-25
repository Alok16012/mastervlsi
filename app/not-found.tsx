import Link from "next/link";

export default function NotFound() {
  return (
    <section className="on-dark">
      <div className="wrap py-32">
        <p className="eyebrow">Error 404</p>
        <h1 className="display t-hero mt-6">This page failed timing closure.</h1>
        <p className="lede muted mt-8">The address you opened does not exist. Head back and try another route.</p>
        <Link href="/" className="btn btn-primary mt-10">Back to home →</Link>
      </div>
    </section>
  );
}
