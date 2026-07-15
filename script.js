const navLinks = Array.from(document.querySelectorAll(".site-nav a"));
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    navLinks.forEach((link) => {
      link.classList.toggle(
        "is-active",
        link.getAttribute("href") === `#${visible.target.id}`,
      );
    });
  },
  { rootMargin: "-20% 0px -65% 0px", threshold: [0.1, 0.35, 0.6] },
);

sections.forEach((section) => observer.observe(section));

const copyButton = document.querySelector("#copyEmail");

copyButton?.addEventListener("click", async () => {
  const email = "844414645@qq.com";
  try {
    await navigator.clipboard.writeText(email);
    copyButton.textContent = "已复制";
    setTimeout(() => {
      copyButton.textContent = "复制邮箱";
    }, 1400);
  } catch {
    window.location.href = `mailto:${email}`;
  }
});
