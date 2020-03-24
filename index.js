import createElement from './utils/createElement'
function fotitos() {
    
}
const $app = document.getElementById('app')
var i = 1;
function imagenes() {
    const style = createElement('style', { src: ''}, ['*{margin:0;font-size:0}'])
    const img1 = createElement('img', { src: 'https://picsum.photos/100/200?random=' + (i++) }, [''])
    const img2 = createElement('img', { src: 'https://picsum.photos/100/200?random=' + (i++) }, [''])
    const img3 = createElement('img', { src: 'https://picsum.photos/300/200?random=' + (i++) }, [''])
    const img4 = createElement('img', { src: 'https://picsum.photos/100/200?random=' + (i++) }, [''])
    const img5 = createElement('img', { src: 'https://picsum.photos/100/200?random=' + (i++) }, [''])
    const img6 = createElement('img', { src: 'https://picsum.photos/200/200?random=' + (i++) }, [''])
    const img7 = createElement('img', { src: 'https://picsum.photos/300/300?random=' + (i++) }, [''])
    const img8 = createElement('img', { src: 'https://picsum.photos/100/300?random=' + (i++) }, [''])
    const img9 = createElement('img', { src: 'https://picsum.photos/300/300?random=' + (i++) }, [''])
    const img10 = createElement('img', { src: 'https://picsum.photos/200/300?random=' + (i++) }, [''])

    const container = createElement('div', { id: 'container',style: 'width:900px' }, [style,img1,img2,img3,img4,img5,img6,img7,img8,img9,img10])
    console.log(container)
    $app.innerHTML = '';
    $app.appendChild(container);
}
imagenes()
setInterval(imagenes, 10000)
