import { Injectable } from '@nestjs/common';
import { Identifier, Name, Type, Coding } from 'models/common.models';

@Injectable()
export class FhirService {

  name(data: { prefix: string, family: string, given: string}): Name {
    return {
      text: data['text'],
      family: data.family,
      given: [ data.given ],
      prefix: [ data.prefix ]
    };
  }

  identifier(data: {
    use: string,
    type: any,
    system: string,
    value: string,
    period: any,
  }): Identifier | null {
    return null;
    // return {
    //   use: 
    //   type: 
    //   system: 
    //   value: 
    //   period: 
    // }
  }

  type(data: JSON): Type {
    return {
      coding: [ this.coding(data['coding']) ]
    }
  }

  coding(data: JSON): Coding {
    return {
      system: '',
      code: '',
      display: '',
    }
  }

  thaiIDIdentifier(value: string): Identifier {
    return {
      "use" : "official",
      "type" : {
        "coding" : [
          {
            "system" : "https://terms.sil-th.org/CodeSystem/cs-th-identifier-type",
            "code" : "cid",
            "display" : "เลขประจำตัวประชาชนไทย"
          }
        ]
      },
      "system" : "https://terms.sil-th.org/id/th-cid",
      "value" : value,
      "period" : {
        "start" : "2018-04-25",
        "end" : "2022-04-25"
      }
    }
  }

}
