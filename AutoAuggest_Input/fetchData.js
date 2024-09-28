

function fetchAutoSuggest(searchItem){
  
  const filterData = DATA.filter((item) => item.substr(0,searchItem.length).toLocaleLowerCase() === searchItem.toLocaleLowerCase())
   
    return new Promise((resolve)=>{
        setTimeout(()=>{
          resolve(filterData)
        },1000)
    })
}

