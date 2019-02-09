
<template>
    <div class="hello">
        <h1>{{ message }}</h1>
        <a href @click.prevent="call">Call Me</a>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    name: "HelloWorld",
    props: {
        msg: String
    },
    data() {
        return {
            message: this.msg
        };
    },
    methods: {
        async call() {
            this.message = 'loading...'
            let {data} = await this.$axios.get("/.netlify/functions/hello");
            this.message = data.msg
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
