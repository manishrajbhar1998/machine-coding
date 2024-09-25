import getProductList from "./getDataAPI";

const input = document.querySelector('input');

input.addEventListener('input',handleProductList)


async function handleProductList(e){

    console.log(e.target.value)
    const data = await getProductList(e.target.value)
    // console.log(data);
    // showProduct(data);
}



function showProduct(data){
  const fragement = document.createDocumentFragment();

  data.forEach(prod => {
    const li = document.createElement('li');
    li.innerText = prod
  })
}