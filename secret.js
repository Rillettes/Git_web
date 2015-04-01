
var username=prompt("Veuillez saisir votre nom");
var test=username.toUpperCase();


switch (test){
        
    case "LAMA":
        alert("Mon ami !!! ");
        if( confirm("êtes-vous vraiment sûr?") )
            {
                if( confirm("non mais sérieusement?") )
                {
                    alert("chelou…");
                }
                else
                {
                    alert("bah il faut savoir aussi…");
                }
            }
        else
        {
            alert ("Heureusement ! ");
        }
    break;
    
    case "BAPTISTE":
        alert("Allez, on se fait un kebab?")
    break;
        
    case "LEA":
        alert("la plus belle ;)")
    break;
        
    case "MOUMOU":
        alert("la reine des mouettes !");
    break;
    
    case "IMANE":
        alert("la plus belle ;)");
    break;

    default:
        alert("Bonjour Mr " + username);
}