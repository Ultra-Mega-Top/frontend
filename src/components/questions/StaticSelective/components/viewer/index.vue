<template>
	<div class="static-selective-viwer">static-selective-viwer</div>
</template>
<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';

	@Component({ components: {} })
	export default class StaticSelectiveViewer extends Vue {}
</script>
<style lang="scss" scoped>
	.static-selective-viwer {
		display: block;
	}
</style>
