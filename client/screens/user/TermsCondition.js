<<<<<<< HEAD
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
=======
import { View, Text,TouchableOpacity, StyleSheet, ScrollView} from 'react-native'
>>>>>>> 3f4512eb85b15625a2866a4f41becc3d80dff01c
import React from 'react'
import { colors } from '../../constants';

<<<<<<< HEAD
const TermsCondition = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
      <TouchableOpacity
        style={{
          position: 'absolute',
          left: 20,
          top: 35,
        }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons
            name="arrow-back-circle-outline"
            size={30}
            color={colors.light}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 22, textAlign: 'center', color: '#fff', fontWeight: 500 }}>Termini e Condizioni</Text>
      </View>
      <View style={styles.bodyContainer}>
          <ScrollView>
            <Text style={styles.textStyle}>
            CONDIZIONI GENERALI DI UTILIZZO DEI SERVIZI CARICAMI DA PARTE DEGLI UTENTI
        REGISTRATI SULLA PIATTAFORMA (COME DI SEGUITO DEFINITA)
        Ciascun Utilizzatore (come di seguito definito) è invitato a leggere con attenzione le presenti condizioni
        generali di contratto (di seguito le "CGC") prima di utilizzare i Servizi Caricami.
        Il presente documento è un accordo giuridicamente vincolante tra l'Utilizzatore (come di seguito definito),
        che si sarà previamente registrato sulla Piattaforma (come di seguito definita), e la società Caricami S.r.l.,
        con sede legale in Via Aosta n. 4, 20155 Milano (MI), numero di iscrizione al Registro delle Imprese di
        Milano - Monza - Brianza - Lodi n. 10912060968 e REA n. MI-2565872 (di seguito "Caricami"), in qualità
        di titolare e amministratore del Sito (come di seguito definito) e dell'App (come di seguito definita).
        1. Definizioni
        "Costo del Noleggio" indica il costo del noleggio dovuto da parte dell'Utilizzatore al termine del periodo di
        noleggio, vale a dire al momento del posizionamento e del riaggancio del Power Bank alla Stazione
        Caricami, che è calcolato in base al piano tariffario consultabile direttamente dalla App.
        "Piattaforma" indica la piattaforma (come per esempio il Sito e/o l'App) attraverso la quale gli Utilizzatori
        possono accedere alla fruizione dei Servizi Caricami.
        "Power Bank" indica una batteria portatile a prelievo e rilascio automatizzato, di proprietà di Caricami,
        adatta esclusivamente per la ricarica di smartphone, tablet, sigarette elettroniche e altri dispostivi elettronici
        compatibili, attraverso l'erogazione di un flusso di elettricità non pericolosa e non idonea alla trasmissione
        dei dati. Pertanto, i Power Bank Caricami non possono in alcun modo prelevare e/o raccogliere e/o registrare
        informazioni o dati dal dispositivo che ricaricano. Ciascun Power Bank dispone di n. 3 cavi ed è idoneo alla
        ricarica di smartphone, tablet e altri dispostivi elettronici compatibili.
        "Servizi Caricami" includono:
        (a) il download dell'applicazione per smartphone [e tablet] di Caricami (di seguito, l'"App") tramite App
        Store (per i dispositivi dotati di sistema operativo iOS) e Google Play Store (per i dispositivi dotati di sistema
        operativo Android);
        (b) la registrazione dell'Utilizzatore sulla Piattaforma (tramite App, Sito, o altri mezzi idonei);
        (c) l'utilizzo dell'App per usufruire del servizio di noleggio distribuito di Power Bank;
        (d) la vendita dei Power Bank;
        (e) la gestione di tutte le attività riguardanti il noleggio o la vendita dei Power Bank [e l'eventuale assistenza
        post noleggio/vendita];
        (f) la creazione di una pagina personale per ciascun Utilizzatore a seguito della registrazione sulla
        Piattaforma (di seguito l'"Account Utilizzatore"), mediante la quale (1) noleggiare/acquistare Power Bank,
        (2) gestire le proprie informazioni personali sulla Piattaforma e (3) consultare lo storico dei noleggi
        effettuati.
        "Sito" indica il sito web [www.caricami.it] amministrato da Caricami.
        "Stazione Caricami" indica ciascuna stazione di noleggio di Power Bank geolocalizzata dalla App, di
        proprietà di Caricami, presso la quale è possibile prelevare o restituire i Power Bank.
        "Utilizzatore" indica qualsiasi soggetto maggiorenne che abbia effettuato e completato con successo la
        registrazione alla Piattaforma.
        2. Condizioni generali di contratto
        2.1 Le presenti CGC costituiscono i termini e le condizioni che regolano l'utilizzo dei Servizi Caricami da
        parte degli Utilizzatori. Scaricando la App o registrandosi alla Piattaforma, gli Utilizzatori accettano
        integralmente ed incondizionatamente le presenti CGC.
        2.2 Le presenti CGC, il contenuto e la struttura di queste pagine e la Piattaforma sono detenuti, operati e
        forniti da Caricami, ai termini e condizioni qui contemplati.
        2.3 L'Utilizzatore prende atto e accetta che Caricami potrà modificare unilateralmente le CGC in qualsiasi
        momento pubblicando la versione modificata delle CGC sul Sito e inviando apposita comunicazione
        mediante l'App all'Utilizzatore. Resta inteso che l'Utilizzatore potrà recedere dalle presenti CGC a seguito di
        tali modifiche delle CGC, mediante cancellazione della propria registrazione dalla Piattaforma. La fruizione
        dei Servizi Caricami e l'utilizzo della Piattaforma da parte dell'Utilizzatore a seguito della modifica delle
        CGC varrà come accettazione da parte di quest'ultimo delle modifiche apportate da Caricami alle CGC.
        2.4 Le presenti CGC sono state redatte in lingua italiana e le versioni tradotte in altre lingue hanno natura
        meramente informativa. Pertanto, in caso di conflitto sull'interpretazione delle presenti CGC varrà
        esclusivamente la versione originale in lingua italiana.
        2.5 L'Utilizzatore non potrà e non è autorizzato ad apportare alcuna modifica alle presenti CGC.
        2.6 Le presenti CGC avranno effetti dal momento in cui, essendo stata completata con successo la
        registrazione alla Piattaforma, sarà attivato l'Account Utilizzatore da parte di Caricami, e cesseranno di avere
        effetti alla chiusura definitiva di tale Account Utilizzatore da parte di Caricami o dell'Utilizzatore. A tal
        riguardo, chi fosse interessato a creare un Account Utilizzatore sulla Piattaforma è invitato a completare la
        procedura di registrazione descritta ai seguenti Articoli 4 e 5.
        3. Privacy
        Gli Utilizzatori sono tenuti a consultare ed accettare, mediante la registrazione alla Piattaforma, la privacy
        policy di Caricami, compresa la cookie policy, applicabile ai Servizi Caricami.
        4. Prestazione dei Servizi Caricami
        4.1 Tutti i Servizi Caricami offerti tramite la Piattaforma sono prestati da Caricami. I Servizi Caricami e tutti
        i relativi diritti sono e resteranno di proprietà di Caricami. E' possibile che alcuni dei Servizi Caricami siano
        forniti da terzi fornitori di Caricami.
        4.2 Per poter usufruire dei Servizi Caricami, l'Utilizzatore deve scaricare la App e registrarsi seguendo
        l'apposita procedura ivi descritta. Caricami si riserva il diritto di limitare o modificare i termini e le
        condizioni d'uso dei Servizi Caricami.
        4.3 A sua esclusiva discrezione, Caricami potrà limitare, negare o creare diversi livelli di accesso e di
        utilizzo dei Servizi Caricami (o di una parte dei Servizi Caricami).
        4.4 Ai fini dell'utilizzo dei Servizi Caricami, fatte salve le specifiche disposizioni di legge di carattere
        imperativo, l'Utilizzatore accetta di ricevere da parte di Caricami comunicazioni in forma elettronica e
        riconosce che tutti i contratti, le notifiche, le informative e le altre comunicazioni che Caricami gli fornirà in
        forma elettronica soddisfano il requisito della forma scritta quando previsto dalla legge.
        4.5 Caricami non è responsabile (e non ha alcun obbligo di verifica in tal senso) per l'errata o imprecisa
        indicazione dell'indirizzo e-mail, del numero di telefono cellulare e dei dati di pagamento inseriti
        dall'Utilizzatore.
        4.6 Caricami invita gli Utilizzatori a leggere la privacy policy e la cookie policy di Caricami per avere
        maggiori informazioni circa le modalità tramite le quali Caricami può contattare gli Utilizzatori.
        4.7 Nel caso in cui un Utilizzatore voglia contattare il servizio clienti per qualsiasi motivo riguardante i
        Servizi Caricami, ivi inclusa qualsiasi richiesta o lamentela, o per qualsiasi altro motivo, l'Utilizzatore può
        contattare Caricami [compilando il modulo disponibile nella sezione "Contatti" del Sito o] inviando una email al seguente indirizzo: supporto@caricami.it.
        5. Account Utilizzatore
        5.1 Per accedere ai Servizi Caricami, l'Utilizzatore deve scaricare la App e richiedere la registrazione alla
        Piattaforma. La registrazione è una procedura che prevede, da parte dell'Utilizzatore, l'inserimento dei propri
        dati anagrafici e personali, l'accettazione delle CGC, della privacy policy e della cookie policy. La procedura
        di registrazione è descritta dettagliatamente sul Sito e/o sull'App. Come condizione per l'accesso e l'utilizzo
        del Sito, dell'App e dei Servizi Caricami, l'Utilizzatore accetta e si obbliga a rispettare tutte le leggi e i
        regolamenti applicabili nonché le presenti CGC (così come di volta in volta modificate e/o integrate).
        5.2 Previa registrazione alla Piattaforma, Caricami assegna un account a ciascun Utilizzatore registrato,
        identificato da un ID univoco. Gli Utilizzatori possono accedere al proprio Account Utilizzatore secondo
        diverse modalità, fra cui:
        • Inserimento di username e di un codice monouso ricevuto via email o via SMS;
        • Inserimento di indirizzo email e di un codice monouso ricevuto via email;
        • Inserimento di un numero di telefono cellulare e di un codice monouso ricevuto via SMS.
        L'Utilizzatore può, in qualunque momento, modificare o eliminare i dati inseriti durante la fase di
        registrazione alla Piattaforma inoltrando una richiesta direttamente sulla chat interna dell'App o contattando
        Caricami via e-mail all'indirizzo: supporto@caricami.it.
        5.3 Ogni Utilizzatore può accedere all'Account Utilizzatore con le modalità descritte al precedente paragrafo
        5.2. Mediante un Account Utilizzatore si può noleggiare un solo Power Bank per volta. L'Utilizzatore è
        l'unico responsabile del mantenimento della segretezza e della sicurezza dei dati utilizzati per l'accesso
        all'Account Utilizzatore (per esempio login e password) nonché di tutte le attività che avvengono sul proprio
        Account Utilizzatore. Nessun Utilizzatore può condividere, assegnare o consentire l'utilizzo del proprio
        Account Utilizzatore, del login o della password a terze parti. L'Utilizzatore si obbliga ad avvisare
        tempestivamente Caricami nel caso in cui venisse a conoscenza di qualsiasi utilizzo non autorizzato del
        proprio login, password o Account Utilizzatore o di qualsiasi violazione della sicurezza del proprio Account
        Utilizzatore.
        5.4 Caricami potrà contattare l'Utilizzatore all'indirizzo email o al numero di telefono associato al proprio
        Account Utilizzatore (comunicato in fase di registrazione o inserito in un secondo momento). L'Utilizzatore
        prende atto e accetta che le comunicazioni relative alle presenti CGC potranno essere inviate da Caricami
        all'indirizzo e-mail o al numero telefonico utilizzato per la registrazione o a quello successivamente indicato
        dall'Utilizzatore nel proprio Account Utilizzatore.
        5.5 L'Utilizzatore prende atto ed accetta che con la registrazione alla Piattaforma viene accettato che,
        conformemente con le prassi e gli usi di internet, Caricami è libera di inserire all'interno del Sito, dell'App e
        della Piattaforma messaggi pubblicitari.
        5.6 Caricami si riserva il diritto di rifiutare per qualsiasi ragione la richiesta di registrazione alla Piattaforma
        proveniente da un Utilizzatore. Caricami si riserva il diritto di non attivare, sospendere o interrompere i
        Servizi Caricami, in qualsiasi momento, qualora i dati messi a disposizione dall'Utilizzatore risultino errati o
        non esistenti. Tutti i dati personali forniti dagli Utilizzatori in fase di registrazione e durante l'utilizzo dei
        Servizi Caricami saranno trattati da Caricami in conformità alla normativa in materia di privacy applicabile
        ed a quanto indicato nella privacy policy di Caricami.
        5.7 L'Utilizzatore accetta di utilizzare il Sito, l'App ed i Servizi Caricami esclusivamente per noleggiare e/o
        comprare Power Bank attraverso il Sito e l'App, subordinatamente all'accettazione delle presenti CGC.
        L'Utilizzatore si obbliga a non copiare, riprodurre, scaricare, ripubblicare, vendere, distribuire o rivendere
        qualsiasi dei Servizi Caricami o qualsiasi informazione, testo, immagine, grafica, video, audio, directory, file,
        database, elenco e/o contenuto disponibile sulla Piattaforma (di seguito, il "Contenuto della Piattaforma"). È
        vietato l'utilizzo di qualsiasi Contenuto della Piattaforma per scopi diversi da quelli espressamente consentiti
        dalle presenti CGC. L'Utilizzatore si obbliga a non intraprendere alcuna attività volta a minare l'integrità del
        sistema informatico di Caricami e/o di ogni altro Utilizzatore e/o ottenere l'accesso non autorizzato a tali
        sistemi.
        5.8 L'Utilizzatore avrà diritto a cancellare la propria registrazione alla Piattaforma inoltrando una richiesta
        direttamente sulla chat interna dell'App o contattando Caricami via e-mail all'indirizzo:
        supporto@caricami.it. Resta inteso che il recesso avrà effetto decorsi [15 (quindici)] giorni dalla relativa
        richiesta. Ogni rapporto con Caricami per la fruizione dei Servizi Caricami si intende cessato alla data in cui
        è stata cancellata la registrazione alla Piattaforma da parte dell'Utilizzatore.
        6. Violazioni
        6.1 Se l'Utilizzatore viola una delle CGC qui previste o Caricami ha fondati motivi per ritenere che
        l'Utilizzatore possa aver violato una delle CGC qui previste, Caricami ha il diritto di sospendere o disattivare
        l'Account Utilizzatore o di sospendere la fruibilità dei Servizi Caricami, senza che ciò possa comportare
        alcuna responsabilità in capo a Caricami. Caricami ha anche il diritto di limitare, negare o escludere qualsiasi
        utilizzo attuale o futuro di uno qualsiasi dei Servizi Caricami.
        6.2 L'Utilizzatore si obbliga ad indennizzare Caricami, i suoi affiliati, dipendenti, agenti e rappresentanti e di
        tenerli manlevati da ogni e qualsiasi danno, perdita, attività e passività (incluse le spese legali) causati
        dall'utilizzo improprio della Piattaforma e/o dei Servizi Caricami e/o dei Power Bank e/o delle Stazioni
        Caricami e/o derivante dalla violazione delle CGC.
        7. Servizio di Noleggio dei Power Bank e Istruzioni d'Uso
        7.1 Previa registrazione alla Piattaforma tramite l'App, Caricami offre agli Utilizzatori un servizio di
        noleggio di Power Bank per la ricarica di apparecchi elettronici.
        7.2 L'Utilizzatore direttamente dall'App geolocalizza e visualizza le Stazioni Caricami vicine in cui sono
        presenti Power Bank disponibili per il noleggio.
        7.3 Per sbloccare il Power Bank da noleggiare, l'Utilizzatore deve effettuare, attraverso l'App, la scansione
        del QR Code presente sulla Stazione Caricami. Mediante tale scansione, la Stazione Caricami riconoscerà il
        profilo dell'Utilizzatore e sbloccherà un Power Bank carico e pronto per la ricarica di apparecchi elettronici
        compatibili.
        7.4 Una volta entrato in possesso del Power Bank, l'Utilizzatore deve prendere dimestichezza con le
        funzionalità del Power Bank prima di utilizzarlo e verificare attentamente che sia in buone condizioni di
        utilizzo, non presenti anomalie fisiche e sia dotato di tutti i suoi componenti (compresi i cavetti di
        erogazione) e, se collegato al dispositivo elettronico, sia perfettamente funzionante ed inizi subito a caricarlo.
        In caso negativo, deve provvedere a segnalare le anomalie riscontrate direttamente dalla App mediante la
        procedura di segnalazione rapida e a restituire il Power Bank malfunzionante. Se l'Utilizzatore continua ad
        usare un Power Bank rotto o malfunzionante si assume la responsabilità di tale comportamento.
        L'Utilizzatore è l'unico responsabile del funzionamento del Power Bank noleggiato dal momento in cui
        procede a sganciarlo dalla Stazione Caricami e fino alla restituzione mediante posizionamento e aggancio ad
        una Stazione Caricami disponibile. L'Utilizzatore dovrà usare il Power Bank in modo ragionevole, prudente,
        diligente e conforme alle istruzioni d'uso. L'Utilizzatore è responsabile per qualsiasi danno causato da un uso
        improprio o da un abuso del Power Bank nonché del costo di tali danni. L'Utilizzatore è il solo responsabile
        dei danni e/o delle lesioni provocati a persone e/o cose durante il funzionamento del Power Bank mentre è in
        suo possesso. L'Utilizzatore non deve collegare il Power Bank con dispositivi elettronici danneggiati o non
        conformi.
        7.5 Il periodo di noleggio decorre trascorsi 5 (cinque) minuti dal momento in cui il Power Bank è sbloccato
        tramite la App e termina quando lo stesso Power Bank è riagganciato e bloccato correttamente in una
        Stazione Caricami disponibile geolocalizzata dalla App. Il periodo massimo di noleggio consentito è indicato
        nel piano tariffario consultabile dalla App. L'Utilizzatore deve restituire il Power Bank nelle stesse
        condizioni nelle quali lo ha prelevato. Caricami può richiedere all'Utilizzatore la restituzione del Power Bank
        in qualsiasi momento.
        7.6 Al momento della corretta restituzione e del blocco del Power Bank sulla apposita Stazione Caricami
        viene addebitato all'Utilizzatore il Costo del Noleggio.
        7.7 Saranno applicati costi aggiuntivi da sommarsi al Costo del Noleggio laddove, al termine del noleggio, il
        Power Bank non venga bloccato e restituito riposizionandolo correttamente in una Stazione Caricami
        geolocalizzata dalla App.
        7.8 Nel caso in cui il noleggio si protragga oltre la durata massima indicata nel piano tariffario, la mancata
        restituzione entro il suddetto termine sarà qualificata da Caricami come volontà da parte dell'Utilizzatore di
        acquistare il Power Bank e, per l'effetto, all'Utilizzatore verrà addebitato l'importo di Euro 1 (uno/00) quale
        prezzo per l'acquisto del Power Bank (di seguito, il "Prezzo di Acquisto"). Conseguentemente, il Power Bank
        diventerà di proprietà dell'Utilizzatore il quale non sarà più obbligato alla restituzione.
        7.9 Caricami accetta diverse modalità di pagamento, tra cui, a scopo indicativo, carta di credito, carta
        prepagata, PayPal, SatisPay e ApplePay. Caricami si riserva il diritto di rifiutare alcuni metodi di pagamento
        e di richiedere metodi di pagamento diversi. È direttamente consultabile dall'Account Utilizzatore lo storico
        dei noleggi e per ciascuno il relativo Costo del Noleggio. Nel caso in cui l'Utilizzatore richiedesse la fattura,
        dovrà fornire tutti i dati personali necessari alla sua emissione. Caricami emetterà, con cadenza [mensile], la
        fattura dei pagamenti effettuati in occasione della fruizione dei Servizi Caricami nel mese di riferimento e
        questa sarà consultabile direttamente dall'Account Utilizzatore.
        7.10 L'Utilizzatore deve contattare immediatamente Caricami e la polizia locale qualora si verifichi il furto
        del Power Bank noleggiato o un incidente durante l'uso del Power Bank con conseguenti lesioni personali.
        8. Deposito Cauzionale
        8.1 L'Utilizzatore è obbligato a prestare un deposito cauzionale pari all'importo indicato nel piano tariffario
        consultabile dalla App, che comunque non sarà superiore ad Euro 10,00 (dieci), prima di poter usufruire dei
        Servizi Caricami. Il deposito cauzionale deve restare disponibile durante tutto il periodo di ciascun utilizzo
        dei Servizi Caricami. Caricami verificherà la capienza del deposito cauzionale prestato e bloccherà la somma
        corrispondente (rendendola indisponibile da parte dell'Utilizzatore per altri acquisti) ma non addebiterà alcun
        importo all'Utilizzatore prima del termine del periodo di noleggio.
        8.2 Terminato il noleggio e/o la procedura di acquisto di un Power Bank, nel caso in cui il relativo costo sia
        andato a buon fine e, quindi, sia stato incassato da Caricami, l'importo trattenuto a titolo di deposito
        cauzionale sarà rilasciato e, conseguentemente, rientrerà nella disponibilità dell'Utilizzatore. Nel caso in cui,
        invece, il relativo costo non sia andato a buon fine e, quindi, non sia stato, in tutto o in parte, incassato da
        Caricami, quest'ultima sarà autorizzata ad incassare l'importo trattenuto a titolo di deposito cauzionale fino a
        concorrenza del costo del Servizio Caricami ad essa dovuto dall'Utilizzatore in questione, fatto salvo il diritto
        ad agire per il recupero del pagamento dell'eventuale maggior importo dovuto.
        9. Responsabilità di Caricami
        9.1 Caricami è responsabile esclusivamente per i danni diretti effettivamente subiti, pagati o sostenuti
        dall'Utilizzatore a causa di un inadempimento attribuibile a Caricami dei propri obblighi riguardanti i Servizi
        Caricami, [fino ad un importo che non potrà essere comunque superiore a quello totale pagato
        dall'Utilizzatore per la fruizione dei Servizi Caricami e rispetto ai quali è sorto il danno].
        9.2 Tuttavia, entro i limiti massimi consentiti dalla legge, né Caricami né i suoi agenti, amministratori,
        dipendenti, rappresentanti, ausiliari, affiliati, distributori, partner, licenziatari o altri soggetti coinvolti nella
        creazione, pubblicizzazione, promozione o comunque messa a disposizione della Piattaforma e dei suoi
        contenuti sono responsabili per (i) perdite o danni speciali, indiretti o consequenziali, perdite di produzione,
        di profitti, di guadagno, di contratti, di rivendicazioni, perdite o danni reputazionali, (ii) danni, perdite o costi
        diretti, indiretti o consequenziali subiti, sostenuti o pagati dall'Utilizzatore ai sensi di, derivanti da o in
        connessione con l'utilizzo, incapacità di utilizzo o malfunzionamento del Sito, dell'App o dei Servizi
        Caricami.
        9.3 Nel caso di Utilizzatore qualificabile come consumatore, agli acquisti effettuati tramite la Piattaforma si
        applicano le norme del Codice del Consumo (come di seguito definito) in tema di garanzia per vizi e
        difformità dei prodotti. Al Compratore saranno perciò riconosciuti i diritti di cui all'art. 130 e ss. del Codice
        del Consumo (come di seguito definito).
        9.4 Caricami non è obbligata a fornire un'assicurazione in relazione all'utilizzo del Power Bank. Laddove
        caricami avesse stipulato detta assicurazione, l'Utilizzatore resta comunque responsabile per qualsiasi danno
        alla proprietà, perdita, lesioni, multe e/o spese di qualsivoglia genere.
        9.5 Le disposizioni di legge vigenti in alcuni stati potrebbero vietare le limitazioni di responsabilità ora
        indicate. Nel caso in cui tali disposizioni risultino totalmente o parzialmente inapplicabili, le limitazioni di
        responsabilità ora indicate non avranno effetto e potrebbero essere riconosciuti all'Utilizzatori ulteriori diritti.
        L'Utilizzatore accetta e prende atto del fatto che in siffatti casi la responsabilità di Caricami non potrà essere
        comunque superiore all'importo totale pagato dall'Utilizzatore per la fruizione dei Servizi Caricami rispetto
        ai quali è sorto il danno.
        10. Esclusione di garanzie; Limitazioni di responsabilità
        10.1 L'Utilizzatore espressamente accetta e prende atto che l'utilizzo da parte dell'Utilizzatore dei Servizi
        Caricami è a suo completo rischio. I Servizi Caricami sono forniti "così come sono" e "come disponibili".
        10.2 Caricami importa in Europa i Power Bank che sono conformi alle direttive europee in materia di
        marcatura CE ed è proprietaria e responsabile della gestione, manutenzione e riparazione costante dei Power
        Bank. Tuttavia, ciò non significa che Caricami abbia l'obbligo di garantire che tutti i Power Bank disponibili
        siano senza anomalie.
        10.3 Caricami non garantisce che:
        (a) i Servizi Caricami incontreranno le necessità dell'Utilizzatore; o
        (b) i Servizi Caricami saranno ininterrotti, puntuali, sicuri, o privi di errori. Nessuna comunicazione o
        informazione, sia orale che scritta, che l'Utilizzatore ottiene dai Servizi Caricami o attraverso la Piattaforma
        potranno generare qualsivoglia garanzia non espressamente indicata nelle presenti CGC.
        10.4 Caricami ed i suoi incaricati, dipendenti, agenti, partner e licenzianti non potranno essere considerati
        responsabili nei confronti dell'Utilizzatore per qualsiasi danno diretto, indiretto, incidentale, speciale,
        consequenziale o esemplare ovvero per danni derivanti da perdite di profitto, avviamento, uso, dati, o per
        ogni altra perdita immateriale (anche se Caricami fosse stata avvisata della possibilità di tali danni) che
        risultino da:
        (a) l'utilizzo o l'impossibilità di utilizzo dei Servizi Caricami o della Piattaforma;
        (b) l'accesso non autorizzato o l'alterazione delle comunicazioni o dei dati dell'Utilizzatore;
        (c) le attività contemplate nelle presenti CGC; ovvero
        (d) ogni altra questione riguardante i Servizi Caricami o le presenti CGC.
        10.5 In nessun caso la responsabilità di Caricami ai sensi delle presenti CGC potrà eccedere [l'importo che è
        stato effettivamente pagato dall'Utilizzatore per la fruizione dei Servizi Caricami].
        10.6 Le summenzionate esclusioni e limitazioni sono parte essenziale alla base del business di Caricami, e
        Caricami non sottoscriverebbe le presenti CGC senza tali esclusioni e limitazioni. Si prega di consultare dei
        professionisti per comprendere il contenuto delle presenti CGC e per una valutazione di ogni specifica
        opinione, comunicazione, prodotto, servizio, o altro contenuto.
        10.7 Le disposizioni di legge vigenti in alcuni stati potrebbero vietare le limitazioni di responsabilità ora
        indicate. Nel caso in cui tali disposizioni risultino totalmente o parzialmente inapplicabili, le limitazioni di
        responsabilità ora indicate non avranno effetto e potrebbero essere riconosciuti all'Utilizzatore ulteriori
        diritti. L'Utilizzatore accetta e prende atto del fatto che in siffatti casi la responsabilità di Caricami non potrà
        essere comunque [superiore all'importo totale pagato dall'Utilizzatore per la fruizione dei Servizi Caricami e
        rispetto ai quali è sorto il danno].
        11. Responsabilità dell'Utilizzatore
        11.1 L'Utilizzatore dichiara e garantisce che:
        (a) ha pieni poteri e libertà di accettare le presenti CGC;
        (b) è maggiorenne;
        (c) utilizza la Piattaforma per scopi personali;
        (d) ha esperienza e familiarità con il funzionamento sicuro e competente di apparecchiature elettroniche e
        Power Bank;
        (e) tutti i dati personali (e quindi, nome, cognome e indirizzo) e le informazioni di pagamento forniti con la
        registrazione sono veri, corretti ed aggiornati;
        (f) con riferimento al servizio di noleggio, concorda espressamente di accettare la perdita del diritto di
        recesso a seguito della piena e completa esecuzione del Servizio Caricami di noleggio di Power Bank, ai
        sensi dell'art. 59, lettera (a) del Codice del Consumo (come di seguito definito). Resta inteso che la completa
        prestazione del servizio si verifica al momento della restituzione del Power Bank mediante il posizionamento
        e il riaggancio corretti alla Stazione Caricami o allo scadere del periodo massimo di noleggio consentito
        indicato nel piano tariffario.
        11.2 L'Utilizzatore dichiara e garantisce che le informazioni ed i documenti forniti dall'Utilizzatore durante il
        processo di registrazione o su richiesta di Caricami sono corretti, veri ed aggiornati. L'Utilizzatore si obbliga
        inoltre a mantenere sempre aggiornate le informazioni indicate sull'Account Utilizzatore.
        11.3 Attraverso la registrazione alla Piattaforma, l'Utilizzatore accetta, anche ai sensi dell'informativa privacy
        di Caricami, che tutte le informazioni fornite a Caricami siano processate e trattate in conformità a quanto
        previsto nell'informativa privacy e in ogni legge applicabile.
        11.4 L'Utilizzatore dichiara e garantisce che tutte le informazioni che trasmetterà a Caricami:
        (a) sono vere, accurate e complete;
        (b) non sono false, ingannevoli o fuorvianti;
        (c) non contengono alcun link ad altri siti web il cui contenuto potrebbe causare una violazione delle presenti
        CGC.
        11.5 L'Utilizzatore inoltre dichiara e garantisce che:
        (a) è responsabile di ogni Power Bank noleggiato tramite il suo Account Utilizzatore e di qualsivoglia
        soggetto terzo che faccia uso di tale Power Bank, assicurandosi che quest'ultimo legga e rispetti le presenti
        CGC;
        (b) utilizzerà il Power Bank noleggiato in modo conforme alla comune prudenza, con ogni e più ampia
        diligenza e nel rispetto delle istruzioni di utilizzo previste nelle presenti CGC ed indicate sul Sito e sull'App;
        (c) si obbliga a custodire diligentemente il Power Bank noleggiato;
        (d) non appena procede allo sblocco del Power Bank dalla Stazione Caricami, e prima di utilizzarlo per
        ricaricare apparecchi elettronici, controllerà l'integrità e l'efficienza del dispositivo nonché l'assenza di
        anomalie;
        (e) non distrugge, danneggia o trattenga dolosamente il Power Bank. Nel caso in cui il Power Bank sia
        danneggiato è necessario segnalarlo immediatamente tramite la App, restituirlo mediante posizionamento e
        aggancio all'apposita Stazione Caricami;
        (f) non utilizzerà il Power Bank durante condizioni meteo avverse, quali, a titolo esemplificativo ma non
        esaustivo, tempeste di grandine, di fulmini e forti piogge, né lo esporrà al sole, ad eventi atmosferici, a fonti
        di colore, ovvero lo immergerà in acqua o altri liquidi;
        (g) non danneggerà, lancerà, colpirà, distruggerà, smonterà il Power Bank né staccherà i suoi componenti,
        non utilizzerà Power Bank che presenta difetti o anomalie e non lo collegherà con dispostivi danneggiati o
        difettosi;
        (h) accetta che Caricami non è in alcun modo responsabile per i malfunzionamento o il danneggiamento dei
        dispositivi elettronici ricaricati mediante i Power Bank;
        (i) Caricami ha fornito tutte le istruzioni necessarie per l'utilizzo conforme del Power Bank;
        (l) è responsabile per l'accesso alla rete dati necessario per utilizzare i Servizi Caricami. Le tariffe e i costi
        della rete dati e della messaggistica potrebbero essere addebitati in caso di accesso ai Servizi Caricami da un
        dispositivo abilitato wireless;
        (m) è responsabile per l'aggiornamento di hardware o dispositivi compatibili necessari per l'accesso ai
        Servizi Caricami, al Sito e all'App;
        (n) non utilizza i Servizi Caricami o il Sito con scopi fraudolenti e/o illegali ed è a conoscenza di tutte le
        norme, i regolamenti, e i codici applicabili al funzionamento sicuro e legale di Power Bank;
        (o) non utilizza i Servizi Caricami per conto di soggetti terzi, fatti salvi i casi espressamente autorizzati per
        iscritto da Caricami;
        (p) non effettua attività di spamming o phishing;
        (q) non svolge alcuna attività che potrebbe agevolare la crescita di virus informatici o altri strumenti
        distruttivi e codici che possono danneggiare, interferire, intercettare, disattivare, distruggere qualsiasi
        software e hardware, dato ovvero informazione personale;
        (r) non svolge alcuna attività che persegue il fine di minare l'integrità dei dati o dei sistemi utilizzati da
        Caricami e/o da qualsiasi altro Utilizzatore o che raggiunge lo scopo di ottenere un accesso non autorizzato a
        tali dati o sistemi.
        11.6 L'Utilizzatore dovrà manlevare e tenere indenne Caricami da tutti i danni, cause, controversie, decisioni,
        perdite, spese e costi, inclusi, a titolo esemplificativo e non esaustivo, spese e costi legali, subiti e/o subendi
        da Caricami per effetto e/o in relazione alla violazione da parte dell'Utilizzatore delle presenti CGC e/o alla
        non veridicità e/o accuratezza delle dichiarazioni e garanzie contenute nelle presenti CGC e prestate da
        ciascun Utilizzatore per effetto della accettazione delle presenti CGC in sede di registrazione alla
        Piattaforma.
        12. Forza maggiore
        12.1 Caricami non potrà mai essere ritenuta responsabile per un ritardo o un errore o un'interruzione riguardo
        ai contenuti o ai Servizi Caricami, che derivino direttamente o indirettamente da eventi naturali o eventi che
        non rientrino nel controllo di Caricami, inclusi, a titolo esemplificativo e non esaustivo, problemi legati a
        Internet, telecomunicazioni o altri guasti alle apparecchiature, mancanza di elettricità, scioperi, conflitti di
        lavoro, disordini, insurrezioni, disordini civili, manodopera o carenza di materiali, incendi, inondazioni,
        tempeste, esplosioni, guerre, azioni governative, ordinanze di tribunali nazionali o internazionali o la loro
        mancata esecuzione da parte di terzi.
        13. Diritti di proprietà intellettuale
        13.1 Caricami è l'unico proprietario di tutti i diritti e contenuti della Piattaforma, del Sito, dell'App e dei
        Servizi Caricami. La Piattaforma, il Sito, l'App e i Servizi Caricami rappresentano segreti commerciali e altri
        diritti di proprietà intellettuale protetti a livello globale dal diritto d'autore e dalle leggi applicabili. Tutti i
        diritti di proprietà e di proprietà intellettuale della Piattaforma, del Sito, dell'App e dei Servizi Caricami non
        espressamente concessi sono e saranno di proprietà esclusiva di Caricami.
        13.2 Caricami concede all'Utilizzatore una licenza limitata, non esclusiva, non sub-licenziabile, revocabile e
        non trasferibile esclusivamente e limitatamente per l'utilizzo del Sito e dell'App in correlazione alla fruizione
        dei Servizi Caricami e l'accesso ai contenuti del Sito resi disponibili tramite i Servizi Caricami, in ogni caso
        esclusivamente per uso personale e non commerciale.
        13.3 Il nome "Caricami", il logo e tutte le icone e loghi collegati e marchi o marchi registrati sono marchi di
        proprietà di Caricami. Qualsiasi copia, modifica, utilizzo o pubblicazione non autorizzati di tali marchi sono
        severamente vietati. Tutti gli altri marchi citati non di proprietà di Caricami che compaiono sul Sito o su uno
        qualsiasi dei Servizi Caricami sono di proprietà dei rispettivi titolari.
        13.4 E' consentito condividere pubblicamente i contenuti della Piattaforma utilizzando le icone disponibili
        sulla Piattaforma, relative a social network esterni, nel rispetto delle presenti CGC. Coloro che condividono
        pubblicamente contenuti della Piattaforma, si assumono ogni responsabilità rispetto al contenuto dei
        messaggi che condividono.
        14. Recesso
        14.1 In caso di noleggio di un Power Bank, ai sensi dell'art. 49, paragrafo 1, lettera (m) del Codice del
        Consumo (come di seguito definito), l'Utilizzatore che ha noleggiato un Power Bank è espressamente escluso
        dal diritto di recesso ai sensi dell'art. 59, lettera (a) del Codice del Consumo (come di seguito definito) per i
        contratti di servizi dopo la completa prestazione del servizio, se l'esecuzione è iniziata con l'accordo espresso
        dell'Utilizzatore (qualificabile come consumatore) e con l'accettazione della perdita del diritto di recesso a
        seguito della piena esecuzione del contratto da parte di Caricami. Pertanto, in caso di noleggio, l'Utilizzatore
        potrà soltanto restituire quanto prima il Power Bank, in conformità a quanto previsto nelle presenti CGC, nel
        caso in cui non intenderà più usufruire del servizio di noleggio.
        14.2 In caso di acquisto di un Power Bank, ai sensi dell'art. 49, paragrafo 1, lettera (h) del Codice del
        Consumo (come di seguito definito), l'Utilizzatore che ha acquistato un Power Bank (di seguito, il
        "Compratore") ha il diritto di recedere da ciascun acquisto, senza fornire alcuna motivazione, entro 14 giorni
        dal giorno in cui il Compratore o il terzo, diverso dal vettore e designato dal Compratore, acquisisce la
        proprietà del Power Bank per effetto della compravendita (di seguito, il "Periodo di Reso"). Per esercitare il
        diritto di recesso, il Compratore dovrà notificare per iscritto (ad esempio, mediante e-mail) la propria
        decisione di recedere da ciascun acquisto relativo a ciascun Power Bank a Caricami S.r.l., Via Aosta n. 4,
        20155 Milano (MI), indirizzo e-mail supporto@caricami.it. A tal fine è possibile, ma non obbligatorio,
        utilizzare il modulo standard di recesso che può essere qui scaricato [inserire modulo standard di recesso -
        Allegato 1]. Il Compratore può anche completare ed inviare il modulo di recesso od ogni altra dichiarazione
        esplicita sul Sito www.caricami.it. In tal caso, Caricami invierà immediatamente un avviso di ricevimento
        tramite e-mail. Al fine di rispettare il Periodo di Reso, il Compratore dovrà inviare una comunicazione di
        esercizio del diritto di recesso prima della data di scadenza del periodo di cui sopra.
        14.3 Successivamente all'esercizio del recesso dall'acquisto, Caricami rimborserà il Prezzo di Acquisto
        nonché gli eventuali ragionevoli costi di spedizione in sede di reso (appositamente documentati
        dall'Utilizzatore), in ogni caso non più tardi di quattordici (14) giorni dal giorno in cui Caricami avrà avuto
        conoscenza della decisione di esercitare il diritto di recesso. Tali rimborsi saranno effettuati utilizzando il
        medesimo strumento di pagamento utilizzato dal Compratore, salvo che sia stato concordato diversamente.
        In ogni caso, il Compratore non dovrà sopportare alcun costo in conseguenza di tali rimborsi.
        14.4 I rimborsi potranno essere sospesi fino al ricevimento, da parte di Caricami, dei Power Bank oggetto di
        reso ovvero fino alla dimostrazione da parte del Compratore della spedizione di tali beni. Il Compratore è
        tenuto a restituire tutti i Power Bank oggetto di reso senza indebito ritardo e comunque entro 14 giorni dal
        giorno in cui Caricami viene informata della decisione di esercitare il diritto di recesso.
        14.5 I Power Bank devono essere restituiti, a mezzo posta o corriere, all'indirizzo della sede legale di
        Caricami S.r.l. (Via Aosta n. 4, 20155 Milano (MI), nelle condizioni originali, non rovinati, danneggiati,
        sporcati e in stato tale da permetterne la rivendita nonché muniti di tutti gli eventuali accessori e del
        documento di trasporto, in modo da permettere a Caricami di identificare il Compratore (nome, cognome,
        indirizzo e data di acquisto). L'Utilizzatore dovrà provvedere ad imballare il Power Bank oggetto di reso in
        apposita busta/contenitore. Ove il Power Bank restituito non sia conforme a quanto prescritto nel presente
        articolo, il recesso non avrà efficacia. I costi della restituzione dei Power Bank sono a carico di Caricami
        purché il Compratore utilizzi i documenti per il reso forniti da Caricami e spedisca la merce nel paese dal
        quale è avvenuta la consegna, in caso contrario i costi saranno a carico del Compratore. Il Compratore è
        responsabile per la diminuzione del valore del Power Bank dovuta a manipolazione del Power Bank diversa
        da quella necessaria per stabilire la natura, le caratteristiche e il funzionamento del Power Bank stesso.
        15. Tolleranza
        L'eventuale tolleranza da parte di Caricami di una condotta dell'Utilizzatore in violazione delle CGC non
        costituisce rinuncia ai diritti derivanti per Caricami dalle disposizioni violate, né al diritto di esigere
        l'adempimento di tutti i termini e condizioni previsti nelle presenti CGC.
        16. Comunicazioni
        16.1 Tutte le comunicazioni legali o le richieste da o sul Sito o tramite i Servizi Caricami possono essere
        effettuate per iscritto ed inviate a Caricami tramite e-mail (salvo che diversamente specificato da Caricami)
        al seguente indirizzo: supporto@caricami.it.
        16.2 Caricami provvederà ad effettuare tutte le comunicazioni all'Utilizzatore all'indirizzo e-mail o l'indirizzo
        fisico fornito dall'Utilizzatore durante la procedura di registrazione ovvero successivamente indicato sul
        proprio Account Utilizzatore. L'Utilizzatore è il solo responsabile per l'aggiornamento costante di tali
        informazioni fornite a Caricami.
        17. Miscellanea
        17.1 Qualora una o più disposizioni delle presenti CGC dovessero rivelarsi nulle o altrimenti invalide o
        inefficaci, Caricami ed l'Utilizzatore resteranno vincolati da tutte le altre previsioni di cui alle presenti CGC.
        In tal caso, essi sostituiranno le disposizioni invalide o non vincolanti con altre disposizioni valide e
        vincolanti che abbiano, nella misura massima possibile, un effetto simile a quelle invalide o inefficaci,
        tenendo in considerazione i contenuti e lo scopo delle presenti CGC.
        17.2 L'Utilizzatore non è autorizzato a cedere le presenti CGC né alcun interesse che l'Utilizzatore potrebbe
        avere in tali CGC senza il previo consenso scritto da parte di Caricami. Qualsiasi cessione vietata sarà
        considerata nulla o comunque inefficace nei confronti di Caricami.
        17.3 I titoli degli articoli utilizzati nelle presenti CGC sono stati disposti per mera convenienza e non
        possono essere utilizzati per interpretare il significato o l'intento delle presenti CGC.
        18. Legge applicabile
        18.1 Le presenti CGC sono disciplinate e sono da interpretarsi in conformità alla legge italiana e, in
        particolare (ma senza limitazioni), nel caso di Utilizzatore qualificabile come consumatore, in conformità al
        Codice del Consumo (d.lgs. 6 settembre 2005, n. 206, di seguito, il "Codice del Consumo") e del d.lgs. 9
        aprile 2003, n. 70, disciplinante il commercio elettronico.
        19. Giurisdizione e risoluzione delle controversie
        19.1 Nel caso di Utilizzatore qualificabile come consumatore, per ogni eventuale controversia relativa
        all'interpretazione, alla validità e all'esecuzione o in qualsiasi modo derivante dalle presenti CGC e/o dalle
        attività connesse all'utilizzo del Sito e/o dei Servizi Caricami sarà devoluta alla competenza esclusiva del
        foro della città ove l'Utilizzatore ha la propria residenza od il proprio domicilio, ai sensi del Codice del
        Consumo. In tutti gli altri casi sarà competente in via esclusiva il foro di Milano.
        19.2 Caricami suggerisce all'Utilizzatore di render previamente nota l'esistenza di una qualsiasi controversia
        contattando il servizio clienti di Caricami presso http: supporto@caricami.it.
        19.3 Nel caso di Utilizzatore qualificabile come consumatore, l'Utilizzatore può attivare una procedura per la
        composizione stragiudiziale della controversia ai sensi dei requisiti richiesti dal Codice del Consumo. Nel
        caso in cui l'Utilizzatore attivi la precedente procedura, Caricami garantisce la sua partecipazione ad un
        tentativo di conciliazione amichevole che l'utente può promuovere davanti a RisolviOnline, un servizio
        indipendente e istituzionale fornito dalla Camera Arbitrale della Camera di Commercio di Milano.
        19.4 L' Utilizzatore ha anche il diritto di utilizzare la procedura di risoluzione delle controversie online
        disponibile al http://ec.europa.eu/consumers/odr/.
        Allegato 1 - Modulo standard di recesso
        Ai sensi e per gli effetti di cui agli artt. 1341 e 1342 del Codice Civile italiano, ove applicabile, l'Utilizzatore
        dichiara di aver letto e di aver espressamente e specificatamente approvato i seguenti articoli:
        - Articolo 2 (Condizioni generali di contratto)
        - Articolo 3 (Privacy)
        - Articolo 4 (Prestazione dei Servizi Caricami)
        - Articolo 5 (Account Utilizzatore)
        - Articolo 6 (Violazioni)
        - Articolo 7 (Servizio di Noleggio dei Power Bank e Istruzioni d'Uso)
        - Articolo 8 (Deposito Cauzionale)
        - Articolo 9 (Responsabilità di Caricami)
        - Articolo 10 (Esclusione di garanzie; Limitazioni di responsabilità)
        - Articolo 11 (Responsabilità dell'Utilizzatore)
        - Articolo 12 (Forza Maggiore)
        - Articolo 13 (Diritti di proprietà intellettuale)
        - Articolo 14 (Recesso)
        - Articolo 15 (Tolleranza)
        - Articolo 16 (Comunicazioni)
        - Articolo 17 (Miscellanea)
        - Articolo 18 (Legge Applicabile)
        - Articolo 19 (Giurisdizione e risoluzione delle controversie)
        Allegato 1
        Modulo standard di recesso
        (Ai sensi dell'art. 49, paragrafo 1, lettera (h) del Codice del Consumo)
        Data: _________________
        Luogo: _________________
        Email: supporto@caricami.it
        Caricami S.r.l.
        Via Aosta n. 4,
        20155 Milano (MI)
        Italia
        Esercizio del diritto di recesso:
        Con la presente notifico di voler esercitare il recesso dal contratto concluso per l'acquisto del/i seguente/i
        Power Bank:
        - ____________________________________________________________ [Elencare Power Bank
        acquistato/i]
        - Acquistato/i il: __________________________
        - Nome del Consumatore: _________________________________________________
        - Indirizzo del Consumatore: _________________________________________________
        - Data: _________________
        _____________________
        [Firma del Consumatore, solo se il modulo trasmesso è cartaceo]
            </Text>
          </ScrollView>
      </View>
    </View>
  )
}

export default TermsCondition

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.dark,
    width: '100%',
    height: '100%',
    position: 'relative'
  },
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    marginTop: 40,
    position: 'relative',
    height: 80,
    marginBottom: 0,
  },
  bodyContainer: {
    backgroundColor: colors.light,
    padding: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    height: '90%',
    position: 'fixed',
    bottom: 0,
    top: 0,
    zIndex: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
  },
  textStyle: {
    width: '100%',
    paddingHorizontal: 20,
    color: colors.muted
  }
})
=======

const TermsCondition = () => {
  return (
    <View style={styles.container}>
    <TouchableOpacity style={styles.backButton}>
      {/* Icona freccia */}
      <Text style={styles.backButtonText}>{'<'}</Text>
    </TouchableOpacity>

    <View style={styles.titleContainer}>
      <Text style={styles.title}>TERMINI E CONDIZIONI</Text>
    </View>

    <View style={styles.sectionContainer}>
      
      <Text style={styles.description}>
      CONDIZIONI GENERALI DI UTILIZZO DEI SERVIZI CARICAMI DA PARTE DEGLI UTENTI
        REGISTRATI SULLA PIATTAFORMA (COME DI SEGUITO DEFINITA)
        Ciascun Utilizzatore (come di seguito definito) è invitato a leggere con attenzione le presenti condizioni
        generali di contratto (di seguito le "CGC") prima di utilizzare i Servizi Caricami.
        Il presente documento è un accordo giuridicamente vincolante tra l'Utilizzatore (come di seguito definito),
        che si sarà previamente registrato sulla Piattaforma (come di seguito definita), e la società Caricami S.r.l.,
        con sede legale in Via Aosta n. 4, 20155 Milano (MI), numero di iscrizione al Registro delle Imprese di
        Milano - Monza - Brianza - Lodi n. 10912060968 e REA n. MI-2565872 (di seguito "Caricami"), in qualità
        di titolare e amministratore del Sito (come di seguito definito) e dell'App (come di seguito definita).
        1. Definizioni
        "Costo del Noleggio" indica il costo del noleggio dovuto da parte dell'Utilizzatore al termine del periodo di
        noleggio, vale a dire al momento del posizionamento e del riaggancio del Power Bank alla Stazione
        Caricami, che è calcolato in base al piano tariffario consultabile direttamente dalla App.
        "Piattaforma" indica la piattaforma (come per esempio il Sito e/o l'App) attraverso la quale gli Utilizzatori
        possono accedere alla fruizione dei Servizi Caricami.
        "Power Bank" indica una batteria portatile a prelievo e rilascio automatizzato, di proprietà di Caricami,
        adatta esclusivamente per la ricarica di smartphone, tablet, sigarette elettroniche e altri dispostivi elettronici
        compatibili, attraverso l'erogazione di un flusso di elettricità non pericolosa e non idonea alla trasmissione
        dei dati. Pertanto, i Power Bank Caricami non possono in alcun modo prelevare e/o raccogliere e/o registrare
        informazioni o dati dal dispositivo che ricaricano. Ciascun Power Bank dispone di n. 3 cavi ed è idoneo alla
        ricarica di smartphone, tablet e altri dispostivi elettronici compatibili.
        "Servizi Caricami" includono:
        (a) il download dell'applicazione per smartphone [e tablet] di Caricami (di seguito, l'"App") tramite App
        Store (per i dispositivi dotati di sistema operativo iOS) e Google Play Store (per i dispositivi dotati di sistema
        operativo Android);
        (b) la registrazione dell'Utilizzatore sulla Piattaforma (tramite App, Sito, o altri mezzi idonei);
        (c) l'utilizzo dell'App per usufruire del servizio di noleggio distribuito di Power Bank;
        (d) la vendita dei Power Bank;
        (e) la gestione di tutte le attività riguardanti il noleggio o la vendita dei Power Bank [e l'eventuale assistenza
        post noleggio/vendita];
        (f) la creazione di una pagina personale per ciascun Utilizzatore a seguito della registrazione sulla
        Piattaforma (di seguito l'"Account Utilizzatore"), mediante la quale (1) noleggiare/acquistare Power Bank,
        (2) gestire le proprie informazioni personali sulla Piattaforma e (3) consultare lo storico dei noleggi
        effettuati.
        "Sito" indica il sito web [www.caricami.it] amministrato da Caricami.
        "Stazione Caricami" indica ciascuna stazione di noleggio di Power Bank geolocalizzata dalla App, di
        proprietà di Caricami, presso la quale è possibile prelevare o restituire i Power Bank.
        "Utilizzatore" indica qualsiasi soggetto maggiorenne che abbia effettuato e completato con successo la
        registrazione alla Piattaforma.
        2. Condizioni generali di contratto
        2.1 Le presenti CGC costituiscono i termini e le condizioni che regolano l'utilizzo dei Servizi Caricami da
        parte degli Utilizzatori. Scaricando la App o registrandosi alla Piattaforma, gli Utilizzatori accettano
        integralmente ed incondizionatamente le presenti CGC.
        2.2 Le presenti CGC, il contenuto e la struttura di queste pagine e la Piattaforma sono detenuti, operati e
        forniti da Caricami, ai termini e condizioni qui contemplati.
        2.3 L'Utilizzatore prende atto e accetta che Caricami potrà modificare unilateralmente le CGC in qualsiasi
        momento pubblicando la versione modificata delle CGC sul Sito e inviando apposita comunicazione
        mediante l'App all'Utilizzatore. Resta inteso che l'Utilizzatore potrà recedere dalle presenti CGC a seguito di
        tali modifiche delle CGC, mediante cancellazione della propria registrazione dalla Piattaforma. La fruizione
        dei Servizi Caricami e l'utilizzo della Piattaforma da parte dell'Utilizzatore a seguito della modifica delle
        CGC varrà come accettazione da parte di quest'ultimo delle modifiche apportate da Caricami alle CGC.
        2.4 Le presenti CGC sono state redatte in lingua italiana e le versioni tradotte in altre lingue hanno natura
        meramente informativa. Pertanto, in caso di conflitto sull'interpretazione delle presenti CGC varrà
        esclusivamente la versione originale in lingua italiana.
        2.5 L'Utilizzatore non potrà e non è autorizzato ad apportare alcuna modifica alle presenti CGC.
        2.6 Le presenti CGC avranno effetti dal momento in cui, essendo stata completata con successo la
        registrazione alla Piattaforma, sarà attivato l'Account Utilizzatore da parte di Caricami, e cesseranno di avere
        effetti alla chiusura definitiva di tale Account Utilizzatore da parte di Caricami o dell'Utilizzatore. A tal
        riguardo, chi fosse interessato a creare un Account Utilizzatore sulla Piattaforma è invitato a completare la
        procedura di registrazione descritta ai seguenti Articoli 4 e 5.
        3. Privacy
        Gli Utilizzatori sono tenuti a consultare ed accettare, mediante la registrazione alla Piattaforma, la privacy
        policy di Caricami, compresa la cookie policy, applicabile ai Servizi Caricami.
        4. Prestazione dei Servizi Caricami
        4.1 Tutti i Servizi Caricami offerti tramite la Piattaforma sono prestati da Caricami. I Servizi Caricami e tutti
        i relativi diritti sono e resteranno di proprietà di Caricami. E' possibile che alcuni dei Servizi Caricami siano
        forniti da terzi fornitori di Caricami.
        4.2 Per poter usufruire dei Servizi Caricami, l'Utilizzatore deve scaricare la App e registrarsi seguendo
        l'apposita procedura ivi descritta. Caricami si riserva il diritto di limitare o modificare i termini e le
        condizioni d'uso dei Servizi Caricami.
        4.3 A sua esclusiva discrezione, Caricami potrà limitare, negare o creare diversi livelli di accesso e di
        utilizzo dei Servizi Caricami (o di una parte dei Servizi Caricami).
        4.4 Ai fini dell'utilizzo dei Servizi Caricami, fatte salve le specifiche disposizioni di legge di carattere
        imperativo, l'Utilizzatore accetta di ricevere da parte di Caricami comunicazioni in forma elettronica e
        riconosce che tutti i contratti, le notifiche, le informative e le altre comunicazioni che Caricami gli fornirà in
        forma elettronica soddisfano il requisito della forma scritta quando previsto dalla legge.
        4.5 Caricami non è responsabile (e non ha alcun obbligo di verifica in tal senso) per l'errata o imprecisa
        indicazione dell'indirizzo e-mail, del numero di telefono cellulare e dei dati di pagamento inseriti
        dall'Utilizzatore.
        4.6 Caricami invita gli Utilizzatori a leggere la privacy policy e la cookie policy di Caricami per avere
        maggiori informazioni circa le modalità tramite le quali Caricami può contattare gli Utilizzatori.
        4.7 Nel caso in cui un Utilizzatore voglia contattare il servizio clienti per qualsiasi motivo riguardante i
        Servizi Caricami, ivi inclusa qualsiasi richiesta o lamentela, o per qualsiasi altro motivo, l'Utilizzatore può
        contattare Caricami [compilando il modulo disponibile nella sezione "Contatti" del Sito o] inviando una email al seguente indirizzo: supporto@caricami.it.
        5. Account Utilizzatore
        5.1 Per accedere ai Servizi Caricami, l'Utilizzatore deve scaricare la App e richiedere la registrazione alla
        Piattaforma. La registrazione è una procedura che prevede, da parte dell'Utilizzatore, l'inserimento dei propri
        dati anagrafici e personali, l'accettazione delle CGC, della privacy policy e della cookie policy. La procedura
        di registrazione è descritta dettagliatamente sul Sito e/o sull'App. Come condizione per l'accesso e l'utilizzo
        del Sito, dell'App e dei Servizi Caricami, l'Utilizzatore accetta e si obbliga a rispettare tutte le leggi e i
        regolamenti applicabili nonché le presenti CGC (così come di volta in volta modificate e/o integrate).
        5.2 Previa registrazione alla Piattaforma, Caricami assegna un account a ciascun Utilizzatore registrato,
        identificato da un ID univoco. Gli Utilizzatori possono accedere al proprio Account Utilizzatore secondo
        diverse modalità, fra cui:
        • Inserimento di username e di un codice monouso ricevuto via email o via SMS;
        • Inserimento di indirizzo email e di un codice monouso ricevuto via email;
        • Inserimento di un numero di telefono cellulare e di un codice monouso ricevuto via SMS.
        L'Utilizzatore può, in qualunque momento, modificare o eliminare i dati inseriti durante la fase di
        registrazione alla Piattaforma inoltrando una richiesta direttamente sulla chat interna dell'App o contattando
        Caricami via e-mail all'indirizzo: supporto@caricami.it.
        5.3 Ogni Utilizzatore può accedere all'Account Utilizzatore con le modalità descritte al precedente paragrafo
        5.2. Mediante un Account Utilizzatore si può noleggiare un solo Power Bank per volta. L'Utilizzatore è
        l'unico responsabile del mantenimento della segretezza e della sicurezza dei dati utilizzati per l'accesso
        all'Account Utilizzatore (per esempio login e password) nonché di tutte le attività che avvengono sul proprio
        Account Utilizzatore. Nessun Utilizzatore può condividere, assegnare o consentire l'utilizzo del proprio
        Account Utilizzatore, del login o della password a terze parti. L'Utilizzatore si obbliga ad avvisare
        tempestivamente Caricami nel caso in cui venisse a conoscenza di qualsiasi utilizzo non autorizzato del
        proprio login, password o Account Utilizzatore o di qualsiasi violazione della sicurezza del proprio Account
        Utilizzatore.
        5.4 Caricami potrà contattare l'Utilizzatore all'indirizzo email o al numero di telefono associato al proprio
        Account Utilizzatore (comunicato in fase di registrazione o inserito in un secondo momento). L'Utilizzatore
        prende atto e accetta che le comunicazioni relative alle presenti CGC potranno essere inviate da Caricami
        all'indirizzo e-mail o al numero telefonico utilizzato per la registrazione o a quello successivamente indicato
        dall'Utilizzatore nel proprio Account Utilizzatore.
        5.5 L'Utilizzatore prende atto ed accetta che con la registrazione alla Piattaforma viene accettato che,
        conformemente con le prassi e gli usi di internet, Caricami è libera di inserire all'interno del Sito, dell'App e
        della Piattaforma messaggi pubblicitari.
        5.6 Caricami si riserva il diritto di rifiutare per qualsiasi ragione la richiesta di registrazione alla Piattaforma
        proveniente da un Utilizzatore. Caricami si riserva il diritto di non attivare, sospendere o interrompere i
        Servizi Caricami, in qualsiasi momento, qualora i dati messi a disposizione dall'Utilizzatore risultino errati o
        non esistenti. Tutti i dati personali forniti dagli Utilizzatori in fase di registrazione e durante l'utilizzo dei
        Servizi Caricami saranno trattati da Caricami in conformità alla normativa in materia di privacy applicabile
        ed a quanto indicato nella privacy policy di Caricami.
        5.7 L'Utilizzatore accetta di utilizzare il Sito, l'App ed i Servizi Caricami esclusivamente per noleggiare e/o
        comprare Power Bank attraverso il Sito e l'App, subordinatamente all'accettazione delle presenti CGC.
        L'Utilizzatore si obbliga a non copiare, riprodurre, scaricare, ripubblicare, vendere, distribuire o rivendere
        qualsiasi dei Servizi Caricami o qualsiasi informazione, testo, immagine, grafica, video, audio, directory, file,
        database, elenco e/o contenuto disponibile sulla Piattaforma (di seguito, il "Contenuto della Piattaforma"). È
        vietato l'utilizzo di qualsiasi Contenuto della Piattaforma per scopi diversi da quelli espressamente consentiti
        dalle presenti CGC. L'Utilizzatore si obbliga a non intraprendere alcuna attività volta a minare l'integrità del
        sistema informatico di Caricami e/o di ogni altro Utilizzatore e/o ottenere l'accesso non autorizzato a tali
        sistemi.
        5.8 L'Utilizzatore avrà diritto a cancellare la propria registrazione alla Piattaforma inoltrando una richiesta
        direttamente sulla chat interna dell'App o contattando Caricami via e-mail all'indirizzo:
        supporto@caricami.it. Resta inteso che il recesso avrà effetto decorsi [15 (quindici)] giorni dalla relativa
        richiesta. Ogni rapporto con Caricami per la fruizione dei Servizi Caricami si intende cessato alla data in cui
        è stata cancellata la registrazione alla Piattaforma da parte dell'Utilizzatore.
        6. Violazioni
        6.1 Se l'Utilizzatore viola una delle CGC qui previste o Caricami ha fondati motivi per ritenere che
        l'Utilizzatore possa aver violato una delle CGC qui previste, Caricami ha il diritto di sospendere o disattivare
        l'Account Utilizzatore o di sospendere la fruibilità dei Servizi Caricami, senza che ciò possa comportare
        alcuna responsabilità in capo a Caricami. Caricami ha anche il diritto di limitare, negare o escludere qualsiasi
        utilizzo attuale o futuro di uno qualsiasi dei Servizi Caricami.
        6.2 L'Utilizzatore si obbliga ad indennizzare Caricami, i suoi affiliati, dipendenti, agenti e rappresentanti e di
        tenerli manlevati da ogni e qualsiasi danno, perdita, attività e passività (incluse le spese legali) causati
        dall'utilizzo improprio della Piattaforma e/o dei Servizi Caricami e/o dei Power Bank e/o delle Stazioni
        Caricami e/o derivante dalla violazione delle CGC.
        7. Servizio di Noleggio dei Power Bank e Istruzioni d'Uso
        7.1 Previa registrazione alla Piattaforma tramite l'App, Caricami offre agli Utilizzatori un servizio di
        noleggio di Power Bank per la ricarica di apparecchi elettronici.
        7.2 L'Utilizzatore direttamente dall'App geolocalizza e visualizza le Stazioni Caricami vicine in cui sono
        presenti Power Bank disponibili per il noleggio.
        7.3 Per sbloccare il Power Bank da noleggiare, l'Utilizzatore deve effettuare, attraverso l'App, la scansione
        del QR Code presente sulla Stazione Caricami. Mediante tale scansione, la Stazione Caricami riconoscerà il
        profilo dell'Utilizzatore e sbloccherà un Power Bank carico e pronto per la ricarica di apparecchi elettronici
        compatibili.
        7.4 Una volta entrato in possesso del Power Bank, l'Utilizzatore deve prendere dimestichezza con le
        funzionalità del Power Bank prima di utilizzarlo e verificare attentamente che sia in buone condizioni di
        utilizzo, non presenti anomalie fisiche e sia dotato di tutti i suoi componenti (compresi i cavetti di
        erogazione) e, se collegato al dispositivo elettronico, sia perfettamente funzionante ed inizi subito a caricarlo.
        In caso negativo, deve provvedere a segnalare le anomalie riscontrate direttamente dalla App mediante la
        procedura di segnalazione rapida e a restituire il Power Bank malfunzionante. Se l'Utilizzatore continua ad
        usare un Power Bank rotto o malfunzionante si assume la responsabilità di tale comportamento.
        L'Utilizzatore è l'unico responsabile del funzionamento del Power Bank noleggiato dal momento in cui
        procede a sganciarlo dalla Stazione Caricami e fino alla restituzione mediante posizionamento e aggancio ad
        una Stazione Caricami disponibile. L'Utilizzatore dovrà usare il Power Bank in modo ragionevole, prudente,
        diligente e conforme alle istruzioni d'uso. L'Utilizzatore è responsabile per qualsiasi danno causato da un uso
        improprio o da un abuso del Power Bank nonché del costo di tali danni. L'Utilizzatore è il solo responsabile
        dei danni e/o delle lesioni provocati a persone e/o cose durante il funzionamento del Power Bank mentre è in
        suo possesso. L'Utilizzatore non deve collegare il Power Bank con dispositivi elettronici danneggiati o non
        conformi.
        7.5 Il periodo di noleggio decorre trascorsi 5 (cinque) minuti dal momento in cui il Power Bank è sbloccato
        tramite la App e termina quando lo stesso Power Bank è riagganciato e bloccato correttamente in una
        Stazione Caricami disponibile geolocalizzata dalla App. Il periodo massimo di noleggio consentito è indicato
        nel piano tariffario consultabile dalla App. L'Utilizzatore deve restituire il Power Bank nelle stesse
        condizioni nelle quali lo ha prelevato. Caricami può richiedere all'Utilizzatore la restituzione del Power Bank
        in qualsiasi momento.
        7.6 Al momento della corretta restituzione e del blocco del Power Bank sulla apposita Stazione Caricami
        viene addebitato all'Utilizzatore il Costo del Noleggio.
        7.7 Saranno applicati costi aggiuntivi da sommarsi al Costo del Noleggio laddove, al termine del noleggio, il
        Power Bank non venga bloccato e restituito riposizionandolo correttamente in una Stazione Caricami
        geolocalizzata dalla App.
        7.8 Nel caso in cui il noleggio si protragga oltre la durata massima indicata nel piano tariffario, la mancata
        restituzione entro il suddetto termine sarà qualificata da Caricami come volontà da parte dell'Utilizzatore di
        acquistare il Power Bank e, per l'effetto, all'Utilizzatore verrà addebitato l'importo di Euro 1 (uno/00) quale
        prezzo per l'acquisto del Power Bank (di seguito, il "Prezzo di Acquisto"). Conseguentemente, il Power Bank
        diventerà di proprietà dell'Utilizzatore il quale non sarà più obbligato alla restituzione.
        7.9 Caricami accetta diverse modalità di pagamento, tra cui, a scopo indicativo, carta di credito, carta
        prepagata, PayPal, SatisPay e ApplePay. Caricami si riserva il diritto di rifiutare alcuni metodi di pagamento
        e di richiedere metodi di pagamento diversi. È direttamente consultabile dall'Account Utilizzatore lo storico
        dei noleggi e per ciascuno il relativo Costo del Noleggio. Nel caso in cui l'Utilizzatore richiedesse la fattura,
        dovrà fornire tutti i dati personali necessari alla sua emissione. Caricami emetterà, con cadenza [mensile], la
        fattura dei pagamenti effettuati in occasione della fruizione dei Servizi Caricami nel mese di riferimento e
        questa sarà consultabile direttamente dall'Account Utilizzatore.
        7.10 L'Utilizzatore deve contattare immediatamente Caricami e la polizia locale qualora si verifichi il furto
        del Power Bank noleggiato o un incidente durante l'uso del Power Bank con conseguenti lesioni personali.
        8. Deposito Cauzionale
        8.1 L'Utilizzatore è obbligato a prestare un deposito cauzionale pari all'importo indicato nel piano tariffario
        consultabile dalla App, che comunque non sarà superiore ad Euro 10,00 (dieci), prima di poter usufruire dei
        Servizi Caricami. Il deposito cauzionale deve restare disponibile durante tutto il periodo di ciascun utilizzo
        dei Servizi Caricami. Caricami verificherà la capienza del deposito cauzionale prestato e bloccherà la somma
        corrispondente (rendendola indisponibile da parte dell'Utilizzatore per altri acquisti) ma non addebiterà alcun
        importo all'Utilizzatore prima del termine del periodo di noleggio.
        8.2 Terminato il noleggio e/o la procedura di acquisto di un Power Bank, nel caso in cui il relativo costo sia
        andato a buon fine e, quindi, sia stato incassato da Caricami, l'importo trattenuto a titolo di deposito
        cauzionale sarà rilasciato e, conseguentemente, rientrerà nella disponibilità dell'Utilizzatore. Nel caso in cui,
        invece, il relativo costo non sia andato a buon fine e, quindi, non sia stato, in tutto o in parte, incassato da
        Caricami, quest'ultima sarà autorizzata ad incassare l'importo trattenuto a titolo di deposito cauzionale fino a
        concorrenza del costo del Servizio Caricami ad essa dovuto dall'Utilizzatore in questione, fatto salvo il diritto
        ad agire per il recupero del pagamento dell'eventuale maggior importo dovuto.
        9. Responsabilità di Caricami
        9.1 Caricami è responsabile esclusivamente per i danni diretti effettivamente subiti, pagati o sostenuti
        dall'Utilizzatore a causa di un inadempimento attribuibile a Caricami dei propri obblighi riguardanti i Servizi
        Caricami, [fino ad un importo che non potrà essere comunque superiore a quello totale pagato
        dall'Utilizzatore per la fruizione dei Servizi Caricami e rispetto ai quali è sorto il danno].
        9.2 Tuttavia, entro i limiti massimi consentiti dalla legge, né Caricami né i suoi agenti, amministratori,
        dipendenti, rappresentanti, ausiliari, affiliati, distributori, partner, licenziatari o altri soggetti coinvolti nella
        creazione, pubblicizzazione, promozione o comunque messa a disposizione della Piattaforma e dei suoi
        contenuti sono responsabili per (i) perdite o danni speciali, indiretti o consequenziali, perdite di produzione,
        di profitti, di guadagno, di contratti, di rivendicazioni, perdite o danni reputazionali, (ii) danni, perdite o costi
        diretti, indiretti o consequenziali subiti, sostenuti o pagati dall'Utilizzatore ai sensi di, derivanti da o in
        connessione con l'utilizzo, incapacità di utilizzo o malfunzionamento del Sito, dell'App o dei Servizi
        Caricami.
        9.3 Nel caso di Utilizzatore qualificabile come consumatore, agli acquisti effettuati tramite la Piattaforma si
        applicano le norme del Codice del Consumo (come di seguito definito) in tema di garanzia per vizi e
        difformità dei prodotti. Al Compratore saranno perciò riconosciuti i diritti di cui all'art. 130 e ss. del Codice
        del Consumo (come di seguito definito).
        9.4 Caricami non è obbligata a fornire un'assicurazione in relazione all'utilizzo del Power Bank. Laddove
        caricami avesse stipulato detta assicurazione, l'Utilizzatore resta comunque responsabile per qualsiasi danno
        alla proprietà, perdita, lesioni, multe e/o spese di qualsivoglia genere.
        9.5 Le disposizioni di legge vigenti in alcuni stati potrebbero vietare le limitazioni di responsabilità ora
        indicate. Nel caso in cui tali disposizioni risultino totalmente o parzialmente inapplicabili, le limitazioni di
        responsabilità ora indicate non avranno effetto e potrebbero essere riconosciuti all'Utilizzatori ulteriori diritti.
        L'Utilizzatore accetta e prende atto del fatto che in siffatti casi la responsabilità di Caricami non potrà essere
        comunque superiore all'importo totale pagato dall'Utilizzatore per la fruizione dei Servizi Caricami rispetto
        ai quali è sorto il danno.
        10. Esclusione di garanzie; Limitazioni di responsabilità
        10.1 L'Utilizzatore espressamente accetta e prende atto che l'utilizzo da parte dell'Utilizzatore dei Servizi
        Caricami è a suo completo rischio. I Servizi Caricami sono forniti "così come sono" e "come disponibili".
        10.2 Caricami importa in Europa i Power Bank che sono conformi alle direttive europee in materia di
        marcatura CE ed è proprietaria e responsabile della gestione, manutenzione e riparazione costante dei Power
        Bank. Tuttavia, ciò non significa che Caricami abbia l'obbligo di garantire che tutti i Power Bank disponibili
        siano senza anomalie.
        10.3 Caricami non garantisce che:
        (a) i Servizi Caricami incontreranno le necessità dell'Utilizzatore; o
        (b) i Servizi Caricami saranno ininterrotti, puntuali, sicuri, o privi di errori. Nessuna comunicazione o
        informazione, sia orale che scritta, che l'Utilizzatore ottiene dai Servizi Caricami o attraverso la Piattaforma
        potranno generare qualsivoglia garanzia non espressamente indicata nelle presenti CGC.
        10.4 Caricami ed i suoi incaricati, dipendenti, agenti, partner e licenzianti non potranno essere considerati
        responsabili nei confronti dell'Utilizzatore per qualsiasi danno diretto, indiretto, incidentale, speciale,
        consequenziale o esemplare ovvero per danni derivanti da perdite di profitto, avviamento, uso, dati, o per
        ogni altra perdita immateriale (anche se Caricami fosse stata avvisata della possibilità di tali danni) che
        risultino da:
        (a) l'utilizzo o l'impossibilità di utilizzo dei Servizi Caricami o della Piattaforma;
        (b) l'accesso non autorizzato o l'alterazione delle comunicazioni o dei dati dell'Utilizzatore;
        (c) le attività contemplate nelle presenti CGC; ovvero
        (d) ogni altra questione riguardante i Servizi Caricami o le presenti CGC.
        10.5 In nessun caso la responsabilità di Caricami ai sensi delle presenti CGC potrà eccedere [l'importo che è
        stato effettivamente pagato dall'Utilizzatore per la fruizione dei Servizi Caricami].
        10.6 Le summenzionate esclusioni e limitazioni sono parte essenziale alla base del business di Caricami, e
        Caricami non sottoscriverebbe le presenti CGC senza tali esclusioni e limitazioni. Si prega di consultare dei
        professionisti per comprendere il contenuto delle presenti CGC e per una valutazione di ogni specifica
        opinione, comunicazione, prodotto, servizio, o altro contenuto.
        10.7 Le disposizioni di legge vigenti in alcuni stati potrebbero vietare le limitazioni di responsabilità ora
        indicate. Nel caso in cui tali disposizioni risultino totalmente o parzialmente inapplicabili, le limitazioni di
        responsabilità ora indicate non avranno effetto e potrebbero essere riconosciuti all'Utilizzatore ulteriori
        diritti. L'Utilizzatore accetta e prende atto del fatto che in siffatti casi la responsabilità di Caricami non potrà
        essere comunque [superiore all'importo totale pagato dall'Utilizzatore per la fruizione dei Servizi Caricami e
        rispetto ai quali è sorto il danno].
        11. Responsabilità dell'Utilizzatore
        11.1 L'Utilizzatore dichiara e garantisce che:
        (a) ha pieni poteri e libertà di accettare le presenti CGC;
        (b) è maggiorenne;
        (c) utilizza la Piattaforma per scopi personali;
        (d) ha esperienza e familiarità con il funzionamento sicuro e competente di apparecchiature elettroniche e
        Power Bank;
        (e) tutti i dati personali (e quindi, nome, cognome e indirizzo) e le informazioni di pagamento forniti con la
        registrazione sono veri, corretti ed aggiornati;
        (f) con riferimento al servizio di noleggio, concorda espressamente di accettare la perdita del diritto di
        recesso a seguito della piena e completa esecuzione del Servizio Caricami di noleggio di Power Bank, ai
        sensi dell'art. 59, lettera (a) del Codice del Consumo (come di seguito definito). Resta inteso che la completa
        prestazione del servizio si verifica al momento della restituzione del Power Bank mediante il posizionamento
        e il riaggancio corretti alla Stazione Caricami o allo scadere del periodo massimo di noleggio consentito
        indicato nel piano tariffario.
        11.2 L'Utilizzatore dichiara e garantisce che le informazioni ed i documenti forniti dall'Utilizzatore durante il
        processo di registrazione o su richiesta di Caricami sono corretti, veri ed aggiornati. L'Utilizzatore si obbliga
        inoltre a mantenere sempre aggiornate le informazioni indicate sull'Account Utilizzatore.
        11.3 Attraverso la registrazione alla Piattaforma, l'Utilizzatore accetta, anche ai sensi dell'informativa privacy
        di Caricami, che tutte le informazioni fornite a Caricami siano processate e trattate in conformità a quanto
        previsto nell'informativa privacy e in ogni legge applicabile.
        11.4 L'Utilizzatore dichiara e garantisce che tutte le informazioni che trasmetterà a Caricami:
        (a) sono vere, accurate e complete;
        (b) non sono false, ingannevoli o fuorvianti;
        (c) non contengono alcun link ad altri siti web il cui contenuto potrebbe causare una violazione delle presenti
        CGC.
        11.5 L'Utilizzatore inoltre dichiara e garantisce che:
        (a) è responsabile di ogni Power Bank noleggiato tramite il suo Account Utilizzatore e di qualsivoglia
        soggetto terzo che faccia uso di tale Power Bank, assicurandosi che quest'ultimo legga e rispetti le presenti
        CGC;
        (b) utilizzerà il Power Bank noleggiato in modo conforme alla comune prudenza, con ogni e più ampia
        diligenza e nel rispetto delle istruzioni di utilizzo previste nelle presenti CGC ed indicate sul Sito e sull'App;
        (c) si obbliga a custodire diligentemente il Power Bank noleggiato;
        (d) non appena procede allo sblocco del Power Bank dalla Stazione Caricami, e prima di utilizzarlo per
        ricaricare apparecchi elettronici, controllerà l'integrità e l'efficienza del dispositivo nonché l'assenza di
        anomalie;
        (e) non distrugge, danneggia o trattenga dolosamente il Power Bank. Nel caso in cui il Power Bank sia
        danneggiato è necessario segnalarlo immediatamente tramite la App, restituirlo mediante posizionamento e
        aggancio all'apposita Stazione Caricami;
        (f) non utilizzerà il Power Bank durante condizioni meteo avverse, quali, a titolo esemplificativo ma non
        esaustivo, tempeste di grandine, di fulmini e forti piogge, né lo esporrà al sole, ad eventi atmosferici, a fonti
        di colore, ovvero lo immergerà in acqua o altri liquidi;
        (g) non danneggerà, lancerà, colpirà, distruggerà, smonterà il Power Bank né staccherà i suoi componenti,
        non utilizzerà Power Bank che presenta difetti o anomalie e non lo collegherà con dispostivi danneggiati o
        difettosi;
        (h) accetta che Caricami non è in alcun modo responsabile per i malfunzionamento o il danneggiamento dei
        dispositivi elettronici ricaricati mediante i Power Bank;
        (i) Caricami ha fornito tutte le istruzioni necessarie per l'utilizzo conforme del Power Bank;
        (l) è responsabile per l'accesso alla rete dati necessario per utilizzare i Servizi Caricami. Le tariffe e i costi
        della rete dati e della messaggistica potrebbero essere addebitati in caso di accesso ai Servizi Caricami da un
        dispositivo abilitato wireless;
        (m) è responsabile per l'aggiornamento di hardware o dispositivi compatibili necessari per l'accesso ai
        Servizi Caricami, al Sito e all'App;
        (n) non utilizza i Servizi Caricami o il Sito con scopi fraudolenti e/o illegali ed è a conoscenza di tutte le
        norme, i regolamenti, e i codici applicabili al funzionamento sicuro e legale di Power Bank;
        (o) non utilizza i Servizi Caricami per conto di soggetti terzi, fatti salvi i casi espressamente autorizzati per
        iscritto da Caricami;
        (p) non effettua attività di spamming o phishing;
        (q) non svolge alcuna attività che potrebbe agevolare la crescita di virus informatici o altri strumenti
        distruttivi e codici che possono danneggiare, interferire, intercettare, disattivare, distruggere qualsiasi
        software e hardware, dato ovvero informazione personale;
        (r) non svolge alcuna attività che persegue il fine di minare l'integrità dei dati o dei sistemi utilizzati da
        Caricami e/o da qualsiasi altro Utilizzatore o che raggiunge lo scopo di ottenere un accesso non autorizzato a
        tali dati o sistemi.
        11.6 L'Utilizzatore dovrà manlevare e tenere indenne Caricami da tutti i danni, cause, controversie, decisioni,
        perdite, spese e costi, inclusi, a titolo esemplificativo e non esaustivo, spese e costi legali, subiti e/o subendi
        da Caricami per effetto e/o in relazione alla violazione da parte dell'Utilizzatore delle presenti CGC e/o alla
        non veridicità e/o accuratezza delle dichiarazioni e garanzie contenute nelle presenti CGC e prestate da
        ciascun Utilizzatore per effetto della accettazione delle presenti CGC in sede di registrazione alla
        Piattaforma.
        12. Forza maggiore
        12.1 Caricami non potrà mai essere ritenuta responsabile per un ritardo o un errore o un'interruzione riguardo
        ai contenuti o ai Servizi Caricami, che derivino direttamente o indirettamente da eventi naturali o eventi che
        non rientrino nel controllo di Caricami, inclusi, a titolo esemplificativo e non esaustivo, problemi legati a
        Internet, telecomunicazioni o altri guasti alle apparecchiature, mancanza di elettricità, scioperi, conflitti di
        lavoro, disordini, insurrezioni, disordini civili, manodopera o carenza di materiali, incendi, inondazioni,
        tempeste, esplosioni, guerre, azioni governative, ordinanze di tribunali nazionali o internazionali o la loro
        mancata esecuzione da parte di terzi.
        13. Diritti di proprietà intellettuale
        13.1 Caricami è l'unico proprietario di tutti i diritti e contenuti della Piattaforma, del Sito, dell'App e dei
        Servizi Caricami. La Piattaforma, il Sito, l'App e i Servizi Caricami rappresentano segreti commerciali e altri
        diritti di proprietà intellettuale protetti a livello globale dal diritto d'autore e dalle leggi applicabili. Tutti i
        diritti di proprietà e di proprietà intellettuale della Piattaforma, del Sito, dell'App e dei Servizi Caricami non
        espressamente concessi sono e saranno di proprietà esclusiva di Caricami.
        13.2 Caricami concede all'Utilizzatore una licenza limitata, non esclusiva, non sub-licenziabile, revocabile e
        non trasferibile esclusivamente e limitatamente per l'utilizzo del Sito e dell'App in correlazione alla fruizione
        dei Servizi Caricami e l'accesso ai contenuti del Sito resi disponibili tramite i Servizi Caricami, in ogni caso
        esclusivamente per uso personale e non commerciale.
        13.3 Il nome "Caricami", il logo e tutte le icone e loghi collegati e marchi o marchi registrati sono marchi di
        proprietà di Caricami. Qualsiasi copia, modifica, utilizzo o pubblicazione non autorizzati di tali marchi sono
        severamente vietati. Tutti gli altri marchi citati non di proprietà di Caricami che compaiono sul Sito o su uno
        qualsiasi dei Servizi Caricami sono di proprietà dei rispettivi titolari.
        13.4 E' consentito condividere pubblicamente i contenuti della Piattaforma utilizzando le icone disponibili
        sulla Piattaforma, relative a social network esterni, nel rispetto delle presenti CGC. Coloro che condividono
        pubblicamente contenuti della Piattaforma, si assumono ogni responsabilità rispetto al contenuto dei
        messaggi che condividono.
        14. Recesso
        14.1 In caso di noleggio di un Power Bank, ai sensi dell'art. 49, paragrafo 1, lettera (m) del Codice del
        Consumo (come di seguito definito), l'Utilizzatore che ha noleggiato un Power Bank è espressamente escluso
        dal diritto di recesso ai sensi dell'art. 59, lettera (a) del Codice del Consumo (come di seguito definito) per i
        contratti di servizi dopo la completa prestazione del servizio, se l'esecuzione è iniziata con l'accordo espresso
        dell'Utilizzatore (qualificabile come consumatore) e con l'accettazione della perdita del diritto di recesso a
        seguito della piena esecuzione del contratto da parte di Caricami. Pertanto, in caso di noleggio, l'Utilizzatore
        potrà soltanto restituire quanto prima il Power Bank, in conformità a quanto previsto nelle presenti CGC, nel
        caso in cui non intenderà più usufruire del servizio di noleggio.
        14.2 In caso di acquisto di un Power Bank, ai sensi dell'art. 49, paragrafo 1, lettera (h) del Codice del
        Consumo (come di seguito definito), l'Utilizzatore che ha acquistato un Power Bank (di seguito, il
        "Compratore") ha il diritto di recedere da ciascun acquisto, senza fornire alcuna motivazione, entro 14 giorni
        dal giorno in cui il Compratore o il terzo, diverso dal vettore e designato dal Compratore, acquisisce la
        proprietà del Power Bank per effetto della compravendita (di seguito, il "Periodo di Reso"). Per esercitare il
        diritto di recesso, il Compratore dovrà notificare per iscritto (ad esempio, mediante e-mail) la propria
        decisione di recedere da ciascun acquisto relativo a ciascun Power Bank a Caricami S.r.l., Via Aosta n. 4,
        20155 Milano (MI), indirizzo e-mail supporto@caricami.it. A tal fine è possibile, ma non obbligatorio,
        utilizzare il modulo standard di recesso che può essere qui scaricato [inserire modulo standard di recesso -
        Allegato 1]. Il Compratore può anche completare ed inviare il modulo di recesso od ogni altra dichiarazione
        esplicita sul Sito www.caricami.it. In tal caso, Caricami invierà immediatamente un avviso di ricevimento
        tramite e-mail. Al fine di rispettare il Periodo di Reso, il Compratore dovrà inviare una comunicazione di
        esercizio del diritto di recesso prima della data di scadenza del periodo di cui sopra.
        14.3 Successivamente all'esercizio del recesso dall'acquisto, Caricami rimborserà il Prezzo di Acquisto
        nonché gli eventuali ragionevoli costi di spedizione in sede di reso (appositamente documentati
        dall'Utilizzatore), in ogni caso non più tardi di quattordici (14) giorni dal giorno in cui Caricami avrà avuto
        conoscenza della decisione di esercitare il diritto di recesso. Tali rimborsi saranno effettuati utilizzando il
        medesimo strumento di pagamento utilizzato dal Compratore, salvo che sia stato concordato diversamente.
        In ogni caso, il Compratore non dovrà sopportare alcun costo in conseguenza di tali rimborsi.
        14.4 I rimborsi potranno essere sospesi fino al ricevimento, da parte di Caricami, dei Power Bank oggetto di
        reso ovvero fino alla dimostrazione da parte del Compratore della spedizione di tali beni. Il Compratore è
        tenuto a restituire tutti i Power Bank oggetto di reso senza indebito ritardo e comunque entro 14 giorni dal
        giorno in cui Caricami viene informata della decisione di esercitare il diritto di recesso.
        14.5 I Power Bank devono essere restituiti, a mezzo posta o corriere, all'indirizzo della sede legale di
        Caricami S.r.l. (Via Aosta n. 4, 20155 Milano (MI), nelle condizioni originali, non rovinati, danneggiati,
        sporcati e in stato tale da permetterne la rivendita nonché muniti di tutti gli eventuali accessori e del
        documento di trasporto, in modo da permettere a Caricami di identificare il Compratore (nome, cognome,
        indirizzo e data di acquisto). L'Utilizzatore dovrà provvedere ad imballare il Power Bank oggetto di reso in
        apposita busta/contenitore. Ove il Power Bank restituito non sia conforme a quanto prescritto nel presente
        articolo, il recesso non avrà efficacia. I costi della restituzione dei Power Bank sono a carico di Caricami
        purché il Compratore utilizzi i documenti per il reso forniti da Caricami e spedisca la merce nel paese dal
        quale è avvenuta la consegna, in caso contrario i costi saranno a carico del Compratore. Il Compratore è
        responsabile per la diminuzione del valore del Power Bank dovuta a manipolazione del Power Bank diversa
        da quella necessaria per stabilire la natura, le caratteristiche e il funzionamento del Power Bank stesso.
        15. Tolleranza
        L'eventuale tolleranza da parte di Caricami di una condotta dell'Utilizzatore in violazione delle CGC non
        costituisce rinuncia ai diritti derivanti per Caricami dalle disposizioni violate, né al diritto di esigere
        l'adempimento di tutti i termini e condizioni previsti nelle presenti CGC.
        16. Comunicazioni
        16.1 Tutte le comunicazioni legali o le richieste da o sul Sito o tramite i Servizi Caricami possono essere
        effettuate per iscritto ed inviate a Caricami tramite e-mail (salvo che diversamente specificato da Caricami)
        al seguente indirizzo: supporto@caricami.it.
        16.2 Caricami provvederà ad effettuare tutte le comunicazioni all'Utilizzatore all'indirizzo e-mail o l'indirizzo
        fisico fornito dall'Utilizzatore durante la procedura di registrazione ovvero successivamente indicato sul
        proprio Account Utilizzatore. L'Utilizzatore è il solo responsabile per l'aggiornamento costante di tali
        informazioni fornite a Caricami.
        17. Miscellanea
        17.1 Qualora una o più disposizioni delle presenti CGC dovessero rivelarsi nulle o altrimenti invalide o
        inefficaci, Caricami ed l'Utilizzatore resteranno vincolati da tutte le altre previsioni di cui alle presenti CGC.
        In tal caso, essi sostituiranno le disposizioni invalide o non vincolanti con altre disposizioni valide e
        vincolanti che abbiano, nella misura massima possibile, un effetto simile a quelle invalide o inefficaci,
        tenendo in considerazione i contenuti e lo scopo delle presenti CGC.
        17.2 L'Utilizzatore non è autorizzato a cedere le presenti CGC né alcun interesse che l'Utilizzatore potrebbe
        avere in tali CGC senza il previo consenso scritto da parte di Caricami. Qualsiasi cessione vietata sarà
        considerata nulla o comunque inefficace nei confronti di Caricami.
        17.3 I titoli degli articoli utilizzati nelle presenti CGC sono stati disposti per mera convenienza e non
        possono essere utilizzati per interpretare il significato o l'intento delle presenti CGC.
        18. Legge applicabile
        18.1 Le presenti CGC sono disciplinate e sono da interpretarsi in conformità alla legge italiana e, in
        particolare (ma senza limitazioni), nel caso di Utilizzatore qualificabile come consumatore, in conformità al
        Codice del Consumo (d.lgs. 6 settembre 2005, n. 206, di seguito, il "Codice del Consumo") e del d.lgs. 9
        aprile 2003, n. 70, disciplinante il commercio elettronico.
        19. Giurisdizione e risoluzione delle controversie
        19.1 Nel caso di Utilizzatore qualificabile come consumatore, per ogni eventuale controversia relativa
        all'interpretazione, alla validità e all'esecuzione o in qualsiasi modo derivante dalle presenti CGC e/o dalle
        attività connesse all'utilizzo del Sito e/o dei Servizi Caricami sarà devoluta alla competenza esclusiva del
        foro della città ove l'Utilizzatore ha la propria residenza od il proprio domicilio, ai sensi del Codice del
        Consumo. In tutti gli altri casi sarà competente in via esclusiva il foro di Milano.
        19.2 Caricami suggerisce all'Utilizzatore di render previamente nota l'esistenza di una qualsiasi controversia
        contattando il servizio clienti di Caricami presso http: supporto@caricami.it.
        19.3 Nel caso di Utilizzatore qualificabile come consumatore, l'Utilizzatore può attivare una procedura per la
        composizione stragiudiziale della controversia ai sensi dei requisiti richiesti dal Codice del Consumo. Nel
        caso in cui l'Utilizzatore attivi la precedente procedura, Caricami garantisce la sua partecipazione ad un
        tentativo di conciliazione amichevole che l'utente può promuovere davanti a RisolviOnline, un servizio
        indipendente e istituzionale fornito dalla Camera Arbitrale della Camera di Commercio di Milano.
        19.4 L' Utilizzatore ha anche il diritto di utilizzare la procedura di risoluzione delle controversie online
        disponibile al http://ec.europa.eu/consumers/odr/.
        Allegato 1 - Modulo standard di recesso
        Ai sensi e per gli effetti di cui agli artt. 1341 e 1342 del Codice Civile italiano, ove applicabile, l'Utilizzatore
        dichiara di aver letto e di aver espressamente e specificatamente approvato i seguenti articoli:
        - Articolo 2 (Condizioni generali di contratto)
        - Articolo 3 (Privacy)
        - Articolo 4 (Prestazione dei Servizi Caricami)
        - Articolo 5 (Account Utilizzatore)
        - Articolo 6 (Violazioni)
        - Articolo 7 (Servizio di Noleggio dei Power Bank e Istruzioni d'Uso)
        - Articolo 8 (Deposito Cauzionale)
        - Articolo 9 (Responsabilità di Caricami)
        - Articolo 10 (Esclusione di garanzie; Limitazioni di responsabilità)
        - Articolo 11 (Responsabilità dell'Utilizzatore)
        - Articolo 12 (Forza Maggiore)
        - Articolo 13 (Diritti di proprietà intellettuale)
        - Articolo 14 (Recesso)
        - Articolo 15 (Tolleranza)
        - Articolo 16 (Comunicazioni)
        - Articolo 17 (Miscellanea)
        - Articolo 18 (Legge Applicabile)
        - Articolo 19 (Giurisdizione e risoluzione delle controversie)
        Allegato 1
        Modulo standard di recesso
        (Ai sensi dell'art. 49, paragrafo 1, lettera (h) del Codice del Consumo)
        Data: _________________
        Luogo: _________________
        Email: supporto@caricami.it
        Caricami S.r.l.
        Via Aosta n. 4,
        20155 Milano (MI)
        Italia
        Esercizio del diritto di recesso:
        Con la presente notifico di voler esercitare il recesso dal contratto concluso per l'acquisto del/i seguente/i
        Power Bank:
        - ____________________________________________________________ [Elencare Power Bank
        acquistato/i]
        - Acquistato/i il: __________________________
        - Nome del Consumatore: _________________________________________________
        - Indirizzo del Consumatore: _________________________________________________
        - Data: _________________
        _____________________
        [Firma del Consumatore, solo se il modulo trasmesso è cartaceo]
      </Text>
      
    </View>

   
  </View>
);
};

const styles = StyleSheet.create({
container: {
 
  backgroundColor:colors.primary,
  
},
backButton: {
  width: 40,
  height: 40,
  borderRadius: 10,
  backgroundColor: 'white',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 40,
},
backButtonText: {
  fontSize: 20,
},
titleContainer: {
  marginTop: 10,
  alignItems: 'center',
  
},
title: {
  fontSize: 20,
  fontWeight: 'bold',
},
sectionContainer: {
  marginTop: 20,
  padding: 20,
 
  borderRadius: 10,
  backgroundColor: 'white',
  widh: '100%',
  alignItems: 'center',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  
  
},

subTitle: {
  fontSize: 16,
  fontWeight: 'bold',
  marginTop: 10,
  alignItems: 'center',
  fontSize: 25,
},
description: {
  fontSize: 14,
  marginTop: 5,
  alignItems: 'center',
  fontSize: 15,
},

  

});
export default TermsCondition
>>>>>>> 3f4512eb85b15625a2866a4f41becc3d80dff01c
