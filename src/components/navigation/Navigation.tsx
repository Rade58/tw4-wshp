import type { PropsWithChildren } from "react";

function Link({ title }: PropsWithChildren & { title: string }) {
  return (
    <li className="group border-slate-900-300 border-b-4 bg-indigo-200 p-0.5">
      <a href="#" className="p-1 group-hover:bg-indigo-400">
        {title}
      </a>
    </li>
  );
}

export function Navigation(_props: PropsWithChildren) {
  return (
    <nav className="flex items-center justify-between border-b-4 border-b-slate-700">
      <a href="/" className="text-sm font-extrabold">
        Unicorn Corp
      </a>
      <ul className="flex gap-8">
        <Link title="Home" />
        <Link title="About" />
        <Link title="Services" />
        <Link title="Contact" />
      </ul>
    </nav>
  );
}
