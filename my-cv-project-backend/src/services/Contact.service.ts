import { MyCvData } from "src/models/response/contact/contact.response";

export abstract class ContactService {
    abstract getMyCv(): Promise<MyCvData | null>;

    abstract downloadCv(): Promise<any>;
}