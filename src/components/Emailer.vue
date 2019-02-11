
<template>
    <div class="emailBox">
        <form action>
            <label for="email">
                <input
                    v-model="email"
                    placeholder="your email"
                    type="email"
                    name="email"
                    id="email"
                >
            </label>
        </form>
        <a href @click.prevent="call" v-show="!sending">Notify</a>
        <p>{{ status }}</p>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    name: "Emailer",
    data() {
        return {
            status: "",
            sending: false,
            email: "unclecode@kidocode.com"
        };
    },
    methods: {
        async call() {
            try {
                this.sending = true;
                this.status = "registring...";
                let { data } = await this.$axios.get(
                    "https://us-central1-firefunc-86014.cloudfunctions.net/addUser?email=" +
                        this.email
                );
                console.log(data);
                this.status = "check your email";
                this.sending = false;
            } catch (e) {
                console.error(e);
                this.sending = false;
                this.status = "oops!";
            }
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
.emailBox {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
}
form {
    display: flex;
    justify-content: space-around;
}
input[type="email"] {
    padding: 5px 10px;
    text-align: center;
    font-size: 1rem;
    min-width: 300px;
    border: none;
    border-bottom: 2px solid #eee;
    margin-bottom: 10px;
}
</style>
