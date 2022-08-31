# My PaintPholio
![](C:\Users\jacqu\Documents\Jacqueline\Novi\Fullstack\MyPaintPholioLogo.png)

My PaintPholio is een portfolio applicatie die hobbymatige kunstenaars wil helpen hun projecten digitaal te tracken.
My PaintPholio is ontworpen en gecodeerd in het kader van de Bootcamp Fullstack Developer van Novi Hogeschool.

Voor het bouwen van de applicatie is er een functioneel ontwerp en technisch ontwerp gemaakt, die beide een integraal
onderdeel vormen van de eindopdracht waar deze code dus onderdeel van is.

## Installatie
[De applicatie bestaat uit deze backend broncode](https://github.com/JacquelinevanB/myPaintPholioBE)

[In combinatie met deze frontend broncode die je nu voor je hebt, te clonen via:](https://github.com/JacquelinevanB/myPaintPholioFE)
- HTTPS: `https://github.com/JacquelinevanB/myPaintPholioFE.git`
- SSH: `git@github.com:JacquelinevanB/myPaintPholioFE.git`

De frontend code is geschreven in JavaScript samen met de React library, waardoor het is opgebouwd uit verschillende componenten. 

- _Assets_: afbeeldingenmap
- _Components_: verschillende stukjes code die ingevoegd zijn in een groter geheel / een pagina;
- _Context_: AuthContext;
- _Helpders_: kleine, ondersteunende functies
- _Pages_: de pagina's die tot uitdrukking komen in de applicatie
- _App.js en Index.js_

### Runnen van de applicatie
Begin altijd door node en npm te installeren en activeren.

Voer het commando `npm install` uit in de terminal

Als dat heeft gedraaid, is het tijd voor `npm run start` om de applicatie daadwerkelijk te starten, mits ook de backend actief is.

## Gebruikers instellingen
In de Application.properties staan belangrijke instelingen ten behoeve van de communicatie met de database. Het is
belangrijk om deze aan te passen met eigen gegevens.
Er is een data.sql bestand gevuld met basic data om een aardige indruk te kunnen krijgen van hoe mooi de applicatie kan werken.

Deze data kan gebruikt worden in combinatie met de volgende accounts:

#### Admin:
- gebruikersnaam: admin
- wachtwoord: adminpassword

#### User:
- gebruikersnaam: user
- wachtwoord: userpassword

Door in te loggen met het admin account krijg je beeld van het admindashboard.
Via het account van de user ervaar je de kernfunctionaliteit van de applicatie.

![](C:\Users\jacqu\Documents\Jacqueline\Novi\Fullstack\mypaintpholiosmall.png)

## Probleemstelling en oplossing
Super leuk en praktisch om foto's te nemen van tussenfases van je schilderwerk om te zien welke ontwikkeling je doormaakt.
Foto's raken echter snel zoek in de dagelijkse fotostroom die onze telefoons tegenwoordig overspoelen.

Deze applicatie biedt een digitale plek om foto's van de diverse fases in het ontstaansproces van een schilderij bij
elkaar te bewaren. Binnen een afgeschermd profiel is voor ieder schilderwerk een projectpagina beschikbaar. Deze wordt
na iedere schilderronde aangevuld met een foto - voorzien van reflectie, ideën en aantekeningen. De volgende keer komt
met de foto's en de aantekeningen meteen weer boven borrelen hoe het ook alweer was. En dat niet alleen:
er ontstaat voor ieder project een mooi verslag, portfolio van hoe het schilderwerk stap voor stap tot stand gekomen is.
Waarbij de ontwikkeling teruggelezen kan worden.

Binnen het gebruikersprofiel staan de projecten overzichtelijk bij elkaar op het dashboard van de gebruiker. Via de
projecttegel kan doorgeklikt worden naar alle reflecties die bij het project geüpload zijn, waarna er een aantal opties
zijn om deze op het scherm weer te geven. De reflectietekst bij de foto kan gelezen worden, maar het is ook mogelijk om
twee foto’s van werkmomenten naast elkaar te vergelijken. Tenslotte kan dat wat is ingevoerd bij project en reflectie
te allen tijde worden aangepast of aangevuld.

![](C:\Users\jacqu\Documents\Jacqueline\Novi\Fullstack\Landingpage1.png)

#### Jacqueline van Burk | copyright © augustus 2022 | Eindopdracht Bootcamp Fullstack Developer

