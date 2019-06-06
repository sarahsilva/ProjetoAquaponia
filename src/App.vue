<template>
  <v-app>
  <v-toolbar class="green darken-3" dark>
  		<v-toolbar-side-icon 
  			@click.stop="drawer = !drawer"
  			color="white--text"
  		></v-toolbar-side-icon>
  		<v-spacer></v-spacer>
  		<v-toolbar-items>
	      <v-btn flat>Sabrine é CORNA</v-btn>
	    </v-toolbar-items>
  	</v-toolbar>
  	<v-navigation-drawer 
		class="green darken-3"
		dark
		absolute
  		v-model="drawer"
  	>
  		<v-toolbar 
  			class="green darken-4"
  		>
  			<v-list>
  				<v-list-tile-title class="ml-3">
  					Aquaponia na Escola
  				</v-list-tile-title>
  			</v-list>
  		</v-toolbar>
  		<v-divider></v-divider>
  		<v-list dense class="pt-0">
  			<v-list-tile to="/func">
  				<v-list-tile-action>
		        	<v-icon>subject</v-icon>
		        </v-list-tile-action>
		        <v-list-tile-content>
		          	<v-list-tile-title>Artigo</v-list-tile-title>
		        </v-list-tile-content>
  			</v-list-tile>
  			<v-list-tile to="/servico">
  				<v-list-tile-action>
		        	<v-icon>view_quilt</v-icon>
		        </v-list-tile-action>
		        <v-list-tile-content>
		          	<v-list-tile-title>Fotos</v-list-tile-title>
		        </v-list-tile-content>
  			</v-list-tile>
  			<v-list-tile to="/cliente">
  				<v-list-tile-action>
		        	<v-icon>person_outline</v-icon>
		        </v-list-tile-action>
		        <v-list-tile-content>
		          	<v-list-tile-title>Objetivos</v-list-tile-title>
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
        drawer: false
      }
    }
  }
</script>