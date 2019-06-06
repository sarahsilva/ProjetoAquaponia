<template>
    <div>
        <v-toolbar flat color="white">
            <v-toolbar-title>Lista de Fotos</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn color="green" dark class="mb-2" >Adicionar Fotos</v-btn>
        </v-toolbar>
        <v-data-table
            :headers="cabecalho"
            :items="produtos"
            class="elevation-1"
        >
            <template v-slot:items="props">
                <td>{{ props.item.nome }}</td>
                <td>{{ props.item.local }}</td>
                <td class="justify-center  px-0">
                    <v-icon
                        small
                        class="mr-2"
                        @click="editItem(props.item)"
                    >
                        edit
                    </v-icon>
                    <v-icon
                        small
                        @click="deleteItem(props.item)"
                    >
                        delete
                    </v-icon>
                </td>
            </template>
        </v-data-table>
    </div>
</template>
<script>
export default {
    data(){
        return{
            produtos: [
                {
                    codigo: 1,
                    nome: "Foto1",
                    local: "downloads/foto1.jpg"
                },
                {
                    codigo: 2,
                    nome: "Foto2",
                    local: "downloads/foto2.jpg"
                },
                {
                    codigo: 3,
                    nome: "Foto3",
                    local: "downloads/foto3.jpg"
                },
            ],
            cabecalho: [
                {
                    text: 'Nome',
                    align: 'center',
                    sortable: true,
                    value: 'descricao'
                },
                {
                    text: 'Local',
                    align: 'center',
                    sortable: true,
                    value: 'preco'
                },
                {
                    text: 'Ações',
                    align: 'center',
                    sortable: false
                }
            ]
        }
    }
}
</script>
