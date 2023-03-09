let count = 1;
const btnMobile =document.getElementById('btn-mobile');
function toggleMenu(event){
    if (event.type == 'touchstart') event.preventDefault();
        const nav2 = document.getElementById('nav2');
        nav2.classList.toggle('active'); 
        const active = nav2.classList.contains('active');
        event.currentTarget.setAttribute('arial-expended', active);
        if(active){
            event.currentTarget.setAttribute('aria-label' , 'Fechar menu')
        } else{
            event.currentTarget.setAttribute('aria-label' , 'Abrir menu')
        }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

var dt = new Date(); 
    var ndt = new Date();
    
    ndt.setDate(dt.getDate());
    ndt.setFullYear(dt.getFullYear());

    
    var diaSemana = ndt.getDay();
    var dia = ndt.getDate();
    var mes = ndt.getMonth();
    var ano = ndt.getFullYear();

    var meses = new Array ("Janeiro","Fervereiro","Março","Abril","Maio","Junho","Julho", "Agosto", "Setembro","Novembro","Dezembro");

    var semanas = new Array ("Domingo", "Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sábado");


    document.getElementById("dia").innerHTML = semanas[diaSemana] +", ";
    document.getElementById("date").innerHTML = dia + " ";
    document.getElementById("month").innerHTML = meses[mes] +" de ";
    document.getElementById("Year").innerHTML = ano;


    // 
    let telaUser = document.querySelector(".user-cadastro");
    let body = document.querySelector("body");
    let fundo = document.querySelector(".fundo");
    let isOpen = false;
    function resetarAoSair() {
            telaUser.style.display = 'none';
            isOpen = false;
            body.style.overflow = 'visible';
            fundo.style.display = 'none';
    }


    function abrirTelaLogin () {
        console.log("Cliclou");
        if(!isOpen){
            telaUser.style.display = 'flex';
            isOpen = true;
            body.style.overflow = 'hidden';
            fundo.style.display = 'block';
        }else{
            resetarAoSair();
        }
    }
    let sair = document.querySelector(".btn_sair").addEventListener('click', ()=>{
        resetarAoSair();
    });
    let inconeUser = document.querySelector(".user");
    inconeUser.addEventListener('click', abrirTelaLogin);


    let btnLogin = document.querySelector(".loginT"); 
    let btnCad = document.querySelector(".cadastroT");
    let cadastro =  document.querySelector(".formCadastro");
    let loginF =  document.querySelector(".formLogin");

    btnLogin.addEventListener("click", ()=>{
        

        if(cadastro.style.display == "none"){
            cadastro.style.display = "block";
            loginF.style.display = "none";
        }else{
            cadastro.style.display = "none";
            loginF.style.display = "block";
        }
       

    });

    btnCad.addEventListener("click", ()=>{
    

        if(loginF.style.display == "none"){
            loginF.style.display = "block";
            cadastro.style.display = "none";
        }else{
            loginF.style.display = "none";
            cadastro.style.display = "block";
        }
    });


    function cadastra() {

        fetch("http://localhost:8080/cadastrar",
            {
                headers:{
                    'Accept': 'application.json',
                    'Content-Type':'application/json'
                },
                method: "POST",
                body:JSON.stringify({
                    nome: Iname.value,
                    email: Iemail.value,
                    senha: Isenha.value
                    })
            }).then(function (res) {console.log(res) })
            .catch(function (res) {console.log(res) })
        
    };


    const Iname = document.querySelector(".formCadastro #nameC");
    const Iemail = document.querySelector(".formCadastro #emailC");
    const Isenha = document.querySelector(".formCadastro #senhaC");
    let btn = document.querySelector(".formCadastro .btnFormLogin");


    function limpar() {
        Iname.value = "";
        Iemail.value = "";
        Isenha.value = "";
    }
    

    btn.addEventListener("click", ()=>{
        cadastra();
        limpar();
    });
    

    

