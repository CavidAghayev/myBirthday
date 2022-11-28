const giftbox = document.querySelector(
    ".giftbox"
)
const cover = document.querySelector(
    ".cover"
)
const box = document.querySelector(
    ".box"
)
giftbox.addEventListener("click", () => {
    cover.classList.add(
        "top"
        );
    box.classList.add(
        "bottom"
    )
    setTimeout(() => {
   
    document.querySelector(
        ".animate"
    ).classList.add(
        "scale"
    )

    }, 5000);
})




