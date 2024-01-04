document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("nav a");

  for (const link of links) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const target = document.querySelector(targetId);
      const targetPosition = target.offsetTop;

      window.scrollTo({
        top: targetPosition - 100,
        behavior: "smooth",
      });
    });
  }
});
