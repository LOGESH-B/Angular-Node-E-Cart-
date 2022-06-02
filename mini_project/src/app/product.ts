export class Product {
    p_id: number;
    p_name: string;
    p_price: number;
    p_type: string;
    p_url:string;
    p_desc: string;
    constructor(p_id: number, p_name: string, p_price: number, p_type: string,p_url: string,p_desc:string) {
        this.p_id = p_id;
        this.p_name = p_name;
        this.p_price = p_price;
        this.p_type = p_type;
        this.p_url=p_url;
        this.p_desc=p_desc;
    }
}
