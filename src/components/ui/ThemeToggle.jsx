import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function ThemeToggle() {

  const [dark, setDark] = useState(true);

  return (

    <button
      onClick={() => setDark(!dark)}
      className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center"
    >
      {dark ? <Sun size={20} /> : <Moon size={20} />}
    </button>

  );

}