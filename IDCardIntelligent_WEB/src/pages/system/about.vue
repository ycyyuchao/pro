<template>
    <div>
        <p style='color:white'>关于</p>
        <p style='color:white'>{{childCom}}</p>
        
    </div>
</template>
<script>
export default {
   name:'About',
   props: {
        childCom: {
            type: String,
            default: 'yuchao' 
        }
    },
    data(){
        return{

        }
    },
    methods:{

    },
    created(){
        console.log(this)
    },
    mounted(){

    }
}
</script>