window.addEventListener('load',function(){
    var top = this.document.querySelector('.top');
    var elevator = this.document.querySelector('.elevator-wrapper');
    var apptop = this.document.querySelector('.app-wrapper');
    this.document.addEventListener('scroll',function(){
        if(window.pageYOffset > apptop.offsetTop){
            elevator.style.top = 20 +'px';
            elevator.style.position = 'fixed';
            top.style.display = 'block';
        }else{
            elevator.style.top ='';
            elevator.style.position = 'absolute'
            top.style.display = 'none';

        }
    })
})