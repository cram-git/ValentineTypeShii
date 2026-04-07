function greetTypeShii() {
    const name = "Honey Sugarplum ko";
    let index = 0;
    let greetName = document.querySelector('#greet-name');

    let panot = `Hi, ${name}! I love you.`;

    function greetTrish() {
        if (index < panot.length) {
            greetName.innerHTML += panot[index];
            index++;
            setTimeout(greetTrish, 50);
        }
    }
    greetTrish();
}

function animation() {
    let welcome = document.querySelector('#welcome');
    let mainContent = document.querySelector('#main');

    welcome.addEventListener('click', () => {
        // Remove hidden from main so it is fully present beneath welcome
        mainContent.classList.remove('hidden');

        welcome.classList.add('fade-out');

        setTimeout(() => {
            welcome.style.display = 'none';
        }, 800);
    });
}

//kapag nag load hindi na babalik sa welcome page
function saveLoad() {
    let welcome = document.getElementById("welcome");
    let main = document.getElementById("main"); // Fixed ID

    // check kung nakapasok na
    if (localStorage.getItem("visited")) {
        welcome.style.display = "none";
        main.classList.remove("hidden");
    }

    welcome.addEventListener("click", () => {
        localStorage.setItem("visited", "true");

        main.classList.remove("hidden");
        welcome.classList.add("fade-out");

        setTimeout(() => {
            welcome.style.display = "none";
        }, 800);
    });
}

function imageSlide() {
    const images = document.querySelectorAll('.img-cards img');
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('prev');

    let currentIndex = 0;

    function updateSlider() {
        images.forEach((img, i) => {
            let offset = i - currentIndex;

            img.style.transform = `
            translate(-50%, -50%)
            translateX(${offset * 120}px)
            rotate(${offset * 6}deg)
            scale(${offset === 0 ? 1 : 0.8})
        `;

            img.style.zIndex = 10 - Math.abs(offset);
            img.style.opacity = Math.abs(offset) > 3 ? 0 : 1;
        });
    }

    nextBtn.addEventListener("click", () => {
        if (currentIndex === images.length - 1) {
            const picBox = document.querySelector('.pic-box');

            picBox.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            nextBtn.style.transition = 'opacity 0.8s ease';
            prevBtn.style.transition = 'opacity 0.8s ease';

            picBox.classList.add('fade-out');
            nextBtn.style.opacity = '0';
            prevBtn.style.opacity = '0';

            setTimeout(() => {
                picBox.style.display = 'none';
                nextBtn.style.display = 'none';
                prevBtn.style.display = 'none';

                const modal = document.getElementById('endModal');
                modal.classList.remove('hidden');
                void modal.offsetWidth;
                modal.classList.add('fade-in');
            }, 800);

            return;
        }

        currentIndex = (currentIndex + 1) % images.length;
        updateSlider();
    });

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlider();
    });

    updateSlider();

    // const closeModalBtn = document.getElementById('closeEndModal');
    // if (closeModalBtn) {
    //     closeModalBtn.addEventListener('click', () => {
    //         const modal = document.getElementById('endModal');
    //         modal.classList.remove('fade-in');
    //         modal.classList.add('fade-out');
    //         setTimeout(() => {
    //             modal.style.display = 'none';
    //         }, 800);
    //     });
    // }
}

function nodalChoices() {
    let noCount = 0;

    document.querySelector('#closeEndModal').addEventListener('click', (e) => {
        noCount++;
        let noBtn = e.target;

        let wrapper = document.getElementById('no-wrapper');
        let msgSpan = document.getElementById('no-msg');
        if (!wrapper) {
            wrapper = document.createElement('div');
            wrapper.id = 'no-wrapper';
            wrapper.style.display = 'inline-flex';
            wrapper.style.alignItems = 'center';
            wrapper.style.gap = '10px';
            wrapper.style.zIndex = '1000';

            noBtn.parentNode.insertBefore(wrapper, noBtn);
            wrapper.appendChild(noBtn);

            msgSpan = document.createElement('span');
            msgSpan.id = 'no-msg';
            msgSpan.style.fontWeight = 'bold';
            wrapper.appendChild(msgSpan);
        }

        noBtn.innerText = "No";

        if (noCount === 1) {
            msgSpan.innerText = "Anong ayaw?";
            document.querySelector('#yes').style.fontSize = '30px';
        } else if (noCount === 2) {
            msgSpan.innerText = "nahhh honey yes dapat?";
            document.querySelector('#yes').style.fontSize = '40px';
        } else if (noCount === 3) {
            msgSpan.innerText = "Yes nganiii!";
            document.querySelector('#yes').style.fontSize = '50px';
        } else if (noCount === 4) {
            msgSpan.innerText = "Nope yes dapat piliin mo!";
            wrapper.style.position = 'absolute';
            wrapper.style.left = Math.random() * (window.innerWidth - 200) + 'px';
            wrapper.style.top = Math.random() * (window.innerHeight - 50) + 'px';
        } else if (noCount === 5) {
            msgSpan.innerText = "Please? :(";
            wrapper.style.position = 'absolute';
            wrapper.style.left = Math.random() * (window.innerWidth - 200) + 'px';
            wrapper.style.top = Math.random() * (window.innerHeight - 50) + 'px';
        } else if (noCount >= 6) {
            document.getElementById('sabog').innerText = 'Bawal na click yung NO :c';
            noBtn.disabled = true;
            noBtn.style.color = 'grey';
            msgSpan.innerText = "Broken";
        }
    });

    document.querySelector('#yes').addEventListener('click', () => {
        document.querySelector('#question').innerText = "Yownnn! DAHIL JAN DADALHIN KITA SA PENTHOUSE.";
        for (let i = 0; i < 100; i++) {
            let heart = document.createElement('div');
            heart.className = 'heart';
            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.animationDuration = Math.random() * 2 + 3 + 's'; //between 3 and 5 secs
            heart.style.animationDelay = Math.random() * 2 + 's'; // eto 0 and 2. di ko sure kung sure na
            document.body.appendChild(heart);
        }
        document.querySelector('#yes').style.display = 'none';
        document.querySelector('#closeEndModal').style.display = 'none';
    });
}

nodalChoices();
imageSlide();

// saveLoad();
animation();
greetTypeShii();