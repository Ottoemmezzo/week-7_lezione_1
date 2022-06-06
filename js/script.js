let users=[];
let counter=0;
 class User {

    constructor(nome,cognome,citta,nascita){
        this.nome=nome;
        this.cognome=cognome;
        this.citta=citta;
        this.nascita=nascita;

    }
}

function inserisci()
{
   counter++;
   let nome=document.querySelector("#Nome").value; 
   let cognome=document.querySelector("#Cognome").value; 
   let citta=document.querySelector("#Citta").value;
   let nascita=document.querySelector("#Data").value;
   let tabella=document.querySelector("#tabella");
   console.log(tabella);
   tabella.innerHTML+="<tr> <th scope='row'>"+counter+"</th> <td>"+nome+"</td> <td>"+cognome+"</td> <td>"+citta+"</td><td>"+nascita+"</td></td><td><i class='bi bi-trash-fill'onclick='elimina()'></i></td></tr>"; 
   document.querySelector("#Nome").value="";
   document.querySelector("#Cognome").value="";
   document.querySelector("#Citta").value="";
   document.querySelector("#Data").value="";
   users.push(new User(nome,cognome,citta,nascita)); 
   for(i=0;i<users.length;i++)
   {
       console.log(users[i]);
   }
}
function elimina()
{
    users.pop();
    counter--;
    let tabella=document.querySelector("#tabella");
    tabella.lastChild.remove();
}
function cerca()
{
   q_nome=document.querySelector("#cerca_input").value;
   console.log(q_nome); 
   for(i=0; i<users.length; i++)
   {
        console.log(users[i].nome);
        if (users[i].nome===q_nome)
       {
        let tabella=document.querySelector("#query");
        let nome=users[i].nome;
        let cognome=users[i].cognome;
        let citta=users[i].citta;
        let nascita=users[i].nascita;
        tabella.innerHTML="<tr> <th scope='row'>"+(i+1)+"</th> <td>"+nome+"</td> <td>"+cognome+"</td> <td>"+citta+"</td><td>"+nascita+"</td></td></tr>"; 
        
        break;
       }
   } 
}