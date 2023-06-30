// Dark mode
let darkModu=()=>{
 window.document.classList.toggle("dark_mode")
}

//input search
$(document).ready(function(){
  const searchApi=["Adana","Balikesir","Amasya","Çorum","Denizli","İstanbul","Bolu","Bursa"];
  $("#tags").autocomplete({
    source:searchApi
  })
});

// Footer
let newDate=()=>{
  const date=new Date().getFullYear()
// document.getElementById("date_id").innerHTML=new Date().getFullYear()
//jquery DOM 
$("#date_id").html(date)
}
newDate()
