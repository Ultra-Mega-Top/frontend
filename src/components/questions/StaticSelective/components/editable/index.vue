<template>
	<div class="static-selective-editale">static-selective-editale</div>
</template>
<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';

	@Component({ components: {} })
	export default class StaticSelectiveEditable extends Vue {}
</script>
<style lang="scss" scoped>
	.static-selective-editale {
		display: block;
	}
</style>
