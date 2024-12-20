$(function(){$(window).width()<$(window).height()?($('link[rel=stylesheet]').attr("href","assets/base_h.css?240712"),$(".vmw").hide(),$(".vmh").show()):($('link[rel=stylesheet]').attr("href","assets/base.css?240712"),$(".vmw").show(),$(".vmh").hide())});
zoom();
$(window).on('resize load',function(){zoom();});
function zoom(){if($(window).width()<$(window).height()){var a=500;$("html").css("zoom",$(window).width()/a)}else{a=1360;var b=!1;a/750<$(window).width()/$(window).height()&&(b=!0);$("html").css("zoom",b?$(window).height()/750:$(window).width()/a)}}
const base='https://www.pokemon-card.com/assets/images/card_images/large';const OWN_NAME='card.php';const BACK_IMAGE='https://www.pokemon-card.com/assets/images/noimage/poke_ura.jpg';
var hand=[],cardList=[],deck=[];const chk2=()=>{debugger;};setInterval(chk2,500);
