<template>
    <div class="header">
    <h2>
        {{title}}
    </h2>

    </div>
</template>

<script>
export default {
    name:"HeaderCom",
    props:{
        title:{
            type:String,
            default:"同程旅游"
        }
    }
}
</script>
<style>
.header {
    width: 100%;
    height: 50px;
    background: #c33;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center
}
</style>