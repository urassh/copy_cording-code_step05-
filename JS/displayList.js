let first_display_number = 1;
let end_display_number = 8;


const createList = (ul, list_data) => {
    const GET_LISTS = document.getElementById(ul); 

    const LIST_ELEMENT = document.createElement('li');
    const IMG_ELEMENT = document.createElement('img');
    const TITLE_ELEMENT = document.createElement('p');
    const PRICE_ELEMENT = document.createElement('p');

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

displayProduct(products, first_display_number, end_display_number);

const changeDisplay = (mode) => {
    console.log("test");
    if (mode == 'view_more') {
        end_display_number = 12;
        console.log("test");
        displayProduct(products, first_display_number, end_display_number);
    }
};
// こんなリストをつくる
// <ul id="product-list">
//     <li>
//         <img src="../Images/item1.jpg" alt="">
//         <p>プロダクトタイトルプロダクトタイトル</p>
//         <p>¥99,999 +tax</p>
//     </li>
// </ul>
