import { useState } from "react";
import {
  LayoutGrid,
  FolderKanban,
  CheckSquare,
  Calendar,
  Check,
} from "lucide-react";

const initialTasks = [
  { id: 1, text: "Design homepage", done: true },
  { id: 2, text: "Review pull request", done: false },
  { id: 3, text: "Write release notes", done: false },
  { id: 4, text: "Prep client walkthrough", done: false },
];

const sidebarItems = [
  { label: "Overview", icon: LayoutGrid, active: false },
  { label: "Projects", icon: FolderKanban, active: false },
  { label: "Tasks", icon: CheckSquare, active: true },
  { label: "Calendar", icon: Calendar, active: false },
];

function ProductPreview() {
  const [tasks, setTasks] = useState(initialTasks);

  const doneCount = tasks.filter((t) => t.done).length;

  function toggleTask(id) {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  }

  return (
    <div
      className="w-full max-w-[440px] mx-auto lg:mx-0 rounded-2xl border border-line bg-surface shadow-[0_20px_50px_-15px_rgba(22,33,29,0.18)] overflow-hidden"
      role="img"
      aria-label="FlowDesk dashboard preview showing today's focused tasks"
    >
      <div className="flex items-center justify-between border-b border-line px-4 sm:px-5 py-3.5">
        <span className="font-display text-sm text-ink">FlowDesk</span>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted hidden sm:inline">Ravi</span>
          <span className="h-6 w-6 rounded-full bg-forest text-white text-[10px] font-mono flex items-center justify-center">
            RV
          </span>
        </div>
      </div>

      <div className="flex">
        <nav className="flex flex-col gap-1 border-r border-line px-2 sm:px-3 py-4 w-14 sm:w-36 shrink-0">
          {sidebarItems.map(({ label, icon: Icon, active }) => (
            <div
              key={label}
              className={`flex items-center gap-2.5 rounded-lg px-2 sm:px-2.5 py-2 text-xs ${
                active ? "bg-forest-light text-forest-dark font-medium" : "text-muted"
              }`}
            >
              <Icon size={15} strokeWidth={2} className="shrink-0" />
              <span className="hidden sm:inline">{label}</span>
            </div>
          ))}
        </nav>

        <div className="flex-1 min-w-0 px-4 sm:px-5 py-4">
          <p className="text-xs sm:text-sm text-muted">Good morning, Ravi</p>
          <h3 className="mt-0.5 font-display text-base sm:text-lg text-ink">Today&apos;s focus</h3>

          <div className="mt-3.5 grid grid-cols-2 gap-2.5">
            <div className="rounded-xl border border-line bg-paper px-3 py-2.5">
              <p className="font-mono text-lg sm:text-xl text-ink leading-none">
                {String(tasks.length).padStart(2, "0")}
              </p>
              <p className="mt-1 text-[11px] text-muted">Tasks</p>
            </div>
            <div className="rounded-xl border border-line bg-paper px-3 py-2.5">
              <p className="font-mono text-lg sm:text-xl text-forest leading-none">
                {String(doneCount).padStart(2, "0")}
              </p>
              <p className="mt-1 text-[11px] text-muted">Done</p>
            </div>
          </div>

          <ul className="mt-4 space-y-1.5">
            {tasks.map((task) => (
              <li key={task.id}>
                <button
                  type="button"
                  onClick={() => toggleTask(task.id)}
                  className="w-full flex items-center gap-2.5 rounded-lg px-2 py-2 text-left hover:bg-paper transition-colors cursor-pointer"
                  aria-pressed={task.done}
                >
                  <span
                    className={`flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[5px] border transition-colors ${
                      task.done ? "bg-forest border-forest" : "border-line bg-surface"
                    }`}
                  >
                    {task.done && <Check size={12} strokeWidth={3} className="text-white" />}
                  </span>
                  <span
                    className={`text-sm transition-colors ${
                      task.done ? "text-muted line-through" : "text-ink"
                    }`}
                  >
                    {task.text}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductPreview;
