// Countdown to 29 June 2026 09:00
            const target = new Date("2026-06-29T09:00:00");
            function updateCountdown() {
                const now = new Date();
                const diff = target - now;
                if (diff <= 0) {
                    document.getElementById("cd-days").textContent = "0";
                    document.getElementById("cd-hours").textContent = "0";
                    document.getElementById("cd-min").textContent = "0";
                    document.getElementById("cd-sec").textContent = "0";
                    return;
                }
                const d = Math.floor(diff / 86400000);
                const h = Math.floor((diff % 86400000) / 3600000);
                const m = Math.floor((diff % 3600000) / 60000);
                const s = Math.floor((diff % 60000) / 1000);
                document.getElementById("cd-days").textContent = String(
                    d,
                ).padStart(2, "0");
                document.getElementById("cd-hours").textContent = String(
                    h,
                ).padStart(2, "0");
                document.getElementById("cd-min").textContent = String(
                    m,
                ).padStart(2, "0");
                document.getElementById("cd-sec").textContent = String(
                    s,
                ).padStart(2, "0");
            }
            updateCountdown();
            setInterval(updateCountdown, 1000);

            // Active nav link on scroll
            const sections = document.querySelectorAll("section[id]");
            const navLinks = document.querySelectorAll(".nav-links a");
            window.addEventListener("scroll", () => {
                let current = "";
                sections.forEach((s) => {
                    if (window.scrollY >= s.offsetTop - 100) current = s.id;
                });
                navLinks.forEach((a) => {
                    a.style.color =
                        a.getAttribute("href") === "#" + current
                            ? "var(--teal-light)"
                            : "";
                });
            });
