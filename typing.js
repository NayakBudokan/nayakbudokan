document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll(".typing");
    const cursor = document.querySelector(".cursor");

    let currentIndex = 0;

    function typeElement() {
        if (currentIndex >= elements.length) {
            cursor.remove(); // stop cursor after finish
            return;
        }

        const el = elements[currentIndex];
        const text = el.getAttribute("data-text");
        const words = text.split(" ");
        let i = 0;

        el.textContent = "";
        el.appendChild(cursor);

        const interval = setInterval(() => {
            if (i < words.length) {
                el.insertBefore(
                    document.createTextNode(words[i] + " "),
                    cursor
                );
                i++;
            } else {
                clearInterval(interval);
                currentIndex++;
                setTimeout(typeElement, 600);
            }
        }, 220);
    }

    typeElement();
});
