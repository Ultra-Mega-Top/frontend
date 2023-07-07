<template>
	<div class="private-area">
		<PrivateAreaHeader />
		<router-view />
	</div>
</template>
<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';

	import PrivateAreaHeader from './components/PrivateAreaHeader.vue';

	@Component({ components: { PrivateAreaHeader } })
	export default class PrivateArea extends Vue {}
</script>
<style lang="scss" scoped>
	.private-area {
		display: block;
		width: 98%;
		max-width: 1200px;
		margin: 0 auto;
	}
</style>
