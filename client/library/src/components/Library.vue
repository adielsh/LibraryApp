<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
            </div>
        </div>
            <table class="table">
                <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="b in books">
                    <td>{{b._id}}</td>
                    <td>{{b.name}}</td>
                    <td>
                        <button v-if="b.taken" class="btn btn-success" @click="asyncChangeBookStatus(b._id,false)">Return</button>
                        <button v-if="!b.taken" class="btn btn-danger" @click="asyncChangeBookStatus(b._id,true)">Take</button>
                    </td>
                </tr>
                </tbody>
            </table>

    </div>

</template>

<script>
    import axios from 'axios';
    export default {
        name: "library",
        data(){
            return {
                books:[],
            }
        },
        created(){
            async function getData()
            {
                //await the response of the fetch call
                let response = await fetch('http://localhost:1234/books/all');
                //proceed once the first promise is resolved.
                let data = await response.json()
                //proceed only when the second promise is resolved
                return data;
            }
            //call getData function
            getData().then(data => {console.log(data);this.books = data});//log the data
        },
        methods:{
            asyncChangeBookStatus(id,status){
                this.changeBookStatus(id,status).then(data=>{
                    var found = this.books.find(it=>it._id === data._id)
                    found.taken = data.taken;
                })
            },
            async changeBookStatus(id,status){
                let params = {taken : status};
                let url =  'http://localhost:1234/books/'+id+'/update';
                let response = await fetch(url, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Accept': 'application/x-www-form-urlencoded',
                    },
                    method: 'post',
                    body: JSON.stringify(params),
                    mode: "cors"
                })
                return await response.json()
            }
        }
    }
</script>

<style scoped>

</style>