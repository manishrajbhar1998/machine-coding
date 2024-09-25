

async function getProductList(para="phone"){

    try{

      const response = await fetch(`https://dummyjson.com/products/search?q=${para}`);
      const data = await response.json();
      console.log(data)
      // return data
    }catch(err){
      console.log(err)
      return err
    }
}

export default getProductList;