document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll(".typing");
    let currentIndex = 0;

    function typeNextElement() {

        if (currentIndex >= elements.length) {
            return; // all done
        }

        const el = elements[currentIndex];
        const text = el.getAttribute("data-text");
        const words = text.split(" ");
        let wordIndex = 0;

        el.textContent = ""; // clear existing text

        const interval = setInterval(() => {
            if (wordIndex < words.length) {
                el.textContent += words[wordIndex] + " ";
                wordIndex++;
            } else {
                clearInterval(interval);

                // move to next line after small pause
                currentIndex++;
                setTimeout(typeNextElement, 600);
            }
        }, 220); // typing speed
    }

    typeNextElement(); // start typing
});
