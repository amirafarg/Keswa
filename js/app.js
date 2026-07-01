let burgerMenue = document.querySelector(".burger-menue");
let sectionHdr = document.querySelector(".js-menue");
let closeMenu = document.querySelector(".close-menu");
let header = document.querySelector(".bottom-hdr");

burgerMenue.addEventListener("click", () => {
    sectionHdr.classList.add("show");
    header.classList.add("hide");

})

closeMenu.addEventListener("click", () => {
    sectionHdr.classList.remove("show");
    header.classList.remove("hide");
});
// _____________________
// header

let colors = document.querySelectorAll(".dot");
let mainImg = document.querySelector(".big-photo img");
let smlPh = document.querySelectorAll(".sml-ph img");

// // اسماء الصور ومكانها
let imges = {
    black: ["./img/black.webp", "./img/black-2.webp", "./img/black-3.webp"],
    grey: ["./img/white.webp", "./img/white-2.webp", "./img/white-3.webp"],
    green: ["./img/ment-green.webp", "./img/green-2.webp", "./img/green-3.webp"],
    brown: ["./img/brown.webp", "./img/brown-2.webp", "./img/brown-3.webp"]
};

colors.forEach(color => {
    color.addEventListener("click", () => {

        // نشيل active من كل الألوان
        colors.forEach(c => c.classList.remove("active"));

        // نحطها على اللي اتضغط عليه
        color.classList.add("active");
        let selected = color.dataset.color;

        console.log(selected);

        // الصورة الكبيرة
        mainImg.src = imges[selected][0];

        // الصور الصغيرة
        smlPh.forEach((img, index) => {
            img.src = imges[selected][index];
        });

    });
});

// zoom-the-big-photo
let zoomImg = document.getElementById("bigImg");
let bigPhoto = document.querySelector(".big-photo");

bigPhoto.addEventListener("mousemove", (e) => {

    let rect = bigPhoto.getBoundingClientRect();

    let x = ((e.clientX - rect.left) / rect.width) * 100;
    let y = ((e.clientY - rect.top) / rect.height) * 100;

    zoomImg.style.transformOrigin = `${x}% ${y}%`;
    zoomImg.style.transform = "scale(2)";
});

bigPhoto.addEventListener("mouseleave", () => {
    zoomImg.style.transformOrigin = "center";
    zoomImg.style.transform = "scale(1)";
});

// عند الضغط على الصوره الصغيره تظهر في الكبيره
smlPh.forEach((img) => {

    img.addEventListener("click", () => {

        bigImg.src = img.src;
        bigImg.alt = img.alt;

        // border-black

        smlPh.forEach((item) => {
            item.classList.remove("active");
        });

        img.classList.add("active");

    });

});

// تثبيت الbottom header
let bottomHdr = document.querySelector(".bottom-hdr");
let placeholder = document.createElement("div");

window.addEventListener("scroll", () => {
    let height = bottomHdr.offsetHeight;

    if (window.scrollY > 80) {
        bottomHdr.classList.add("fixed");

        placeholder.style.height = height + "px";
        bottomHdr.parentNode.insertBefore(placeholder, bottomHdr);
    } else {
        bottomHdr.classList.remove("fixed");

        if (placeholder.parentNode) {
            placeholder.remove();
        }
    }
});

// بوكس الارقام
// let sizes = document.querySelectorAll("flex-size span")

// sizes.forEach((size) => {
//     size.addEventListener("click", () => {

//         // نشيل active من الكل
//         sizes.forEach(s => s.classList.remove("active"));

//         // نحط active على اللي اتداس عليه
//         size.classList.add("active");

//     });
// })

// htmlجاهز اولا
document.addEventListener("DOMContentLoaded", () => {

    let sizes = document.querySelectorAll(".flex-size span");

    sizes.forEach((size) => {

        size.addEventListener("click", () => {

            sizes.forEach(s => s.classList.remove("active"));

            size.classList.add("active");

        });

    });

});

// add-remove-items
let btnMinus = document.querySelector(".btn-minus");
let btnPlus = document.querySelector(".btn-plus");
let numInput = document.querySelector(".css-input");

btnPlus.addEventListener("click", () => {
    numInput.value++;
})

btnMinus.addEventListener("click", () => {
    if (numInput.value > 1) {
        numInput.value--;
    }
});

// add-to-cardt-to-bag
let addCart = document.querySelector(".add-cart");
let bagShoping = document.querySelector(".fa-bag-shopping");
let countCart = document.querySelector(".cart-count");

addCart.addEventListener("click", (e) => {
    e.preventDefault();

    countCart.textContent = numInput.value;

    // the-better
    // countCart.textContent =
    // Number(countCart.textContent) + Number(numInput.value);
})

// section-1-appear & disappear
let discription = document.querySelector(".discription");
let morDe = document.querySelector(".more-de");
let pDiscription = document.querySelector(".p-discription-js");
let pMorInfo = document.querySelector(".p-morinfo-js");

discription.addEventListener("click", () => {
    pDiscription.classList.add("active");
    pMorInfo.classList.remove("active");

    // add-line
    discription.classList.add("active");
    morDe.classList.remove("active");
});

morDe.addEventListener("click", () => {
    pMorInfo.classList.add("active");
    pDiscription.classList.remove("active");

    // add-line
    morDe.classList.add("active");
    discription.classList.remove("active");
})

// MOBILEEEEEEEEEEEEEEEEEE
function isMobile() {
    return window.innerWidth <= 700;
}

if (isMobile()) {

    const discription = document.querySelector(".discription");
    const morDe = document.querySelector(".more-de");

    const pDiscription = document.querySelector(".p-discription-js");
    const pMorInfo = document.querySelector(".p-morinfo-js");

    // بداية: كله مقفول
    pDiscription.classList.remove("active");
    pMorInfo.classList.remove("active");

    discription.addEventListener("click", () => {

        const isOpen = pDiscription.classList.contains("active");

        // نقفل التاني الأول
        pMorInfo.classList.remove("active");
        morDe.classList.remove("active");

        // toggle الحالي
        if (isOpen) {
            pDiscription.classList.remove("active");
            discription.classList.remove("active");
        } else {
            pDiscription.classList.add("active");
            discription.classList.add("active");
        }

    });

    morDe.addEventListener("click", () => {

        const isOpen = pMorInfo.classList.contains("active");

        // نقفل الأول
        pDiscription.classList.remove("active");
        discription.classList.remove("active");

        // toggle الحالي
        if (isOpen) {
            pMorInfo.classList.remove("active");
            morDe.classList.remove("active");
        } else {
            pMorInfo.classList.add("active");
            morDe.classList.add("active");
        }

    });

}