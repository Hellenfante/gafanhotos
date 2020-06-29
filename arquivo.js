class gafanhoto {
            constructor() {
                this.x = 0;
                this.y = -90;
                this.baseY = Math.random() * 300;
                this.velocidadeX = Math.random() * 2 + 2;
                this.el = document.createElement('img');
                this.el.src = 'imgs/gafanhoto.gif';
                this.el.alt = 'gafanhoto';
                document.querySelector('#gafanhotos').appendChild(this.el);
            }

            movimentar() {
                this.x += this.velocidadeX;
                this.y = this.baseY + Math.cos(this.x / 30) * 10;

                if (this.x >= window.innerWidth) {
                    this.x = -90;
                    this.baseY = Math.random() * 300;
                }

                this.el.style.transform = `translate(${this.x}px, ${this.y}px)`;
            }
        }

        let gafanhotos = [new gafanhoto(), new gafanhoto(), new gafanhoto()];

        setInterval(() => {
            for (let i = 0; i < gafanhotos.length; i++) {
                gafanhotos[i].movimentar();
            }
        }, 33);

        let novoEl = document.querySelector('#novo');
        novoEl.addEventListener('click', () => {
            gafanhotos.push(new gafanhoto());
        });


    