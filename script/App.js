import ToDoList from './ToDoList.js'
import ListItem from './ListItem.js'
export default{
    components:{
        ToDoList,
        ListItem
    },
    template:`
    <div>
    <h1>To Do List</h1>
    <label for="toDo">Things to do:</label>
    <input type="text" id="toDo" v-model="toDo">
    <button @click="addtoList">Add</button>
    
    <ListItem listItem: ='listItem' />
    </div>
    `,
    data(){
        return{
            
            toDo:"",
            listItem:""

        }
    },
    methods:{
        addtoList(){
           let listItem = this.toDo;
            this.toDo="";

           
        }
    }
}