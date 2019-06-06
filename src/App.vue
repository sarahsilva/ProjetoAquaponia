<template>
  <v-app>
  	<v-toolbar class="grey darken-3" dark v-if="logado">
  		<v-toolbar-side-icon 
  			@click.stop="drawer = !drawer"
  			color="white--text"
  		></v-toolbar-side-icon>
  		<v-spacer></v-spacer>
  		<v-toolbar-items>
	      <v-btn flat>Marcelo</v-btn>
	    </v-toolbar-items>
  	</v-toolbar>
  	<v-navigation-drawer 
		class="grey darken-3"
		dark
		fixed
  		v-model="drawer"
  	>
  		<v-toolbar 
  			class="grey darken-4"
  		>
  			<v-list>
  				<v-list-tile-title class="ml-3">
  					Barbearia
  				</v-list-tile-title>
  			</v-list>
  		</v-toolbar>
  		<v-divider></v-divider>
  		<v-list dense class="pt-0">
  			<v-list-tile to="/func">
  				<v-list-tile-action>
		        	<v-icon>portrait</v-icon>
		        </v-list-tile-action>
		        <v-list-tile-content>
		          	<v-list-tile-title>Funcionários</v-list-tile-title>
		        </v-list-tile-content>
  			</v-list-tile>
  			<v-list-tile to="/servico">
  				<v-list-tile-action>
		        	<v-icon>build</v-icon>
		        </v-list-tile-action>
		        <v-list-tile-content>
		          	<v-list-tile-title>Serviços</v-list-tile-title>
		        </v-list-tile-content>
  			</v-list-tile>
  			<v-list-tile to="/agenda">
  				<v-list-tile-action>
		        	<v-icon>today</v-icon>
		        </v-list-tile-action>
		        <v-list-tile-content>
		          	<v-list-tile-title>Agenda</v-list-tile-title>
		        </v-list-tile-content>
  			</v-list-tile>
  			<v-list-tile to="/cliente">
  				<v-list-tile-action>
		        	<v-icon>person_outline</v-icon>
		        </v-list-tile-action>
		        <v-list-tile-content>
		          	<v-list-tile-title>Cliente</v-list-tile-title>
		        </v-list-tile-content>
  			</v-list-tile>
  		</v-list>
  	</v-navigation-drawer>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>
<script>
  export default {
    data () {
      return {
				drawer: false,
				logado: true
      }
    }
  }
</script>
<style>

</style>