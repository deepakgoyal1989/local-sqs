"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const sqs_1 = require("./sqs");
const app = express();
const port = 3000;
app.post('/sendMessage', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const msg = `{"name": "tn:migrate:v3:bravo:featured_page_copy", "process_id": "000001-000001-000001-000001", "data": {"tn_did": "TNHR6356WKMDYWB7SYVR", "status": "new"}}`
    // const msg = `{  "name": "tn:migrate:v3:redirect",  "process_id": "1111111-000001-000001-000011",  "step_id": "1814eb73-e6d1-4cd3-96ae-1014fa44fd4e",  "data": {    "tn_did": "TNHR6356WKMDYWB7SYVR",    "source_domain": "https://www.jobs.net/jobs/tn1",    "target_domain": "https://tn1.jobs.net",    "finish_workflow": "redirect",    "status": "new"  }}`;
    // const msg = `{  "name": "tn:migrate:v3:bravo:social_copy",  "process_id": "1111111-000001-000001-000011",  "step_id": "1814eb73-e6d1-4cd3-96ae-1014fa44fd4n",  "data": {    "tn_did": "TNCH35M6918Z17279SJ6",    "source_domain": "https://www.jobs.net/jobs/tn1",    "target_domain": "https://tn1.jobs.net",    "status": "new"  }}`;
    const msg = `{  "name": "tn:migrate:v3:academy:featured_page_copy",  "process_id": "1111111-000001-000001-000011",  "step_id": "1814eb73-e6d1-4cd3-96ae-1014fa44fd4n",  "data": {    "tn_did": "TNCH35M6918Z17279SJ6",    "source_domain": "http://www.jobs.net/jobs/navigant",    "target_domain": "https://navigant.jobs.net/",    "status": "new"  }}`;
    // const msg = `{  "name": "tn:migrate:v3:create",  "process_id": "1111111-000001-000001-000011",  "data": {    "tn_did": "TNCH35M6918Z17279SJ6",    "status": "new"  }}`
    // const msg = `{  "name": "tn:migrate:v3:academy:base_copy",  "process_id": "1111111-000001-000001-000011",  "data": {    "tn_did": "TN811KK63X5FKPV5M6BC",    "source_domain": "http://www.jobs.net/jobs/la-maison-bleue-academy",    "target_domain": "https://la-maison-bleue-academy.jobs.net",    "status": "new"  } }`;
    yield sqs_1.SQSService.send(msg);
}));
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map