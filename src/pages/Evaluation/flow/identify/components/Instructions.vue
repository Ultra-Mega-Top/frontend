<template>
	<div class="cnt-instructions">
		<div class="instructions box bg-white q-pa-md">
			<p>
				<b>
					Instruções para a Avaliação Ininterrupta de Tempo
					Indeterminado
				</b>
			</p>

			<p>Prezado(a) estudante,</p>

			<p>
				Esta avaliação é crucial para a avaliação da sua aprendizagem e
				compreensão dos conceitos discutidos no curso. A avaliação vale
				<b>{{ evaluation }}</b> pontos e, uma vez iniciada, não poderá
				ser interrompida sob quaisquer circunstâncias.
			</p>

			<p>
				<b>Importante:</b><br />
				Esta avaliação foi projetada de maneira que não há um tempo
				definido para seu término. O tempo de conclusão dependerá
				unicamente da sua capacidade de resolver os problemas propostos.
				É essencial que você reserve um período adequado e ininterrupto
				para realizar a avaliação para garantir que possa dar o seu
				melhor sem interrupções.
			</p>

			<p>
				<b> Instruções: </b>
			</p>

			<ol>
				<li class="q-mb-md">
					Certifique-se de que você está em um ambiente tranquilo e
					sem distrações antes de começar a avaliação.
				</li>
				<li class="q-mb-md">
					A avaliação é composta por uma combinação de perguntas de
					múltipla escolha, respostas curtas e problemas práticos.
				</li>
				<li class="q-mb-md">
					Todos os materiais de referência são permitidos, a menos que
					seja especificamente indicado o contrário em uma pergunta.
					No entanto, todas as respostas devem ser suas, originais e
					inéditas.
				</li>
				<li class="q-mb-md">
					A avaliação não pode ser interrompida uma vez iniciada. Se
					você fechar a avaliação ou a conexão com a internet for
					perdida, não poderá retomá-la. Planeje de acordo.
				</li>
				<li class="q-mb-md">
					Quando estiver pronto para iniciar a avaliação, clique no
					botão "Iniciar avaliação". Certifique-se de que está pronto
					para se comprometer com a avaliação antes de começar.
				</li>
			</ol>

			<p>
				Boa sorte com a avaliação. Esperamos que este seja um momento de
				demonstração e aplicação significativa do conhecimento que você
				adquiriu no curso!
			</p>
			<p>
				Com os melhores votos, <br />
				Sua equipe de educação.
			</p>
		</div>

		<q-checkbox
			v-model="_terms"
			label="Li e estou de acordo com os termos da avaliação."
		/>
	</div>
</template>
<script lang="ts">
	import { Component, Prop, PropSync, Vue } from 'vue-property-decorator';

	@Component
	export default class extends Vue {
		@Prop()
		evaluation!: number;

		@PropSync('terms')
		_terms!: boolean;
	}
</script>
<style lang="scss" scoped>
	.instructions {
		overflow: auto;
		max-height: 200px;
	}
</style>
