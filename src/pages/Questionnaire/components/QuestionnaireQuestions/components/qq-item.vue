<template>
	<q-timeline-entry subtitle="Questão 1">
		<div class="actions">
			<q-btn flat round color="negative" icon="delete" />
		</div>

		<!-- question-core -->
	</q-timeline-entry>
</template>
<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';

	@Component
	export default class QQ_Item extends Vue {}
</script>
<style lang="scss" scoped>
	.actions {
		position: absolute;
		top: 0;
		right: 0;
	}
</style>
