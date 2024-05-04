function test(){
    let p=document.createElement("p"); //ich will hier ein p-Element erzeugen
    p.id="neuerAbsatz"; //bei a wäre es z. B. a.href=" ";

    //Alternative:
    //p.setAttribute("id", "neuerAbsatz");

    let t=document.createTextNode("Das ist der neue Absatz."); //erzeugt einen reinen Textknoten --> dieser TextNode ist das Kindelement von dem p-tag
    p.appendChild(t); //diese Methode hängt mir das Element dann immer danach an
    
    //Alternative
    //p.appendChild(document.createTextNode("Das ist der neue Absatz."));
    


    //wo füge ich das erstellte Element ein?
    //im body:
    document.body.appendChild(p); //hängt an die Liste der Kindknoten diesen Knoten ein, ein Kindelement kann maximal ein Kindelement haben

    //im div mit der id "loremipsum1":
    //document.getElementById("loremipsum1").appendChild(p);

    //let gesuchtesP=document.querySelector("#loremipsum1 p:nth-child(4)");
    //document.getElementById("loremipsum1").insertBefore(p, gesuchtesP); //das neue Element wird vor dem 4. Element eingefügt
    
    //p=document.createElement("p");
    //p.appendChild(document.createTextNode("Noch ein Absatz"));
    //document.getElementById("loremipsum1").insertBefore(p, gesuchtesP);
    
}