<template>
    <div>
        <button @click="clickhandelstart" ref='btnstart' class="btnstart" v-if="start"></button>
        <button @click="clickhandelstop" ref='btnstop' v-else></button>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default { 
    name:"Stop",
    data(){
        return{
          
        }
    },
    computed:{
        ...mapGetters(['start'])
    },
    methods:{
        ...mapActions(['checkstart']),
        clickhandelstart(){
            if(this.start){
                this.checkstart(false);
            }else{
                this.checkstart(true);
            }
            this.$axios({
                url: this.$ports.Param.RecoverRunnig,
                data: {
                   Token:sessionStorage.getItem('Token')
                },
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                timeout:6000*10
            }).then(res => {
                console.log(res.data)
                if(res.data.Status === 1){
                    console.log('系统恢复运行')
                }
            })
        },
         clickhandelstop(){
            if(this.start){
                this.checkstart(false);
            }else{
                this.checkstart(true);
            }
            this.$axios({
                url: this.$ports.Param.PauseRunnig,
                data: {
                   Token:sessionStorage.getItem('Token')
                },
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                timeout:6000*10
            }).then(res => {
                console.log(res.data)
                if(res.data.Status === 1){
                   console.log('系统暂停运行')
                }
            })
        },
        getParam(){
            this.$axios({
                url: this.$ports.Param.ISRunning,
                data: {
                   Token:sessionStorage.getItem('Token')
                },
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                timeout:6000*10

            }).then(res => {
                console.log(res.data)
                if(res.data.Status === 1){
                   localStorage.setItem('Running',res.data.data)
                }
            })
        }
    },
    creat(){
        console.log(this)
    },
    mounted(){
        //console.log(this.start)
        this.getParam()
    }
}
</script>
<style lang="scss" scoped>
    button{
        background-image: url('../../assets/img/stop.png');
        width: 404px;
        height: 134px;
        border: 0;
        outline: 0;
        margin-left: 36%;
        margin-top: 20%;
    }
    .btnstart{
        background-image: url('../../assets/img/start.png');
    }
</style>

