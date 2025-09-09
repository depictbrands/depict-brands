import React from "react";

export default function Footer() {
  return (
    <footer className="bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-6 md:grid-cols-3 text-sm">
        <div>
          <div className="font-semibold">Depict Brands, Inc.</div>
          <div className="mt-2 text-black/70">
            15 Channel Center St., Boston, MA 02210
          </div>
          <div className="mt-1 text-black/70">alexandra@depictbrands.com</div>
          <div className="mt-1 text-black/70">617 702 2763</div>
        </div>
        <div>
          <div className="font-semibold">Hours</div>
          <div className="mt-2 text-black/70">Monday – Friday</div>
          <div className="text-black/70">9am – 5pm</div>
        </div>
        <div>
          <div className="font-semibold">Subscribe</div>
          <form className="mt-2 flex gap-2">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 rounded-md border border-black/15 px-3 py-2 text-sm"
            />
            <button
              type="submit"
              className="rounded-md bg-black text-white px-4 py-2 text-sm"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-black/10 text-xs text-black/60 py-4 px-6">
        <div className="mx-auto max-w-7xl">© {new Date().getFullYear()} Depict Brands. All rights reserved.</div>
      </div>
    </footer>
  );
}
