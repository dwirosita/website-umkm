const form = document.querySelector("form");
const preview = document.getElementById("preview");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value;

    preview.textContent =
        "Terima kasih, " + nama + ". Pesan Anda siap dikirim.";
});