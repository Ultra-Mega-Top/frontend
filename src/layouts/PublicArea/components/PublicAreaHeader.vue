<template>
	<header class="public-area-header">
		<h5 class="q-ma-none q-py-sm float-left">
			<router-link class="logo text-grey-9 text-italic" to="/panel">
				UltraMegaTop 💯
			</router-link>
		</h5>

		<div class="clear-both"></div>
	</header>
</template>
<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';

	@Component
	export default class PublicAreaHeader extends Vue {}
</script>
<style lang="scss" scoped>
	.public-area-header {
		display: block;

		.logo {
			text-decoration: none;
		}
	}
</style>
