let first_display_number = 1;
let end_display_number = 8;
let selected_product = 0;

const createList = (ul, list_data) => {
    const GET_LISTS = document.getElementById(ul); 

    const LIST_ELEMENT = document.createElement('li');
    const IMG_ELEMENT = document.createElement('img');
    const TITLE_ELEMENT = document.createElement('p');
    const PRICE_ELEMENT = document.createElement('p');

    LIST_ELEMENT.setAttribute("id", products.indexOf(list_data));
    //遷移するときに区別するためリストインデックスを割り当てる。
    IMG_ELEMENT.setAttribute("src", list_data.image);
    TITLE_ELEMENT.innerHTML = list_data.title;
    PRICE_ELEMENT.innerHTML = list_data.price;

    GET_LISTS.appendChild(LIST_ELEMENT); 
    LIST_ELEMENT.appendChild(IMG_ELEMENT);
    LIST_ELEMENT.appendChild(TITLE_ELEMENT);
    LIST_ELEMENT.appendChild(PRICE_ELEMENT);
};

const displayProduct = (lists, first, end) => {
    for (let i=first-1; i<end; i++) {
        createList('product-list', lists[i]);
        console.log(i);
    }
};

const changeDisplay = (mode) => {
    console.log("test");
    if (mode == 'view') {
        first_display_number = 1;
        end_display_number = 12;
        destroyChild('product-list');
        displayProduct(products, first_display_number, end_display_number);
    } else if (mode == 'secound_page') {
        first_display_number = 13;
        end_display_number = 16;
        destroyChild('product-list');
        displayProduct(products, first_display_number, end_display_number);
    }
};

const destroyChild = (element) => {
    let parent = document.getElementById(element);
    while(parent.lastChild){
        parent.removeChild(parent.lastChild);
    }
};

displayProduct(products, first_display_number, end_display_number);

// こんなリストをつくる
// <ul id="product-list">
//     <li>
//         <img src="../Images/item1.jpg" alt="">
//         <p>プロダクトタイトルプロダクトタイトル</p>
//         <p>¥99,999 +tax</p>
//     </li>
// </ul>
