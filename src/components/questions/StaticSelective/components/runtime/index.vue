<template>
	<div class="static-selective-runtime">static-selective-runtime</div>
</template>
<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';

	@Component({ components: {} })
	export default class StaticSelectiveRuntime extends Vue {}
</script>
<style lang="scss" scoped>
	.static-selective-runtime {
		display: block;
	}
</style>
