        /* =========================
           MOBILE MENU
        ========================= */

        function toggleMenu() {

            const nav = document.getElementById("navLinks");

            nav.classList.toggle("active");

        }


        /* Close mobile menu after clicking */

        document.querySelectorAll(".nav-links a").forEach(link => {

            link.addEventListener("click", () => {

                document
                    .getElementById("navLinks")
                    .classList.remove("active");

            });

        });


        /* =========================
           SCROLL REVEAL
        ========================= */

        const revealElements =
            document.querySelectorAll(".reveal");


        function revealOnScroll() {

            revealElements.forEach(element => {

                const windowHeight =
                    window.innerHeight;

                const elementTop =
                    element.getBoundingClientRect().top;

                if (elementTop < windowHeight - 100) {

                    element.classList.add("active");

                }

            });

        }


        window.addEventListener(
            "scroll",
            revealOnScroll
        );


        revealOnScroll();


        /* =========================
           COUNTERS
        ========================= */

        let countersStarted = false;


        function startCounters() {

            if (countersStarted) return;

            const stats =
                document.querySelector(".stats");

            const position =
                stats.getBoundingClientRect().top;

            if (position < window.innerHeight - 100) {

                countersStarted = true;

                document
                    .querySelectorAll(".counter")
                    .forEach(counter => {

                        const target =
                            Number(
                                counter.getAttribute("data-target")
                            );

                        let current = 0;

                        const increment =
                            Math.ceil(target / 60);

                        const updateCounter = () => {

                            current += increment;

                            if (current >= target) {

                                counter.textContent =
                                    target + "+";

                            } else {

                                counter.textContent =
                                    current;

                                setTimeout(
                                    updateCounter,
                                    30
                                );

                            }

                        };

                        updateCounter();

                    });

            }

        }


        window.addEventListener(
            "scroll",
            startCounters
        );


        /* =========================
           HEADER EFFECT
        ========================= */

        window.addEventListener("scroll", function() {

            const header =
                document.querySelector("header");

            if (window.scrollY > 80) {

                header.style.boxShadow =
                    "0 5px 25px rgba(0,0,0,0.3)";

            } else {

                header.style.boxShadow = "none";

            }

        });
