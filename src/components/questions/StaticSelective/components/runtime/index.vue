<template>
	<div class="static-selective-runtime">
		<p class="enunciated" v-html="settings.title"></p>

		<q-list class="q-gutter-xs q-mt-lg">
			<SSRItem
				v-for="(item, index) in settings.options"
				:key="item.id"
				:item="item"
				:letter="letters[index]"
				:actived="value === item.id"
				@click="$emit('input', item.id)"
			/>
		</q-list>
	</div>
</template>
<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator';

	import { iStaticSelective } from '../../interfaces/iStaticSelective';

	import SSRItem from './components/ssr-item.vue';

	@Component({ components: { SSRItem } })
	export default class StaticSelectiveRuntime extends Vue {
		letters = 'ABCDEF'.split('');

		@Prop()
		settings!: iStaticSelective;

		@Prop()
		value!: string;
	}
</script>
<style lang="scss" scoped>
	.static-selective-runtime {
		.enunciated {
			font-size: 17px;
			letter-spacing: 1px;
			font-weight: 300;
		}
	}
</style>
