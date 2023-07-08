import { cloneDeep } from 'lodash';
import { iStaticSelective } from '../interfaces/iStaticSelective';
import { uid } from 'quasar';

export function StaticSelectiveOptionFactory() {
	return cloneDeep<iStaticSelective['options'][number]>({
		id: uid(),
		label: '',
	});
}

export function StaticSelectiveFactory() {
	return cloneDeep<iStaticSelective>({
		id: uid(),
		type: 'static-selective',
		title: '',
		correctId: '',
		options: Array(5).fill(0).map(StaticSelectiveOptionFactory),
	});
}
