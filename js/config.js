function openItemWindow() {
	var popup = document.getElementById("item_buy_window");
	popup.classList.toggle("show");
}

function finishKauf() {
	var size = 0;
	
	if(document.getElementById('size_M').checked) 
		size = document.getElementById('size_M').value;
	else if(document.getElementById('size_L').checked) 
		size = document.getElementById('size_L').value;
	else(document.getElementById('size_XL').checked) 
		size = document.getElementById('size_XL').value;
	
	var menge = document.getElementById('menge').value;
	
	var vorname = document.getElementById("vorname").value;
	var nachname = document.getElementById("nachname").value;
	var anschrift = document.getElementById("anschrift").value;
	var plz = document.getElementById("plz").value;
	var ort = document.getElementById("ort").value;
	var telefonnummer = document.getElementById("telefonnummer").value;
	var email = document.getElementById("email").value;
	
	alert("Du hast das Produkt in Größe: " + size + " mit der Menge: " + menge + " mit den Persönlichen Infos:" + 
			"\nVorname: " + vorname + 
			"\nNachname: " + nachname + 
			"\nAnschrift: " + anschrift + 
			"\nPLZ: " + plz + 
			"\nOrt: " + ort + 
			"\nTelefonnummer: " + telefonnummer + 
			"\nE-Mail: " + email + 
			"\n\nErfolgreich bestellt! Das Produkt wird innerhalb von 3-5 Werktagen geliefert.");
}

function checkConsole() {
	if(/Android|webOS|Mobile|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
		document.getElementById("mobile-content").style.display = "inline";
	}
	else {
		document.getElementById("desktop-content").style.display = "inline";
	}
}
