var a = 1;  
        const openButton = document.getElementById('open'); 
        const modal_container = document.getElementById('modal_container'); 
        const show_button = document.getElementById('show_hide'); 
        function myFunction() {
            openButton.addEventListener('click', function(){
                modal_container.classList.add('show');  
            }); 

            openButton.addEventListener('dblclick', function(){
                modal_container.classList.remove('show'); 
            }); 
        }  

        function show(){
            if(a==1){
                document.getElementById('answer').style.display="inline"; 
                document.getElementById('answer').textContent = "Because he didn't get arrays!"
                show_button.textContent = "Hide Answer"; 
                return a = 0; 
            }
            else{
                document.getElementById('answer').style.display="none";  
                show_button.textContent = "Show Answer";
                return a = 1; 
            }
        }
