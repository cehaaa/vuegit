<template>
    <div>
        <div class="container">
            <h1 class="text-title">Vue.js PWA & Github API</h1>
            <div class="form-group">
                <input
                    type="text"
                    class="form-control"
                    placeholder="Github username"
                    v-model="username"
                />
            </div>
            <div class="form-group">
                <button class="btn-primary" @click="getUserData()">
                    Search
                </button>
            </div>
        </div>
        <div class="container" :class="{ 'd-none': !search }">
            <div class="card">
                <img
                    :src="githubData.avatar_url"
                    alt="github avatar"
                    class="card-img"
                />
                <div class="card-body">
                    <h3 class="card-title">{{ githubData.login }}</h3>
                    <div class="card-text-sm">{{ githubData.name }}</div>
                    <div style="margin-top:10px">
                        <div class="card-text-md">
                            <b>Followers: </b>{{ githubData.followers }}
                        </div>
                        <div class="card-text-md">
                            <b>Following: </b>{{ githubData.following }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import GithubService from "@/service/GithubService";

export default {
    data() {
        return {
            username: "",
            githubData: "",
            search: false,
        };
    },

    methods: {
        async getUserData() {
            this.search = !this.search;

            const res = await GithubService.searchUser(this.username)
                .then((res) => (this.githubData = res.data))
                .catch((err) => console.log(err));
        },
    },
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

.container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px 0px 20px 0px;
}

.d-none {
    display: none;
}

.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 200px;
    height: 100%;
    border-radius: 5px;
    cursor: pointer;
}

.card-text-sm {
    font-size: 12px;
}

.card-text-md {
    font-size: 15px;
}

.card:hover {
    transform: translateY(-10px);
}

.card-body {
    text-align: left;
    padding: 10px;
}

.card-img {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: 100%;
}

.form-group {
    padding: 10px 0px 10px 0px;
}

.form-control {
    width: 400px;
    height: 25px;
    padding: 10px;
    border-radius: 10px;
    border: solid 1px gainsboro;
}

.form-control:focus {
    outline: none;
}

.btn-primary {
    color: #fff;
    width: 150px;
    height: 40px;
    border: none;
    background: #4caf50;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.2s;
}

.btn-primary:hover {
    background: #3a883d;
}

.btn:focus {
    outline: none;
}
</style>
