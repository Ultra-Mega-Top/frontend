<template>
	<div class="static-selective-editale">
		<span class="text-grey-7">Enunciado</span>
		<q-editor
			min-height="5rem"
			:toolbar="[['bold', 'italic', 'underline']]"
		/>

		<div class="q-pt-md">
			<span class="text-grey-7">Respostas</span>

			<q-list separator bordered class="bg-white">
				<SSE_Item />
				<SSE_Item />
				<SSE_Item />
				<SSE_Item />
				<SSE_Item />
			</q-list>
		</div>
	</div>
</template>
<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';

	import SSE_Item from './components/sse-item.vue';

	@Component({ components: { SSE_Item } })
	export default class StaticSelectiveEditable extends Vue {}
</script>
<style lang="scss" scoped>
	.static-selective-editale {
		display: block;
	}
</style>
