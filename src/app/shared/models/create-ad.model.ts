export class CreateAd {
    public title: string;
    public subtitle: string;
    public description: string;
    public price: string;
    public category: string;
    public subCategory: string;
    public imgUrls: [string];
    public userId: string;
    public streetName: string;
    public streetNumber: string;
    public subub: string;
    public city: string;
    public postalCode: string;
    public provience: string;
    public lat: string;
    public log: string;
    public cellphone: string;
    public email: string;

    constructor(
        title: string,
        subtitle: string,
        description: string,
        price: string,
        category: string,
        subCategory: string,
        imgUrls: [string],
        userId: string,
        streetName: string,
        streetNumber: string,
        subub: string,
        city: string,
        postalCode: string,
        provience: string,
        lat: string,
        log: string,
        cellphone: string,
        email: string

    ) {
        this.title = title;
        this.subtitle = subtitle;
        this.description = description;
        this.price = price;
        this.category = category;
        this.subCategory = subCategory;
        this.imgUrls = imgUrls;
        this.userId = userId;
        this.streetName = streetName;
        this.streetNumber = streetNumber;
        this.subub = subub;
        this.city = city;
        this.postalCode = postalCode;
        this.provience = provience;
        this.lat = lat;
        this.log = log;
        this.cellphone = cellphone;
        this.email=email;
    }
}



