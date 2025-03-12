"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1649],{25479:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>u,contentTitle:()=>p,default:()=>h,frontMatter:()=>c,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"examples/certificates-and-revocation/working-with-OCSP-requests","title":"Working with OCSP requests","description":"In this example, you will see how to create and parse OCSP requests.","source":"@site/docs/examples/certificates-and-revocation/working-with-OCSP-requests.mdx","sourceDirName":"examples/certificates-and-revocation","slug":"/examples/certificates-and-revocation/working-with-OCSP-requests","permalink":"/docs/examples/certificates-and-revocation/working-with-OCSP-requests","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"examples","previous":{"title":"Creating and parsing CRLs","permalink":"/docs/examples/certificates-and-revocation/creating-and-parsing-CRLs"},"next":{"title":"Working with OCSP responses","permalink":"/docs/examples/certificates-and-revocation/working-with-OCSP-responses"}}');var r=t(74848),i=t(28453),a=t(58069);const o="import * as pkijs from 'pkijs';\nimport * as asn1js from 'asn1js';\n\n// Create OCSP request\nconst ocspReq = new pkijs.OCSPRequest();\n\nocspReq.tbsRequest.requestorName = new pkijs.GeneralName({\n  type: 4,\n  value: cert.subject,\n});\n\nawait ocspReq.createForCertificate(cert, {\n  hashAlgorithm: \"SHA-256\",\n  issuerCertificate: issuerCert,\n});\n\nconst nonce = pkijs.getRandomValues(new Uint8Array(10));\nocspReq.tbsRequest.requestExtensions = [\n  new pkijs.Extension({\n    extnID: \"1.3.6.1.5.5.7.48.1.2\", // nonce\n    extnValue: new asn1js.OctetString({ valueHex: nonce.buffer }).toBER(),\n  })\n];\n\n// Encode OCSP request\nconst ocspReqRaw = ocspReq.toSchema(true).toBER();\n",c={},p="Working with OCSP requests",u={},l=[];function d(e){const s={h1:"h1",header:"header",p:"p",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"working-with-ocsp-requests",children:"Working with OCSP requests"})}),"\n",(0,r.jsx)(s.p,{children:"In this example, you will see how to create and parse OCSP requests."}),"\n",(0,r.jsx)(a.A,{language:"ts",children:o})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);