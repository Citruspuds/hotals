var i = 0; // Start point
	var images = [];
	var time = 1000;

	// Image List
	images[0] = 'sol.jpeg';
	images[1] = 'room.jpeg';
	images[2] = 'vcay.jpeg';
	images[3] = 'hotel.jpeg';

	// Change Image
	function changeImg(){
		document.slide.src = images[i];

		if(i < images.length - 1){
			i++;
		} else {
			i = 0;
		}

		setTimeout("changeImg()", time);
	}

	window.onload = changeImg;
