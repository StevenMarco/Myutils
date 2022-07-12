window.addEventListener("load", function(event) {

    let boutton = document.getElementsByClassName('add')[0];
    let insert = document.getElementsByClassName('faire')[0];
    let fin = document.getElementsByClassName('finie')[0];
    
    boutton.addEventListener("click", function(event) {

        let text = document.getElementsByClassName('input')[0].value; 

        if(text == "" || text == " ")
        {
            return;
        }

            let li = document.createElement("li");
            insert.appendChild(li);
            let button = document.createElement("button");
            insert.appendChild(button);
            button.innerHTML = "Accompli";
            let button_suppr = document.createElement("button");
            insert.appendChild(button_suppr);
            button_suppr.innerHTML = "Supprimer";
            li.innerHTML = text;
            document.getElementsByClassName('input')[0].value = "";
    
            let li2 = document.createElement("li");
            let button_suppr2 = document.createElement("button");

        button.onclick = function()
        {
            insert.removeChild(li);
            insert.removeChild(button);
            insert.removeChild(button_suppr);

            let text2 = text;
            fin.appendChild(li2);
            fin.appendChild(button_suppr2);
            button_suppr2.innerHTML = "Supprimer";
            li2.innerHTML = text2;
        };

        button_suppr.onclick = function()
        {
            insert.removeChild(li);
            insert.removeChild(button);
            insert.removeChild(button_suppr)
        }

        button_suppr2.onclick = function()
        {
            fin.removeChild(li2);
            fin.removeChild(button_suppr2)
        }
    });
});

