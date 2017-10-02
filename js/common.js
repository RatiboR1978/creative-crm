(function() {
    let contacts = document.querySelector('.user__contacts'),
        divAll = document.querySelectorAll('.user__info-edit'),
        inputAll = document.querySelectorAll('.user__input'),
        pAll = document.querySelectorAll('.user__contacts-item > p');

    contacts.addEventListener('click', function (event) {
        for(let i = 0; i < pAll.length; i++) {
            pAll[i].style.display = 'block';
            divAll[i].style.display = 'none';
            if(event.target === pAll[i]) {
                pAll[i].style.display = 'none';
                divAll[i].style.display = 'block';
                inputAll[i].focus();
                inputAll[i].addEventListener('blur', function () {
                    console.log(inputAll[i].value);
                    pAll[i].innerHTML = inputAll[i].value;
                    pAll[i].style.display = 'block';
                    divAll[i].style.display = 'none';
                });
                inputAll[i].addEventListener('keyup', function (e) {
                    if(e.keyCode === 13) {
                        pAll[i].innerHTML = inputAll[i].value;
                        pAll[i].style.display = 'block';
                        divAll[i].style.display = 'none';
                    }
                })
            }
        }
    });
}());

