<template>
	<header class="private-area-header">
		<div class="identify bg-grey-2">
			<q-list>
				<q-item clickable v-ripple>
					<q-item-section avatar>
						<q-avatar color="primary" rounded text-color="white">
							JD
						</q-avatar>
					</q-item-section>

					<q-item-section>
						<q-item-label>Jonh Due</q-item-label>
						<q-item-label caption> Teachr </q-item-label>
					</q-item-section>
				</q-item>
			</q-list>
		</div>
	</header>
</template>
<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';

	@Component
	export default class PrivateAreaHeader extends Vue {}
</script>
<style lang="scss" scoped>
	.private-area-header {
		display: block;

		.identify {
			width: 300px;
			float: right;
			border: 1px solid $grey-5;
			border-top: none;
			border-bottom-right-radius: 4px;
			border-bottom-left-radius: 4px;
		}
	}
</style>
