<template>
	<div class="public-area">
		<PublicAreaHeader />

		<router-view />
	</div>
</template>
<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';

	import PublicAreaHeader from './components/PublicAreaHeader.vue';

	@Component({ components: { PublicAreaHeader } })
	export default class PublicArea extends Vue {}
</script>
<style lang="scss" scoped>
	.public-area {
		display: block;
	}
</style>
