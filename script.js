let nama = '';
if (document.getElementById("salam").innerText = "Good Morning ...") {
	document.getElementById("salam").innerText = "Selamat Pagi "+ nama;
}

function towoman() {
		if (document.getElementById('gender').innerText ='Man') {
		document.getElementById('imggender').src='https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-woman-back-to-school-vitaliy-gorbachev-lineal-color-vitaly-gorbachev-2.png';
		document.getElementById('gender').innerText = 'Woman';
		document.getElementById('leftg').removeAttribute("hidden");
		document.getElementById('rightg').setAttribute("hidden","");
		
		}

	}

	function toman() {
		if (document.getElementById('gender').innerText ='Woman') {
		document.getElementById('imggender').src='https://img.icons8.com/external-itim2101-lineal-color-itim2101/64/000000/external-man-avatar-itim2101-lineal-color-itim2101-6.png';
		document.getElementById('gender').innerText = 'Man';
		document.getElementById('rightg').removeAttribute("hidden");
		document.getElementById('leftg').setAttribute("hidden","");
		}
	}

	function play() {

		let nama = document.getElementById("nama").innerText;
		
		
	}

