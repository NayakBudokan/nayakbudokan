document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll(".typing");
    let currentIndex = 0;

    function typeElement() {
        if (currentIndex >= elements.length) return;

        const el = elements[currentIndex];
        const text = el.getAttribute("data-text");

        if (!text) {
            currentIndex++;
            typeElement();
            return;
        }

        const words = text.split(" ");
        let i = 0;

        el.textContent = "";
        el.style.opacity = "1";        // 👈 makes it visible

        const interval = setInterval(() => {
            if (i < words.length) {
                el.textContent += words[i] + " ";
                i++;
            } else {
                clearInterval(interval);
                currentIndex++;
                setTimeout(typeElement, 700);
            }
        }, 180);
    }

    typeElement();
});
