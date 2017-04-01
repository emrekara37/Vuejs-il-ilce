window.addEventListener('load',function(){
  

		var app = new Vue({
			  el: '.app',
			  name:"IlIlceUygulaması",
			  data: {
			  
			    iller:{},
			    ilceler:{},
			    selected:0,
			    ilSecildi:false,
			  },


			  methods:{
			  	 illeriGetir(){
			  	 	fetch("http://services.atiksoftware.com/turkiye/")
			  	 	.then(result=>result.json())
			  	 	.then(result=>{
			  	 		this.iller=result;
			  	 	})
			  	 },
			  	 ilceleriGetir(){
			  	 	this.ilSecildi=true;
			  	 	fetch(`
http://services.atiksoftware.com/turkiye/${this.selected}
			  	 		`)
			  	 	.then(result=>result.json())
			  	 	.then(result=>{
			  	 	     this.ilceler=result;
			  	 	})
			  	 }
			  }
			})
		app.illeriGetir();
});