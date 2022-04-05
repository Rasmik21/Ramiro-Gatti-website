let serieFavorita = prompt ("cual es tu serie favorita?")

 if (serieFavorita == "naruto"){

    alert ("el mio tmb");
} else if (serieFavorita == "one piece"){
    alert ("esa serie no me gusta");
} else {
    alert ("Tu serie favorita es " + serieFavorita + ". El mio es dragon ball.");
    //string template
    alert (`Tu serie favorita es ${serieFavorita}. El mio es Dragon ball.`);
}