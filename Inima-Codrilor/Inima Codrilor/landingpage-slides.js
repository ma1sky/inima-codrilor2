//-----Changing slides on landing page

let slideCounter = 1;
let galleryItem = document.querySelectorAll(".landing__gallery-item");

galleryItem.forEach((item, index) => {
    item.onclick = function () {
        slideCounter = index;
        document.querySelectorAll(".landing__gallery-item_active").forEach(other => {
            other.classList.toggle("landing__gallery-item_active");
        });
        item.classList.toggle("landing__gallery-item_active");
    }
});

setInterval(changeGalleryItem, 2500);

function changeGalleryItem() {
    document.querySelectorAll(".landing__gallery-item_active").forEach(other => {
        other.classList.toggle("landing__gallery-item_active");
    });
    galleryItem[slideCounter].classList.add("landing__gallery-item_active");
    slideCounter++;
    if ( slideCounter === 5 ) { slideCounter = 0 };
};