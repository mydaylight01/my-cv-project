import { Controller, Get, Route, Tags, Request, Response } from "tsoa";
import { MyCvData } from "src/models/response/contact/contact.response";
import { ContactImplService } from "src/services/impl/Contact.impl";

@Route("contact")
@Tags("Contact")
export class ContactController extends Controller {
    @Response<MyCvData>("200", "OK")
    @Get("/get-my-cv")
    public async getMyCv(): Promise<MyCvData | null> {
        return new ContactImplService().getMyCv();
    }

    @Response<any>("200", "OK")
    @Get("/download-cv")
    public async downloadCv(): Promise<any> {
        return new ContactImplService().downloadCv();
    }
}