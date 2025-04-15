const accordin_item=document.querySelectorAll(".accordin-item")
accordin_item.forEach(item=>{
    const title=item.querySelector(".accordin-title")
    const content=item.querySelector(".accordin-content")

    title.addEventListener('click',()=>{
        for(var i=0;i<accordin_item.length;i++){
            if(accordin_item[i] != item){

                accordin_item[i].classList.remove('active')
            }
            else{
                item.classList.toggle("active")
            }
        }
    })
})