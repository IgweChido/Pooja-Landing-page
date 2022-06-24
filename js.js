
var nav = document.getElementsByClassName('nav-hidden');
var img = document.getElementsByClassName('nh-img');

var shop = document.getElementsByClassName('shopp')[0];
var hd = document.getElementsByClassName('home-decor')[0];
var svg = document.getElementsByClassName('svg-black');

var debate = true;


// Footer functionality

function getFooterNav (id){
	
	if(debate){
		nav[id].classList.add("nh-active");
		img[id].classList.add('img-active')
		debate = false;
	}
	else{
		nav[id].classList.remove("nh-active");
		img[id].classList.remove('img-active')
		debate = true;
	}
	
	
	
}

console.log(shop)

function shoppNavigation(id){

	if(debate){
		shop.classList.add("hd-active");
		svg[id].classList.add('svg-active')
		
		debate = false;
	}
	else{
		shop.classList.remove("hd-active");
		svg[id].classList.remove('svg-active')
		
		debate = true;
	}


}

// navigation functionality Header

function hdNavigation(id){

	if(debate){
		hd.classList.add("shopp-active");
		svg[id].classList.add('svg-active')
		
		debate = false;
	}
	else{
		hd.classList.remove("shopp-active");
		svg[id].classList.remove('svg-active')
		
		debate = true;
	}


}




// The Circle section Functionality

var left = document.getElementById('a-left');
var right = document.getElementById('a-right');
var left1 = document.getElementById('a-left1');
var right1 = document.getElementById('a-right1');
var scroll = document.getElementById('scroller');
var screll = document.getElementById('scroll-container');
	
	var next=51;
	 var prev = 0;
  function shiftArrowRight () {
  			var rect = screll.getBoundingClientRect()
             x = rect.left;
             w = rect.width;

             if(x === next ){
             	left.style.display = 'none';
             	left1.style.display = 'block';
             }
             if(x !== next){
             	left.style.display = 'block';
             	left1.style.display = 'none';
             	scroll.scrollLeft += -125;
            console.log('working')
             }

             if(prev !== x){
             	right.style.display = 'block';
             	right1.style.display = 'none';
             }
            
            

            
        }

       

         function shiftArrowLeft () {
            var rect = screll.getBoundingClientRect()
             x = rect.left;
             w = rect.width;
            
             console.log(x)
             console.log(prev)
            

             if(prev === x ){
             	right.style.display = 'none';
             	right1.style.display = 'block';

             }
             if(prev !== x ){

             	right.style.display = 'block';
             	right1.style.display = 'none';
             	 scroll.scrollLeft +=125;
             	 console.log('workingg')
             	  prev= x;
             }


             if(x !== next ){
             	left.style.display = 'block';
             	left1.style.display = 'none';
             }


           
               

            
        }



        // phone navigatiom

        var hide = document.getElementsByClassName('hidden-circ');
          var arrImg = document.getElementsByClassName('arr-img');
        var circ= true;
         function openCirc(id){

         	if(circ){
         		hide[id].style.display = 'block';
         		arrImg[id].classList.add("arr-img1");
         		circ= false;
         	}

         	else{

         		hide[id].style.display = 'none';
         		arrImg[id].classList.remove("arr-img1");
         		circ= true

         	}


         }




 // open search area in phone nav


 var search = document.getElementsByClassName('open-search')[0];
 var cancelS = document.getElementsByClassName('search-icon')[0];

var reason = true;
 function openSearch () {
 	
 	if(reason){
 		search.style.display = 'block';
 		cancelS.style.display ='none'
 		reason = false;
 	}

 	else{
 		search.style.display = 'none';
 		cancelS.style.display ='block'
 		reason = true;
 	}
 }



 // open phone navigation

 var phoneNav = document.getElementsByClassName('phone')[0];
 var body = document.getElementById('body');

 var repo = true;
 function openPNav(){

 	if(repo){
 		phoneNav.style.display = 'block'
 		body.style.position = 'fixed';
 		repo = false;
 	}

 	else{
 		phoneNav.style.display = 'none'
 		repo = true;
 		body.style.position = 'relative';
 	}

 }


 

