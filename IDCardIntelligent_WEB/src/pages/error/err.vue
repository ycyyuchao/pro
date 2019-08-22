<template>
    <div style="font-size:20px;color:white">
        
        发生错误:{{msg}}
    </div>
</template>
<script>
export default {
    name:'Error',
    data(){
        return{
            msg: this.$route.query.msg
        }
    }
}
</script>

