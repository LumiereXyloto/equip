export type OrderType = 1 | 2 | 3 | 4;

export type Status = 1 | 2 | 3 | 4;


export interface Order {
	id: string,
	order_name: string,
	equip_id: string,
	order_type: OrderType;
	order_desc: string;
	creator: string;
	handler: string;
	handler_desc: string;
	order_status: Status;
	create_time: string;
	update_time: string;
	del: 0 | 1;
}

export interface PostOrder {
	order_name: string,
	order_type: OrderType,
	order_desc: string,
	creator: string,
	handler: string,
}

