//CardNews melhorado
class CardNews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  build() {
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");

    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card__left");

    const autor = document.createElement("span");
    autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

    const linkTitle = document.createElement("a");
    linkTitle.textContent = this.getAttribute("title");
    linkTitle.href = this.getAttribute("link-url");

    const newsContent = document.createElement("p");
    newsContent.textContent = this.getAttribute("content");

    cardLeft.appendChild(autor);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(newsContent);

    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card__right");

    const newsImage = document.createElement("img");
    newsImage.src = this.getAttribute("photo") || "assets/default-img.avif";
    newsImage.alt = "Foto da noticia";
    cardRight.appendChild(newsImage);

    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    return componentRoot;
  }

  styles() {
    const style = document.createElement("style");
    style.textContent = `
    .card{
        width: 50%;
        justify-content: space-between;
        display: flex;
        flex-direction: row;
        box-shadow: 5px 5px 10px -2px rgba(0,0,0,0.74);
        -webkit-box-shadow: 5px 5px 10px -2px rgba(0,0,0,0.74);
        -moz-box-shadow: 5px 5px 10px -2px rgba(0,0,0,0.74);
    }

    .card__left{
        display: flex;
        flex-direction: column ;
        justify-content: center;
        padding-left: 12px;
    }

    .card__left > a {
        margin-top: 10px;
        font-size: 25px;
        color: black;
        text-decoration: none;
        font-weight: bold;
    }

    .card__left > p {
        color: rgb(94, 92, 92);
    }

    .card__left > span {
        font-weight: 400;
    }

    .card__right > img{
        width: 300px;
    }
    `;

    return style
  }
}

customElements.define("card-news", CardNews);
