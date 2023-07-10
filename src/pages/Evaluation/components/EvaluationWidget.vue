<template>
	<div class="evaluation-widget shadow-16">
		<header class="bg-primary text-white q-px-lg q-py-md">
			<h6 class="q-ma-none">
				<div v-if="$slots.actions" class="float-right">
					<slot name="actions" />
				</div>

				<div class="q-mr-md" v-html="title"></div>
			</h6>
		</header>

		<q-linear-progress
			v-if="progress >= 0"
			:value="progress"
			color="blue-5"
		/>

		<main class="q-pa-lg">
			<slot />
		</main>
		<q-separator />
		<footer v-if="$slots.footer" class="q-px-lg q-py-md q-gutter-sm">
			<slot name="footer" />
		</footer>
	</div>
</template>
<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator';

	@Component
	export default class EvaluationWidget extends Vue {
		@Prop({ default: '' })
		title!: string;

		@Prop({ default: -1 })
		progress!: number;
	}
</script>
<style lang="scss" scoped>
	.evaluation-widget {
		width: 100%;
		max-width: 800px;
		border-radius: 8px;
		border: 1px solid $grey-5;
		overflow: hidden;

		.enunciated {
			font-size: 17px;
			letter-spacing: 1px;
			font-weight: 300;
		}

		footer {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
	}
</style>
