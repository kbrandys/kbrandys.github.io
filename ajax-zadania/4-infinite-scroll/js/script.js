let endOfThePage = 0;
let preloading = false;
let preloader = document.getElementById('preloader');

const showPreloader = () => {
    preloader.style.display = 'block';
}

const hidePreloader = () => {
    preloader.style.display = 'none';
}

const getData = () => {
        if (!preloading) {
        showPreloader();

        fetch('https://akademia108.pl/api/ajax/get-users.php')
            .then(res => res.json())
            .then(data => {
    
                let body = document.body;
                  
                for (let user of data) {
                    let pId = document.createElement('p');
                    let pName = document.createElement('p');
                    let pWebsite = document.createElement('p');
    
                    pId.innerText = `User ID: ${user.id}`;
                    pName.innerText = `User Name: ${user.name}`;
                    pWebsite.innerHTML = `User URL: ${user.pWebsite}<br />--------<br /><br />`;
    
                    body.appendChild(pId);
                    body.appendChild(pName);
                    body.appendChild(pWebsite);
                }
                hidePreloader();
            })
            .catch(error => {
                console.error(error);
            });
    }
}

const scrollToEndOfPage = () => {
    
    let d = document.documentElement;
    let scrollHeight = d.scrollHeight;
    let scrollTop = d.scrollTop;
    let clientHeight = d.clientHeight;
    let sum = Math.ceil(scrollTop + clientHeight);

    if (sum >= scrollHeight) {
        endOfThePage += 1;
        getData();
    }
};

window.addEventListener('scroll', scrollToEndOfPage);