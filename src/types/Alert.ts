type ActionsProps = {
	text: string;
	onPress: () => void;
	style?: 'default' | 'cancel' | 'destructive' | undefined;
};

export type ShowAlertProps = {
	head: string;
	body?: string;
	onActions: ActionsProps[];
};