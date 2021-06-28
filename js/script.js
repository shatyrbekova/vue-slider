
Vue.config.devtools = true; 
  
new Vue({

    el: '#app',
    data: {
        photos:[
           'img/image1.jpeg',
           'img/image2.jpeg',
           'img/image3.jpeg',
           'img/image4.jpeg',
           'img/image5.jpeg',
           'img/image6.jpeg'
        ],
        photoIndex: 0,
       photosSorrento:[
        
        'img/image8.jpeg',
        'img/image9.jpeg',
        'img/image10.jpeg',
        'img/image11.jpeg',
        'img/image12.jpeg',
       ],
       
       messageEur: 'Scegli la tua valuta',
       messageAsk: 'Contatta l\'Assistenza Clienti',
    },

    created(){
     
        setInterval(()=>{
            this.next();
        },3000);
    },
    methods: {
        next: function(){

            if(this.photoIndex === (this.photos.length -1)){
                this.photoIndex = 0; 
            } else {
                this.photoIndex++;
            }

        },
        prev: function (){
            if(this.photoIndex === 0){
                this.photoIndex === this.photos.length -1;
            }
            else {
                this.photoIndex--;
            }
        },
        moveTo: function(index){
           this.photoIndex = index;
        },
        isCurrentDot: function(index){
            if(index === this.photoIndex){
                return 'current';
            }else {
                return '';
            }
        }
    }

}
);