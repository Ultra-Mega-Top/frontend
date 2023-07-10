<template>
	<q-item @click="$emit('click')" tag="label" v-ripple class="bg-grey-4">
		<q-item-section avatar side>
			<q-avatar
				:color="actived ? 'primary' : 'white'"
				:text-color="actived ? 'white' : 'primary'"
				rounded
				size="sm"
			>
				{{ letter }}
			</q-avatar>
		</q-item-section>

		<q-item-section>
			<q-item-label> {{ item.label }} </q-item-label>
		</q-item-section>
	</q-item>
</template>
<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator';

	@Component
	export default class SSRItem extends Vue {
		@Prop()
		item!: { id: string; label: string };

		@Prop({ default: 'A' })
		letter!: string;

		@Prop()
		actived!: boolean;
	}
</script>
<style lang="scss" scoped></style>
