<template>
	<q-card flat bordered class="box-sm">
		<q-card-section>
			<div class="text-h6">Resumo</div>
		</q-card-section>

		<q-card-section class="q-pt-none">
			<div class="text-h2 text-positive">150</div>
			<p class="text-grey-7 q-mt-sm">Alunos fizeram essa avaliação</p>
		</q-card-section>
	</q-card>
</template>
<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';

	@Component
	export default class CardOverview extends Vue {}
</script>
<style lang="scss" scoped></style>
