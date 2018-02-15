<template>
	<div class="container">
        <div class="row">
            <div class="col-xs-12">
                <header>
                    <app-header></app-header>
                </header>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <ul class="list-group">
                    <li
                            class="list-group-item"
                            v-for="index in 5">
                        <app-server></app-server>
                    </li>
                </ul>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-right-pannel></app-right-pannel>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12">
                <footer>
                    <app-footer></app-footer>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
	import Server from './Server.vue';
	import Header from './Header.vue';
	import Footer from './Footer.vue';
	import RightPannel from './RightPannel.vue';

	export default {
		components: {
			'app-server': Server,
			'app-header': Header,
			'app-footer': Footer,
			'app-right-pannel': RightPannel
		}
	}
</script>