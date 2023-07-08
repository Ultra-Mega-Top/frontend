<template>
	<q-timeline-entry :subtitle="`Questão ${number + 1}`">
		<div class="actions">
			<q-btn
				flat
				round
				color="negative"
				icon="delete"
				@click="$emit('delete-question', question.id)"
			/>
		</div>

		<component :is="component" v-model="question" />
	</q-timeline-entry>
</template>
<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator';

	import { iQuestion } from 'src/interfaces/iQuestion';
	import { findQuestionByType } from 'src/components/questions/registry';

	@Component
	export default class QQ_Item extends Vue {
		@Prop()
		question!: iQuestion;

		@Prop()
		number!: number;

		get component() {
			const builder = findQuestionByType(this.question.type);
			if (!builder) return null;

			return builder.editable();
		}
	}
</script>
<style lang="scss" scoped>
	.actions {
		position: absolute;
		top: 0;
		right: 0;
	}
</style>
