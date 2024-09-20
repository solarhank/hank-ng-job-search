import { JobModel } from "./job";

export class JobDetailModel extends JobModel {
    location: string = '';
    industries: string[] = [];
    types: string[] = [];
    description: string = '';
    publishDate: string = '';
}
