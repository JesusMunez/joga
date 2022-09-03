function form() {
    const forms = document.querySelectorAll('form');

    let message = {
        loading: 'Загрузка',
        success: 'Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так'
    };

    forms.forEach(item => {
        postData(item);
    });

    function postData(form) {
        form.addEventListener('submit', function(event){
            event.preventDefault();

            statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            form.appendChild(statusMessage);
    
            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            let formData = new FormData(form);
    
            let obj = {};
            formData.forEach((val, key) => {
                obj[key] = val;
            });
            let json = JSON.stringify(obj);
    
            request.send(json);
    
            request.addEventListener('readystatechange', function(){
                if (request.readyState < 4) {
                    statusMessage.innerHTML = message.loading;
                } else if (request.readyState == 4 && request.status == 200) {
                    statusMessage.innerHTML = message.success;
                    form.reset();
                } else {
                    statusMessage.innerHTML = message.failure;
                }
            });            
        });
    }
}

export default form;