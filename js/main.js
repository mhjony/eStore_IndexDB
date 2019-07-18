import productdb, {
    bulkcreate
} from './module.js';

let db = productdb("Productdb", {

    products: `++id, name, seller, price`
});


//input tags
const userid = document.getElementById("userid");
const proname = document.getElementById("proname");
const seller = document.getElementById("seller");
const price = document.getElementById("price");


//buttons
const btncreate = document.getElementById("btn-create");
const btnread = document.getElementById("btn-read");
const btnupdate = document.getElementById("btn-update");
const btndelete = document.getElementById("btn-delete");

//insert value using create button
btncreate.onclick = (event) => {
    let flag = bulkcreate(db.products, {
        name: proname.value,
        seller: seller.value,
        price: price.value
    })

    //console.log(flag);

    proname.value = seller.value = price.value = "";
    getData();
}

const getData = () => {
    let index = 0;
    let obj = {};

    db.products.count((count) => {
        if (count) {
            db.products.each(table => {
                console.log(table);

                obj = Sortobj(table);
                console.log(obj);
            })
        }
    })
}

const Sortobj = sortobj => {
    let obj = {};
    obj = {
        id: sortobj.id,
        name: sortobj.name,
        seller: sortobj.seller,
        price: sortobj.price
    }

    return obj;
}


