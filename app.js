const btnsearch = document.querySelectorAll('.btn_search');
const container = document.querySelectorAll('.product__card');
const btnactive = document.querySelectorAll('.btn')

const productList = document.querySelector('span')


for(let i=0; i<btnsearch.length; i++){
    btnsearch[i].addEventListener('click', (e)=>{
        const filter = e.target.dataset.filter
        
        
      container.forEach((product) => {
         if (filter == 'all') {
             product.style.display = 'block'
             
         } else {
             if (product.classList.contains(filter)) {
                 product.style.display = 'block'


             } else {
                product.style.display = 'none'
            
             }
            }
      })
    })
}



const search = document.querySelector(".search")

search.addEventListener('keyup', ()=>{
    const searchText = search.value.toLowerCase().trim()
    
    console.log(searchText);
    for (let i = 0; i < container.length; i++) {
   
        let trues = container[i].classList.contains(searchText)
        if (trues) {
            console.log(trues);
            container[i].style.display = 'block'
            productList.classList.remove('lds-ring')

        }else if(searchText == ""){
           container[i].style.display = 'block'
           productList.classList.remove('lds-ring')

        }
        else {
            container[i].style.display = 'none'
            productList.classList.add('lds-ring')
        }

        if(searchText == ""){
            container[i].style.display = 'block'
            productList.classList.remove('lds-ring')

         } if(searchText == "all"){
            container[i].style.display = 'block'
            productList.classList.remove('lds-ring')
         } 
         if(searchText == "watch"){
            productList.classList.remove('lds-ring')
         } 
         if(searchText == "shirt"){
            productList.classList.remove('lds-ring')
         }
         if(searchText == "jewerly"){
            productList.classList.remove('lds-ring')
         }
         if(searchText == "gown"){
            productList.classList.remove('lds-ring')
         } 
    }
})

