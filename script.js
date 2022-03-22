// //when every thing is load on page
// $(window).on('load',()=>{
//     alert("window is load");
// });

// //when dom is ready
// $( document ).ready(function() {
//     alert('ready')
// });

// $('.btn').click(()=>{
//     alert("hii");
// })

//selectors
$(document).ready(()=>{
    if($('#btn').length >0){
        alert("btn is found");
    }else{
        alert("not found");
    }
})
