<template>
	<div class="public-area">
		<router-view />
	</div>
</template>
<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';

	@Component
	export default class PublicArea extends Vue {}
</script>
<style lang="scss" scoped>
	.public-area {
		display: block;
	}
</style>
