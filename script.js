//dark mode script
document.documentElement.classList.toggle(
  "dark",
  localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches),
);
// Whenever the user explicitly chooses light mode
localStorage.theme = "light";
// Whenever the user explicitly chooses dark mode
localStorage.theme = "dark";
// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem("theme");

function toggleDarkMode() {
<<<<<<< HEAD
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.theme = isDark ? "dark" : "light";
}
=======
const isDark = document.documentElement.classList.toggle
("dark");
localStorage. theme = isDark ? "dark": "light"
}
>>>>>>> 96bce72497760fc63684f2e042a814d3f3bb75be
