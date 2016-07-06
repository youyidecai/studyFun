function handleScroll(e) {
	console.log(111);
}
window.addEventListener(scroll, handleScroll);

function handleBefer() {
	var list = document.querySelectorAll('.slide');
	for(var i = 0; i< list.length; i++) {
		thisImg = list[i].querySelector('.img');
		if(thisImg.src) {
			continue;
		}
		if(isVisible(list[i])) {
			var src = thisImg.getAttribute('data-src');
			if(src) {
				thisImg.src = src;
				thisImg.removeAttribute('data-src');
			}
		}
	}
}
function isVisible (node) {
	var scrollTop = window.scrollY,
		offTop = node.offsetTop,
		offsetHeight = node.offsetHeight,
		innerHeight = window.innerHeight,
		topViewPort = scrollTop,
		bottomViewPort = scrollTop + innerHeight;
}