export default{
    props: ['listItem'],
    template:`
    <P>{{AddToList() }}</P>
    `,
    data(){
        return{
            toDos:[]
        }
        
    },
    methods:{
        AddToList(){
        
    }
}
}
