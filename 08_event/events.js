document.getElementById('nature').onclick = function(){
        alert("nature clicked")
    }

    document.getElementById('hourse').addEventListener('click' , function(e){
        console.log(e)
    } , false)

    document.getElementById('images').addEventListener('click' , function(e){
        console.log('image clicked')
    } , false)

    document.getElementById('google').addEventListener('click' , function(e){
        e.preventDefault();
        e.stopPropagation();
        console.log(e);
    } , false)
