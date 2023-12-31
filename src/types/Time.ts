import {type SkillProps} from './Skill';

export type TimeProps = {
	id: number;
	minutes: number;
	created: string;
	skill: SkillProps;
};
