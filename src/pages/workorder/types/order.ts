export type OrderType = 1 | 2 | 3 | 4;

export type Status = 1 | 2 | 3 | 4;

export interface OResponse<T> {
	status: boolean,
	message: string,
	code: string,
	data: T,
}


export interface Order {
	id: string,
	orderName: string,
	deviceId: string,
	orderType: OrderType;
	orderDesc: string;
	creator: string;
	handler: string;
	handlerDesc: string;
	orderStatus: Status;
	createTime: string;
	updateTime: string;
	del: 0 | 1;
}

export interface PostOrder {
	orderName: string,
	orderType: OrderType,
	orderDesc: string,
	creator: string,
	handler: string,
}

export interface UpdateOrder {
	id: string,
	orderName: string,
	orderType: OrderType,
	orderDesc: string,
	creator: string,
	handler: string,
	orderStatus: string,
}

