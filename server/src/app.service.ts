import {Injectable, Query} from '@nestjs/common';
import { Client } from 'amocrm-js'
import { ILead } from "amocrm-js/dist/api/activeRecords/Lead";
import { IResourcePagination } from "amocrm-js/dist/api/ResourcePagination";
import {IContact} from "amocrm-js/dist/api/activeRecords/Contact";
import {IQueryAttributes} from "amocrm-js/dist/api/activeRecords/common/EmbeddedEntityList";
import * as querystring from "node:querystring";

const client: Client = new Client({
  domain: 'alexpyslar03',
  auth: {
    client_id: '7600582f-8f0d-40d0-8ba5-b10a9c2798a1',
    client_secret: 't7yiRC2lBeH6Vyuawi7Ke2CrrKSRwopk80xQMWppkGGAirFtbkWHnHOo4HhH9Vhn',
    redirect_uri: 'https://localhost.com',
    code: 'def50200286f493c22b52fc865cfeb1ddf6c2e244d4414dc0e0f486694a0632558281157e0984bfd40585726142e02b7e0c28caa6b7810450061ceca627ad8380908d6101905cc669764fb63e9c93bcb84a2d020d88add7bb7d4736946bc26ed8a7d6143e19eda8e450b711f8edf5a525f72ec69405d85ce413389b8f4d95efe850122b50b34f89fb22fade1f50e755bc4783afdd7338b075bc20f64f98edc6aa1e5676ee9c181a4aa145adb8f830734199c864368472b302ed39497b1f856974753b583b5ff16bca06240a225b7209de63ff528d50655f3d686f176a3569220dfea9d651b75fe26ec2eaa5e58847789941d0e17a227f39958939a37c6960702eb7fe7c55a9a35b3406ac0d5c638b48c40d43d627178eade72a3c8b38a2a092a48abfc977ab9303bc5c574a4dbf534910d72aaea5f4e283bf76efe253cd3de6a134d58d3cfacaba9a1b6ec319ac74b2649224bdf192f4310f2bc63caa9ba1ef35839f67f9e3388b16e994df21323b752fb512cb5d6488cb5d4832141d98e76b81aceb61baee3e39346dea8bc9fffb10fbb95dc1e376ae4551cf551b01906108ce77efa8588929a40cc845c8c66f0aca8680d6be61de0725913fd0ef46a161be216bc569cfdea5500b9bd998b86e8a995c354a74126113858f167213b7e74ff55b6384ead34e1',
  },
});

@Injectable()
export class AppService {
  async getLeads(): Promise<string> {
    const pagination_leads: IResourcePagination<ILead> = await client.leads.get();
    const pagination_contacts: IResourcePagination<IContact> = await client.contacts.get();
    const leads: ILead[] = pagination_leads.getData();
    const contacts: IContact[] = pagination_contacts.getData();
    console.log('contacts', contacts);
    console.log('leads', leads)
    return String()
  }
}
