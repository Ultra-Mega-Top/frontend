<template>
	<div class="questionnaire-questions">
		<h4 class="q-ma-none q-pt-xl q-pb-sm text-grey-7">
			Questões
			<small class="text-grey-5">[{{ form.questions.length }}]</small>
		</h4>

		<q-timeline>
			<QQ_Item
				v-for="(question, index) in form.questions"
				:key="question.id"
				:number="index"
				:question="question"
				@delete-question="handleDeleteItem"
			/>
		</q-timeline>

		<q-btn
			label="Nova Questão"
			outline
			class="full-width"
			size="xl"
			color="primary"
			@click="() => handleNewQuestion()"
		/>
	</div>
</template>
<script lang="ts">
	import { Component, Model, Vue } from 'vue-property-decorator';

	import QQ_Item from './components/qq-item.vue';
	import { iQuestionnaire } from 'src/interfaces/iQuestionnaire';
	import Swal from 'sweetalert2';

	import { findQuestionByType } from 'src/components/questions/registry';

	@Component({ components: { QQ_Item } })
	export default class QuestionnaireQuestions extends Vue {
		@Model()
		form!: iQuestionnaire;

		handleNewQuestion(type = 'static-selective') {
			// Geralmente aqui receberia por parametro o tipo de questão
			// para assim poder chamar o method factory do builder

			const builder = findQuestionByType(type);
			if (!builder) throw new Error('Builder not found');

			const newQuestionData = builder.factory();

			this.form.questions.push(newQuestionData);
		}

		async handleDeleteItem(questionId: string) {
			const { isConfirmed } = await Swal.fire({
				title: 'Atenção',
				text: 'Você realmente deseja apagar essa questão?',
				icon: 'warning',

				showCancelButton: true,
				cancelButtonText: 'Cancelar',
				cancelButtonColor: '',

				confirmButtonText: 'Sim, desejo apaga-lá',
				confirmButtonColor: '#C10015',
			});

			if (!isConfirmed) return;

			const index = this.form.questions.findIndex(
				(question) => question.id === questionId
			);

			if (index !== -1) this.form.questions.splice(index, 1);
		}
	}
</script>
<style lang="scss" scoped></style>
