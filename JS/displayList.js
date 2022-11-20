let selected_product = 0;

class List {
    constructor(ul_elements, products_data, first_display_number, end_display_number){
        this.ul = ul_elements;
        this.data = products_data;
        this.first = first_display_number;
        this.end = end_display_number;
    }

    createList(list_data) {
        const GET_LISTS = document.getElementById(this.ul); 

        const LIST_ELEMENT = document.createElement('li');
        const IMG_ELEMENT = document.createElement('img');
        const TITLE_ELEMENT = document.createElement('p');
        const PRICE_ELEMENT = document.createElement('p');
    
        LIST_ELEMENT.setAttribute("id", this.data.indexOf(list_data));
        LIST_ELEMENT.setAttribute("class", 'product');
        //遷移するときに区別するためリストインデックスを割り当てる。
        IMG_ELEMENT.setAttribute("src", list_data.image);
        TITLE_ELEMENT.innerHTML = list_data.title;
        PRICE_ELEMENT.innerHTML = list_data.price;
    
        GET_LISTS.appendChild(LIST_ELEMENT);
        LIST_ELEMENT.appendChild(IMG_ELEMENT);
        LIST_ELEMENT.appendChild(TITLE_ELEMENT);
        LIST_ELEMENT.appendChild(PRICE_ELEMENT);
    }

    displayProduct() {
        for (let i=this.first-1; i<this.end; i++) {
            this.createList(this.data[i]);
            console.log(`表示されているリストのインデックスです : ${i}`);
        }
    }

    changeDisplay(mode) {
        if (mode == 'view') {
            this.first = 1;
            this.end = 12;
            this.destroyChild();
            this.displayProduct();
        } else if (mode == 'secound_page') {
            this.first = 13;
            this.end = 16;
            this.destroyChild();
            this.displayProduct();
        }
    }

    destroyChild() {
        const parent = document.getElementById(this.ul);
        while(parent.lastChild){
            parent.removeChild(parent.lastChild);
        }
    }
}

const list = new List('product-list', products, 1, 8);

list.displayProduct();

// こんなリストをつくる
// <ul id="product-list">
//     <li>
//         <img src="../Images/item1.jpg" alt="">
//         <p>プロダクトタイトルプロダクトタイトル</p>
//         <p>¥99,999 +tax</p>
//     </li>
// </ul>
