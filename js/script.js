"use strict";
window.addEventListener("DOMContentLoaded", () => {
    let email = document.querySelector('.email');
    let submitBtn = document.querySelector('.btn-submit');

    console.log(email.value)
    submitBtn.addEventListener('click', function () {
        if (!email.value) {
            email.setAttribute("placeholder", 'Enter address')
            console.log('error')
        } else {
            console.log(email.value)
        }
    })

    class Card {
        constructor(img, alt, title, descr, userLogo, userAlt, userName, datePublication, parentSelector, ...classes) {
            this.img = img;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.userLogo = userLogo;
            this.userAlt = userAlt;
            this.userName = userName;
            this.datePublication = datePublication;
            this.parentSelector = document.querySelector(parentSelector)
            this.classes = classes
        }

        render() {
            const element = document.createElement("div")
            if (this.classes.length === 0) {
                this.classes = "card"
                element.classList.add(this.classes)
            } else {
                this.classes.forEach(className => element.classList.add(className))
            }
            element.innerHTML = `
            <img src=${this.img} class="card-img-top" alt=${this.alt}>
                    <div class="card-body">
                        <h5 class="card-title">${this.title}</h5>
                        <p class="card-text">${this.descr}</p>
                    </div>
                    <div class="card-footer">
                        <div class="d-flex align-items-center">
                            <img src=${this.userLogo} alt=${this.userAlt}>
                            <p>${this.userName}</p>
                        </div>
                        <div class="d-flex align-items-center">
                            <p>${this.datePublication}</p>
                        </div>
                    </div>
            `
            this.parentSelector.append(element)
        }
    }

    async function getResources(url) {
        let res = await fetch(url)
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }
        return await res.json()
    }

    getResources("http://localhost:3000/posts")
        .then(data => data.forEach(({img, altimg, title, descr, userLogo, userAlt, userName, datePublication}) => {
            new Card(img, altimg, title,
                descr, userLogo, userAlt, userName, datePublication,
                ".catalog-container").render()
        }))

})
