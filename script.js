function move(){
    let element = document.getElementById('numrela');
    element.style.position = 'absolute';
    element.style.top = `${Math.random() * 50}rem`
    element.style.left = `${Math.random() * 60}rem`
    
}