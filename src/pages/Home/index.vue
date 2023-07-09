<template>
	<div class="page-home q-py-md">
		<div class="row">
			<div class="col-8">
				<HeaderHome />
			</div>

			<div class="col-12 q-mt-lg">
				<div class="row q-col-gutter-lg">
					<div class="col-4">
						<CardOverview class="box" />
					</div>
					<div class="col-4">
						<CardEmailVehicle class="box" />
					</div>
					<div class="col-4">
						<CardLinkVehicle class="box" />
					</div>
				</div>
			</div>
		</div>

		<div class="box q-mt-lg">
			<EvaluationsTable />
		</div>
	</div>
</template>
<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';

	import { HomeStore } from 'src/store/Modules/Home';

	import HeaderHome from './components/HeaderHome/index.vue';
	import EvaluationsTable from './components/EvaluationsTable/index.vue';
	import CardEmailVehicle from './components/CardLinkVehicle.vue';
	import CardLinkVehicle from './components/CardEmailVehicle.vue';
	import CardOverview from './components/CardOverview.vue';

	@Component({
		components: {
			HeaderHome,
			EvaluationsTable,
			CardEmailVehicle,
			CardLinkVehicle,
			CardOverview,
		},
	})
	export default class Home extends Vue {
		@HomeStore.Action
		loadQuestionnaires!: () => Promise<void>;

		async mounted() {
			await this.loadQuestionnaires();
		}
	}
</script>
<style lang="scss" scoped></style>
