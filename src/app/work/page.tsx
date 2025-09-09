import WorkCarousel from "../../components/workcarousel";

/* Simple page wrapper that renders the carousel */
export default function Page() {
  return (
    <main style={{ paddingBlock: "36px" }}>
      <h1 className="text-4xl font-bold px-6 mb-6">Food &amp; Beverage</h1>
      <WorkCarousel />
    </main>
  );
}