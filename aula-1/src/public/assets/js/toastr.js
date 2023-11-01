function toast({ message, title, type }) {
    
    const toastr = document.createElement('div');
    toastr.classList.add('toastr');
    const h1 = document.createElement('h1');
    h1.innerText = title;
    const text = document.createElement('p');
    text.innerText = message;

    toastr.appendChild(h1);
    toastr.appendChild(text);

    document.querySelector('body').appendChild(toastr);

    setTimeout(() => {
        toastr.classList.add('toast');
        setTimeout(() => {
            toastr.classList.add('toasted');
            setTimeout( () => {
                toastr.remove();
            }, 1000);
        }, 2100);
    }, 100);
    Audi
}
