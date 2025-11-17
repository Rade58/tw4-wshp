import type { PropsWithChildren } from "react";

export function ExerciseSix(_props: PropsWithChildren) {
  return (
    <section className="border border-slate-400 p-4">
      <div>
        <input type="checkbox" className="peer" id="folder" />
        <label htmlFor="folder">Folder</label>

        <ul className="pl-4 peer-checked:pointer-events-none peer-checked:opacity-50">
          <li>
            <input type="checkbox" id="file1" />
            <label htmlFor="file1">File1</label>
          </li>
          <li>
            <input type="checkbox" id="file2" />
            <label htmlFor="file2">File2</label>
          </li>
          <li>
            <input type="checkbox" id="file3" />
            <label htmlFor="file3">File3</label>
          </li>
        </ul>
      </div>
      <div>
        <input type="checkbox" className="peer" id="folder2" />
        <label htmlFor="folder2">Folder</label>

        <ul className="pl-4 peer-checked:pointer-events-none peer-checked:opacity-50">
          <li>
            <input type="checkbox" id="file11" />
            <label htmlFor="file11">File1</label>
          </li>
          <li>
            <input type="checkbox" id="file22" />
            <label htmlFor="file22">File2</label>
          </li>
          <li>
            <input type="checkbox" id="file33" />
            <label htmlFor="file33">File3</label>
          </li>
        </ul>
      </div>
    </section>
  );
}
