class cardNews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());

    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");
        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous"); 
        const linktitle = document.createElement("a");
        linktitle.textContent = this.getAttribute("title");
        linktitle.href = this.getAttribute("link-url");
        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linktitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_rigth");
        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "/assets/default-profile-picture1.jpg";
        newsImage.alt = "Foto da noticia";
        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);        

        return componentRoot;
    }

    styles(){
        const style = document.createElement("style");
        style.textContent = `
        .card{
            width: 100%;    
            display: flex;
            flex-direction: row;
            padding-right: 25px;
            -webkit-box-shadow: 9px 10px 27px -4px rgba(5,5,5,1);
            -moz-box-shadow: 9px 10px 27px -4px rgba(5,5,5,1);
            box-shadow: 9px 10px 27px -4px rgba(5,5,5,1);
            justify-content: space-between;
        } 
        .card_left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 10px;
        }
        .card_left > span{
            font-weight: 400;
        }
        .card_left > a{
            margin-top: 15px;
            font-size: 25px;
            color: black;
            text-decoration: none;
            font-weight: bold;
        }
        .card_left > p{
            color: rgb(70, 70, 70);
        }
        
        `;
        return style;

    }
}

customElements.define("card-news", cardNews);