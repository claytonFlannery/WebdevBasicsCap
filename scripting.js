var objs=0

function savePg(){// opens saved for later page and loops through adding saved images
    window.location.href='saveForLtr.html';   
    return false;
}
$(document).ready(addItems())

$(document).ready(function(){
    $("h4").css({'background-color':'orange'}).fadeOut(5000).fadeIn(5000)
    
});

$("#hideImg").click("addClickEventListener", function () {
    $("img").fadeOut(1500);
});

$("#showImg").click("addClickEventListener", function () {
    $("img").fadeIn(1500);
});

$("#cmmntBtn").click(function(){// adds a comment to the text area
    let val=$("#cmnts").val()
    $("#cmntSec").val(val)
    $("#cmnts").val("")
});

$(document.body).on("click","#like",function(event){
    $(event.target).addClass("liked")
    $(event.target).val("liked")

})

// save for later functionality

//stores the item as a cookie on click of paragraph
$(document.body).on("click","p",function(event){
    let parID=$(event.target).attr("id")
    console.log(parID)
    let body=$(`#${parID}`).html()
    sessionStorage.setItem(objs,body)
    objs++;
    alert(`You've saved ${objs} items`)
})

//adds relevant items on ready of document
function addItems(){
let check=$("head").attr("id")

if(check=="svdPg"){
        for(i=0;i<=6;i++){
                let pars=sessionStorage.getItem(i)
                $("p").append(pars)
        }
    }
}

