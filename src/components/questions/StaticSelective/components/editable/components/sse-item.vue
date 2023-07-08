<template>
	<q-item dense>
		<q-item-section avatar side>
			<q-avatar color="primary" rounded text-color="white" size="sm">
				A
			</q-avatar>
		</q-item-section>
		<q-item-section>
			<q-input dense borderless placeholder="Opção 1" />
		</q-item-section>

		<q-item-section side top>
			<q-radio :value="false" />
		</q-item-section>
	</q-item>
</template>
<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';

	@Component
	export default class SSE_Item extends Vue {}
</script>
<style lang="scss" scoped></style>
