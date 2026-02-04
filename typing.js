document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll(".typing");

    elements.forEach(el => {

        const text = el.getAttribute("data-text");
        const words = text.split(" ");
        let index = 0;

        el.textContent = "";

        const interval = setInterval(() => {
            if (index < words.length) {
                el.textContent += words[index] + " ";
                index++;
            } else {
                clearInterval(interval);
            }
        }, 250); // speed (lower = faster)
    });

});

