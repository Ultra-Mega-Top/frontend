import { cloneDeep } from 'lodash';
import { iStaticSelective } from '../interfaces/iStaticSelective';
import { uid } from 'quasar';

export function StaticSelectiveOptionFactory() {
	return cloneDeep<iStaticSelective['options'][number]>({
		id: uid(),
		label: '',
		isCorrect: false,
	});
}

export function StaticSelectiveFactory() {
	return cloneDeep<iStaticSelective>({
		qId: uid(),
		title: '',
		options: Array(5).map(() => StaticSelectiveOptionFactory()),
	});
}
