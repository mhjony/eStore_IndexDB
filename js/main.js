import productdb, {
    bulkcreate,
    getData,
    createEle
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
    getData(db.products, (data) => {
        userid.value = data.id + 1 || 1;
    });
}


// create event on btnread button
btnread.onclick = table;

function table() {
    const tbody = document.getElementById("tbody");
    getData(db.products, (data) => {
        console.log(data);
    })
}