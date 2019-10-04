alert("Dit is een game die je relatie en toekomst bepaalt");
alert("Hier komt de scenario");

alert("Je gaat naar Anime Expo en ziet een leuke en mooie persoon staan, maar je bent met je vriend die je al heel lang leuk vindt");
var keuze = prompt("Ga je naar dat persoon toe?")
document.write("Ga je naar dat persoon toe = " + (keuze));
document.write("</br/>")
if (keuze =="ja") {
	alert("Je zegt tegen je vriend dat je even naar het toilet gaat en gaat naar de persoon en je houdt een leuk gesprek met elkaar.");
	alert("De persoon wilt een date met je, je accepteert met een grote glimlach.")
	alert("Je gaat snel weg nadat je je date hebt geplanned morgen en gaat terug naar je vriend")
	alert("De vriend vraagt aan je:")
	alert("Waar bleef je nou? Ik stond de hele tijd op je te wachten.")
	var keuze = prompt("Ga je liegen tegen je vriend?")
	document.write("Ga je liegen tegen je vriend = " + (keuze));
	document.write("</br/>")
	if (keuze =="ja") {
		alert("Je zegt dat je diaree had en dat het heel erg lang duurde voordat het eruit ging.")
		alert("Jij en je vriend gaan weg en gaan samen gezellig uit eten met elkaar")
		alert("De persoon vraagt aan je of je nog plannen hebt morgen en vraagt dan om weer samen met je iets te gaan doen.")
		alert("Je hebt een date morgen met de persoon vanmiddag en weet niet zo goed wat je moet zeggen")
		var keuze = prompt("Ga je haar afwijzen?");
		document.write("Ga je haar afwijzen = " + (keuze))
		document.write("</br/>")
		if (keuze =="ja") {
			alert("Je hebt haar afgewezen en hebben daarna niks meer iets tegen elkaar gezegt");
			alert("Het einde")
		} else {
			alert("Je hebt haar afspraak niet afgezegd, maar dat persoon waar je een date mee had heeft alles gehoord")
			alert("De persoon is heel erg boos en je vriend weeet niet wat er gebeurd")
			alert("De persoon legt de situatie uit en jij bent de klos nu")
			alert("Het einde")
		}
	} else {
		alert("Je hebt de waarheid vertelt, je vriend was niet zo blij dat je dat deed. En hebben daarna nooit meer iets tegen elkaar gezegd.")
		alert("Het einde")
	}


} else {
	alert("je blijft met je vriend en laat dat persoon staan, voordat jullie naar huis gaan zie je de persoon weer staan. Jij en je vriend zouden nog ergens gaan eten.");
	var keuze = prompt("Ga je naar dat persoon toe?");
	document.write("Ga je naar dat persoon toe = " + (keuze));
	document.write("</br/>")
	if (keuze =="ja") {
		alert("Je loopt naar de persoon toe om te vragen of diegene met jullie wilt eten, de persoon accepteerd met een mooie glimlach dus jullie gaan naar een mooi restaurant met lekker eten. Je gaat naar de wc en de persoon gaat mee. de persoon kust je, het ziet ernaar uit dat de persoon wat meer wilt doen dan kussen");
		var keuze = prompt ("ga je met dat persoon mee?")
		if (keuze =="ja") {
			alert("Je ging met dat persoon mee en hadden en funzige avond.")
			alert("Het einde")
			document.write("Ga je met dat persoon mee = " + (keuze));
			document.write("</br/>")
		} else {
			alert("Je ging niet met dat persoon mee en ging snel terug, je zag dat persoon niet meer, en had een funzige avond met je vriend. ")
			alert("Het einde")
		}
	} else {
		alert("Je ging niet naar dat persoon en ging naar het restaurant")
		alert("In het restaurant zie je dat persoon langs het raam lopen, achter haar loopt een verdachte persoon.")
		var keuze = prompt("Ga je dat persoon volgen en je vriend laten zitten?")
		document.write("Ga je dat persoon volgen en je vriend laten zitten = " + (keuze))
		document.write("</br/>")
		if (keuze == "ja") {
			alert("Je zegt dat er iets dringend is tegen je vriend en volgt dat persoon.")
			alert("Je ziet dat persoon en de verdachte persoon een gebouw inlopen. Er staan uitsmijter ervoor. ")
			var keuze = prompt("Ga je proberen de uitsmijter knock-out te slaan en naar binnen te stormen?")
			document.write("Ga je proberen de uitsmijter knock-out te slaan en naar binnen te stormen = " + (keuze));
			document.write("</br/>")
				if (keuze =="ja") {
					alert("Je ging met alle macht de uitsmijter een rechtse geven en sloeg hem knock-out.")
					alert("Je stormt het gebouw binnen en ziet dat de persoon geforceert drugs krijgt door de verdachte.")
					alert("Je rent naar de verdachte toe en jullie hebben een heftige gevecht, uiteindelijk sla je hem dood.")
					alert("Je checkt de persoon om te kijken of het goed gaat, de persoon bedankt je door funzige dingen te doen.")
					alert("Het einde")

				}
		}
	}
}