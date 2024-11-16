import staffMember1 from "../assets/Potemkin.png";
import staffMember2 from "../assets/Johnny.png";
import staffMember3 from "../assets/Ky.png";
import staffMember4 from "../assets/zombie0.png";
import member1Gif from "../assets/Potemkin-walk.gif";
import member2Gif from "../assets/johnny-check.gif";
import member3Gif from "../assets/ky-run.gif";
import member4Gif from "../assets/zombie-ready.gif";

const StaffData = [
  {
    name: "Potemkin",
    imgSrc: staffMember1,
    gifSrc: member1Gif,
    description: `Veterano di guerra, Potemkin ha combattuto insieme a Daniele durante l'assedio all'eurospin
                  di Pirri, instaurando un legame profondo di amicizia e fiducia con l'incredibile fondatore.
                  Resistente e molto forte, ha aiutato Daniele nella costruzione del ristorante, e nella bonifica
                  delle zone limitrofe.`,
    roleTitle: "La sua mansione",
    roleDescription: `Non adatto alla mansione di cameriere a causa della sua enorme presenza e del suo portamento
                      distruttivo, si è invece riscoperta una grande destrezza nel maneggiare coltelli e padelle.
                      Le sue mastodontiche mani, sanno preparare i migliori manicaretti della storia di Pirri.
                      Mai assaggiati piatti così buoni, neanche alle sagre di paese.`,
  },
  {
    name: "Johnny",
    imgSrc: staffMember2,
    gifSrc: member2Gif,
    description: `Lontano parente di Daniele, ha riallacciato i rapporti con lui durante una lite in un parcheggio.
                  Esperto dell'arte ittica e di volatili, da il suo contributo indispensabile all'attività di famiglia.
                  Anche se a volte alza un po' troppo il gomito, è una persona alla mano, e non ha mai vomitato nel locale.
                  Ha un grande senso dell'umorismo, e, anche se non sembra, è ligio al dovere.`,
    roleTitle: "La sua mansione",
    roleDescription: `Ottimo aiuto cuoco, dà una mano alle enormi mani di Potemkin. I due lavorano in sintonia
                      e armonia, preparando deliziosi piatti di mare e di terra.
                      Anche se una volta ha tagliato il forno con la sua spada, gli si vuole comunque bene.
                      Si occupa in particolare di scegliere pesce di altissima qualità, mai avariato.
                      Cucinerà dell'ottimo sushi per coloro che riusciranno a sconfiggere, in un duello all'ultimo sangue, il fondatore.`,
  },
  {
    name: "Mr Kiske",
    imgSrc: staffMember3,
    gifSrc: member3Gif,
    description: `Durante la lotteria di capodanno, di tanti anni fa, Daniele e Mr Kiske si sono incontrati e hanno fatto
                  marachelle insieme.
                  Kiske è un uomo di bell'aspetto con un grande talento per la spada e la fedina penale pulita.
                  Per quanto ne sappiamo non ha commesso crimini di guerra; qualche furto di tanto in tanto, ma mai segnalato.
                  Campione regionale di pallanuoto, riesce sempre a supportare e incoraggiare gli altri.`,
    roleTitle: "La sua mansione",
    roleDescription: `Tra una gara di pallanuoto e l'altra, supporta l'attività del suo caro amico Daniele, con la preparazione
                      di fritti croccanti e gustosi che farebbero impallidire persino il Duca Conte di Francia e Germania.
                      Occasionalmente, pulisce anche i bagni. Sa preparare ottimi dolci, anche se, purtroppo, è allergico
                      alle uova. Una volta, ha quasi dato fuoco alla cucina.`,
  },
  {
    name: "Zombie 0",
    imgSrc: staffMember4,
    gifSrc: member4Gif,
    description: `Come ricompensa per l'aiuto dato durante la guerra, Daniele ha ricevuto questi umili e obbedienti Zombie domestici.
                  Nonostante l'aspetto putrefatto e orrorifico, hanno un cuore d'oro, anche se marcio.
                  La puzza è da film dell'orrore, ma la loro velocità d'azione riesce a compensare il loro puzzo.
                  Una volta, hanno salvato un gattino da un albero.`,
    roleTitle: "La sua mansione",
    roleDescription: `Il loro animo gentile e cordiale li rende perfetti nel lavoro a contatto con il pubblico.
                      Questi adorabili zombie vi serviranno nelle vesti di camerieri, veloci e puntuali.
                      Ottimi a dare consigli e supporto emotivo al cliente, i nostri zombie vi stupiranno per i loro modi
                      pacati e gentili. Sono così bravi, che potrebbero lavorare nelle risorse umane.
                      Volendo, possono competere con i più grandi gruppi k-pop presenti nel mercato.`,
  },
];

export default StaffData;
