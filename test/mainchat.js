window.addEventListener('load', function OnWindowLoaded() {






    var knopkaName = document.getElementById('knptwo');
    knopkaName.addEventListener('click', onButtonClicktwo);
    var sobpool = document.getElementById('sobpool');





    function messageindisplay(one, two) {
        var messagecont = document.createElement('div');
        messagecont.className = "Cont";
        sobpool.appendChild(messagecont);

        var messageblok = document.createElement('text');
        messageblok.className = "named";

        var messagebloktwo = document.createElement('text');
        messagebloktwo.className = "description";

        var messageblokbutton = document.createElement('button');
        messageblokbutton.className = "butt";
        messageblokbutton.id = "butt"
        messageblokbutton.innerHTML = "X"

        messageblok.innerHTML = one;
        messagebloktwo.innerHTML = two

        messagecont.appendChild(messageblok);
        messagecont.appendChild(messageblokbutton);
        messagecont.appendChild(messagebloktwo);
    }


    function onButtonClicktwo() {
        var namestring = document.getElementById('soobshenieone');
        var namestringtwo = document.getElementById('soobshenietwo');
        var nazwanie = namestring.value;
        var opisanie = namestringtwo.value;



        if (namestring.value === "") {
            alert("Ошибка: Ведите Название");
        }
        else if (namestringtwo.value === "") {
            alert("Ошибка: Ведите Описание")
        }
        else {
            messageindisplay(nazwanie, opisanie);
            namestring.value = "";
            namestringtwo.value = "";











        }






        const Cont = document.querySelectorAll('.Cont')

        Cont.forEach((button) => {

            button.addEventListener('click', handleClick);

        });
        function handleClick() {
            let a = this.querySelector(".butt")

            //    if( a.innerHTML === "X"){

            this.style.backgroundColor = "snow";

            a.innerHTML = "V"

            // }

            // else{
            //     this.style.backgroundColor = "Lime"
            //     a.innerHTML = "X"
            //     // alert("fff")
            // }
        }

    }




















});



