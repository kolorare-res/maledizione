/**
 * Configurazione Parametri della Mostra AR - Poetica della Pagina
 */
const config = {
  // ==========================================
  // 1. PARAMETRI STRUTTURALI DEI LAYER (Z)
  // ==========================================
  
  // Numero totale di livelli trasparenti (layer01.png fino a layer06.png)
  layers: 6,

  // Estrazione massima in avanti dell'ultimo layer verso la fotocamera (in metri)
  maxDepth: 0.4,

  // Durata dell'estrazione dei layer Z (in millisecondi)
  openDuration: 1500,

  // Curva di animazione dei layer
  easing: "easeOutCubic",


  // ==========================================
  // 2. PARAMETRI PAGINE A CERNIERA (PAGE-POPUP)
  // ==========================================

  // Durata dell'apertura a libro delle 3 pagine (in millisecondi)
  pageOpenDuration: 1800,

  // Angolo di rotazione/apertura delle pagine (in gradi)
  pageOpenAngle: 120,

  // Curva di animazione delle pagine
  pageEasing: "easeOutCubic",


  // ==========================================
  // 3. SEQUENZIAMENTO E RITARDI (TIMING)
  // ==========================================

  // Se true: i layer Z attendono la fine dell'apertura delle pagine prima di uscire
  // Se false: pagine e layer Z si aprono contemporaneamente
  sequenceMode: true,

  // Ritardo a cascata (ms) tra l'uscita di un layer e il successivo
  staggerDelay: 80
};