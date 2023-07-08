<template>
	<q-item dense>
		<q-item-section avatar side>
			<q-avatar color="primary" rounded text-color="white" size="sm">
				{{ letter }}
			</q-avatar>
		</q-item-section>
		<q-item-section>
			<q-input
				v-model="option.label"
				dense
				borderless
				placeholder="Entre com a possivel resposta"
			/>
		</q-item-section>

		<q-item-section side top>
			<q-radio v-model="question.correctId" :val="option.id">
				<q-tooltip>Marcar como resposta correta</q-tooltip>
			</q-radio>
		</q-item-section>
	</q-item>
</template>
<script lang="ts">
	import { Component, Model, Prop, Vue } from 'vue-property-decorator';
	import { iStaticSelective } from '../../../interfaces/iStaticSelective';

	@Component
	export default class SSE_Item extends Vue {
		@Prop()
		letter!: string;

		@Prop()
		option!: iStaticSelective['options'][number];

		@Model()
		question!: iStaticSelective;
	}
</script>
<style lang="scss" scoped></style>
