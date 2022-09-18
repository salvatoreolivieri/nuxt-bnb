<template>
    <header class="header custom-container">
        <a href="/">
            <div class="logo-container">
                <img src="~/assets/image/airbnb.png" alt="">
            </div>
        </a>

        <div
          @click="showMenuLink"
          class="menu-section">

            <div class="hamburger-menu">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3; overflow: visible;"><g fill="none" fill-rule="nonzero"><path d="m2 16h28"></path><path d="m2 24h28"></path><path d="m2 8h28"></path></g></svg>
            </div>

            <div class="user-profile-pic">

                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 100%; width: 100%; fill: currentcolor;"><path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path></svg>
            </div>

        </div>

        <div v-if="showNavLink" class="nav-link-menu">

            <div>

                <nav>
                    <ul>
                        <li>
                            <a v-if="isUserLogged" href="/admin">Profilo Utente</a>
                            <a v-if="!isUserLogged" href="/register">Registrati</a>
                        </li>

                        <hr v-if="!isUserLogged">

                        <li>
                            <a v-if="!isUserLogged" href="/login">Login</a>
                        </li>

                        <hr>

                        <li>
                            <a href="#ricerca">Trova una stanza</a>
                        </li>
                    </ul>
                </nav>

            </div>

        </div>

    </header>
</template>

<script>
    export default {
        name: 'HeaderComp',

        data(){
            return{
                showNavLink: false,
                isUserLogged: false,
                userLoggedId: '',
            }
        },

        methods:{
            showMenuLink(){
                this.showNavLink = !this.showNavLink

                this.userLoggedId = window.Id;

                if (this.userLoggedId != undefined){
                    this.isUserLogged = true
                }
                console.log(this.isUserLogged, 'utente booleano');
            }
        },


    }
</script>
