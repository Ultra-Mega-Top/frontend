<template>
	<div class="static-selective-editale">
		<span class="text-grey-7">Enunciado</span>
		<q-editor
			v-model="question.title"
			min-height="5rem"
			:toolbar="[['bold', 'italic', 'underline']]"
		/>

		<div class="q-pt-md">
			<span class="text-grey-7">Respostas</span>

			<q-list separator bordered class="bg-white">
				<SSE_Item
					v-for="(option, index) in question.options"
					:key="option.id"
					:letter="letters[index]"
					:option="option"
					v-model="question"
				/>
			</q-list>
		</div>
	</div>
</template>
<script lang="ts">
	import { Component, Model, Vue } from 'vue-property-decorator';

	import SSE_Item from './components/sse-item.vue';
	import { iStaticSelective } from '../../interfaces/iStaticSelective';

	@Component({ components: { SSE_Item } })
	export default class StaticSelectiveEditable extends Vue {
		letters = 'ABCDEF'.split('');

		@Model()
		question!: iStaticSelective;
	}
</script>
<style lang="scss" scoped>
	.static-selective-editale {
		display: block;
	}
</style>
