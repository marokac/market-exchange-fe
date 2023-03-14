export class ItemFiltere {
    public category: string;
    public subCategory: string;
    public search?: string;
    public page?: number;
    public limit?: number;
    constructor(
        category: string,
        subCategory: string,
        search?: string,
        page?: number,
        limit?: number
   
    ) {
        this.category = category;
        this.subCategory = subCategory;
        this.search = search;
        this.page = page;
        this.limit = limit;
    }
}





