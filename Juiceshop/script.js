document.addEventListener('DOMContentLoaded', function () {
    let thispage = 1;
    const limit = 6;
    const list = document.querySelectorAll('.list .item');

    function loadItems() {
        const begin = limit * (thispage - 1);
        const end = limit * thispage - 1;

        list.forEach((item, key) => {
            if (key >= begin && key <= end) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });

        updatePagination();
        
    }
    function updatePagination() {
        const count = Math.ceil(list.length / limit);
        const prevButton = document.querySelector('.Previ');
        const nextButton = document.querySelector('.Nexts');

        if (thispage > 1) {
            prevButton.classList.remove('disabled');
        } else {
            prevButton.classList.add('disabled');
        }

        if (thispage < count) {
            nextButton.classList.remove('disabled');
        } else {
            nextButton.classList.add('disabled');
        }
    }

    function changePage(page) {
        thispage = page;
        loadItems();
    }

    loadItems();

    const prevButton = document.querySelector('.Previ');
    const nextButton = document.querySelector('.Nexts');
    const pageButtons = document.querySelectorAll('.active');

    
    prevButton.addEventListener('click', () => {
        if (thispage > 1) {
            changePage(thispage - 1);
        }
    });

    nextButton.addEventListener('click', () => {
        const count = Math.ceil(list.length / limit);
        if (thispage < count) {
            changePage(thispage + 1);
        }
    });

    pageButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            changePage(index + 1);
        });
    });
});
