Vue.component('btn',{
	template:
	` <a class="button is-dark" @click='launch'>Launch Button</a>`,
	methods:{
		launch(){
			this.$emit('button_clicked')
		}
	}
	})
Vue.component('modal',{
	template:
		`
	<div class="modal " :class='active'>
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">
      	<slot></slot>
      </p>
      <button class="delete" @click='closeModal' aria-label="close"></button>
    </header>
    <section class="modal-card-body">
      <slot name="section"></slot>
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success">Save changes</button>
      <button class="button">Cancel</button>
    </footer>
  </div>
</div>
	`,
	props:[
	'active'
	],
	methods:{
		closeModal(){
			this.$emit('close_modal')
		}
	}
})
new Vue ({
   el: '#app' ,
   data:{
   	activateModal:''
   },
   methods:{
   	close()
   	{
   		this.activateModal = ''
   	},
   	launchModal(){
   		this.activateModal = 'is-active'
   	}
   }      
})