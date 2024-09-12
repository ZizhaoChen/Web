const getViewportWidth = () => window.innerWidth || document.documentElement.clientWidth;

const ausgabe = `Die Viewport-Breite beträgt: ${getViewportWidth()} Pixel`;

const maxBreite = screen.width;

if(getViewportWidth() < maxBreite*0.4) {
    alert("Fenster zu klein!");
}

console.log(`Die Viewport-Breite beträgt: ${getViewportWidth()} Pixel`);

/*let Podcast = {
    titel: "",
    beschreibung: "",
    autor: "",
    besitzerName: "",
    besitzerEmail: "",
    bildUrl: "",
    feedUrl: "",
    kategorien: ["Pop","Jazz","Hip-Hop","Rock","Technology","Web-Engineering"],
    letztesUpdate: Date.now(),
    episoden: [],

    addEpisode: function(episode) {

        this.episoden.push = new episode();

        //for(let i = 0; i < episoden.length; i++) {
        //
        //    let sortEpisoden = []; //erzeuge neues Array
        //    sortEpisoden.append = new episode();    //erweitere array mit episode objekt
        //    tr.appendChild(createTd(i+1));
        //    tr.appendChild(createTd(daten[i].lang));
        //    tr.appendChild(createTd(daten[i].rating));
        //    
        //}
        
        this.episoden.sort( function(a,b) {return b - a} );

        return null;
    }
}*/


class Podcast {
    titel;
    beschreibung;
    autor;
    besitzerName;
    besitzerEmail;
    bildUrl;
    feedUrl;
    kategorien;
    letztesUpdate;
    episoden;

    constructor(titel) {
        this.titel = titel;
        this.beschreibung = "";
        this.autor = "";
        this.besitzerName = "";
        this.besitzerEmail = "";
        this.bildUrl = "";
        this.feedUrl = "";
        this.kategorien = ["Pop","Jazz","Hip-Hop","Rock","Technology","Web-Engineering"];
        this.letztesUpdate = Date.now();
        this.episoden = [];
    }

    addEpisode(Episode) {
        this.episoden.push(Episode);
        this.episoden.sort( function(a,b) {return b - a} );
        return null;
    }
}
       

/*let Episode = {
    titel: "",
    beschreibung: "",
    dauer: 0, // Dauer der Episode in Millisekunden
    datum: Date.now(),


    getDauerInStundenUndMinuten() {
        let dauerMinuten = 0;

        dauerMinuten = (dauer/(1000*60))%60;
        dauerStunden = (dauer/(1000*60*60))%24;
        dauerString = `${dauerStunden}h ${dauerMinuten}`;
        return dauerString;
    }
}*/

class Episode {
    titel;
    beschreibung;
    dauer; // Dauer der Episode in Millisekunden
    datum;

    constructor() {
        this.titel = "";
        this.beschreibung = "";
        this.dauer = 0;
        this.datum = Date.now();
    }


    getDauerInStundenUndMinuten() {
        let dauerMinuten = Math.floor((this.dauer/(1000*60))%60);
        let dauerStunden = Math.floor((this.dauer/(1000*60*60)));
        let dauerString = `${dauerStunden}h ${dauerMinuten}min`;
        return dauerString;
    }
}

let EpisodeAudio = {
    url: "",
    groesse: 0, // Groesse der Audiodatei in Bytes
    typ: "", // Audio als Mime-Typ (z.B. audio/mpeg)
}

let podcastArray = []
let podcast1 = new Podcast("Podcast 1");
let podcast2 = new Podcast("Podcast 2");

let dummyEpisode = new Episode();
dummyEpisode.titel = "Episode 5: Warum liegt hier Stroh?";
dummyEpisode.beschreibung = "bla";
dummyEpisode.dauer = 5324536;
podcast1.addEpisode(dummyEpisode);

dummyEpisode = new Episode();
dummyEpisode.titel = "Episode 1: Wo bin ich?";
dummyEpisode.beschreibung = "blubb";
dummyEpisode.dauer = 21423344;
podcast1.addEpisode(dummyEpisode);
podcastArray.push(podcast1);

dummyEpisode = new Episode();
dummyEpisode.titel = "Episode 404: Alles weg!";
dummyEpisode.beschreibung = "blablubb";
dummyEpisode.dauer = 16243679;
podcast2.addEpisode(dummyEpisode);

dummyEpisode = new Episode();
dummyEpisode.titel = "Episode 123: Dude, where is my car?";
dummyEpisode.beschreibung = "Bratwurstbratgeraet";
dummyEpisode.dauer = 6432123;
podcast2.addEpisode(dummyEpisode);
podcastArray.push(podcast2);

for(let y = 0; y < podcastArray.length; y++ ) {
    console.log(`${podcastArray[y].titel}`);
    for(let i = 0; i < podcastArray[y].episoden.length; i++) {
        console.log(`\t${podcastArray[y].episoden[i].titel} (${podcastArray[y].episoden[i].getDauerInStundenUndMinuten()})`);
    }
}

//console.log();