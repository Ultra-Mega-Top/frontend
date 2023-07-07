<template>
	<div class="private-area">
		<router-view />
	</div>
</template>
<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';

	@Component
	export default class PrivateArea extends Vue {}
</script>
<style lang="scss" scoped>
	.private-area {
		display: block;
	}
</style>
