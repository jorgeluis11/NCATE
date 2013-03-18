var Quotation=new Array() // do not change this!

// Set up the quotations to be shown, below.
// To add more quotations, continue with the
// pattern, adding to the array.  Remember
// to increment the Quotation[x] index!

Quotation[0] = "Nunca consideres el estudio como una obligación, sino como una oportunidad para penetrar en el bello y maravilloso mundo del saber.";
Quotation[1] = "El hombre comienza, en realidad, a ser viejo cuando deja de ser educable.";
Quotation[2] = "Enseñar a niños a contar es bueno, pero enseñarles lo que realmente cuenta es mejor.";
Quotation[3] = "Los niños son como cemento fresco, cualquier cosa que caiga sobre ellos deja una huella.";
Quotation[4] = "La única educación posible es esta: estar lo bastante seguro de una cosa para atreverse a decírsela a un niño";
Quotation[5] = "Enseñar a quien no tiene curiosidad por aprender es sembrar un campo sin ararlo";


// ======================================
// Do not change anything below this line
// ======================================



  var Q = Quotation.length;
  var whichQuotation=Math.round(Math.random()*(Q-1));

  $("#randomQuoteChild").append("<blockquote><p>" + Quotation[whichQuotation] + " <small>Mesanje positivo <cite title=''>NCATE UPRB</cite></small></p></blockquote>");


 