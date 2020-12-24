function addprice(a,b){
    var button_price= document.getElementById('b12').textContent.toString();
    var price= document.getElementById(a).textContent.toString();
    var total=button_price.split(" ");
    var cag_price= price.split(" ");
    var total_price=parseFloat(total[0]);
    var category_price=parseFloat(cag_price[0]);
    var final_price= total_price+category_price; 
    //alert(final_price.toFixed(2));
    var pics_text= document.getElementById(b).textContent.toString();
    var num_of_pcs=pics_text.split(" ");
    var final_num_of_pcs= parseInt(num_of_pcs[0]) +1;
     document.getElementById('b12').textContent=final_price.toFixed(2).toString()+" USD"
     document.getElementById(b).textContent=final_num_of_pcs.toString()+" pcs"
     
    }

    
