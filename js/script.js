
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
        ],
        photoIndex: 0,
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