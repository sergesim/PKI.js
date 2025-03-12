"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8352],{28453:(e,i,n)=>{n.d(i,{R:()=>l,x:()=>c});var r=n(96540);const s={},a=r.createContext(s);function l(e){const i=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(a.Provider,{value:i},e.children)}},87087:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>c,default:()=>o,frontMatter:()=>l,metadata:()=>r,toc:()=>t});const r=JSON.parse('{"id":"api/classes/CertificateChainValidationEngine","title":"CertificateChainValidationEngine","description":"Represents a chain-building engine for Certificate certificates.","source":"@site/docs/api/classes/CertificateChainValidationEngine.md","sourceDirName":"api/classes","slug":"/api/classes/CertificateChainValidationEngine","permalink":"/docs/api/classes/CertificateChainValidationEngine","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"docs","previous":{"title":"Certificate","permalink":"/docs/api/classes/Certificate"},"next":{"title":"CertificatePolicies","permalink":"/docs/api/classes/CertificatePolicies"}}');var s=n(74848),a=n(28453);const l={},c="CertificateChainValidationEngine",d={},t=[{value:"Example",id:"example",level:2},{value:"Constructors",id:"constructors",level:2},{value:"new CertificateChainValidationEngine()",id:"new-certificatechainvalidationengine",level:3},{value:"Parameters",id:"parameters",level:4},{value:"parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns",level:4},{value:"Properties",id:"properties",level:2},{value:"certs",id:"certs",level:3},{value:"checkDate",id:"checkdate",level:3},{value:"crls",id:"crls",level:3},{value:"findIssuer",id:"findissuer",level:3},{value:"findOrigin",id:"findorigin",level:3},{value:"ocsps",id:"ocsps",level:3},{value:"trustedCerts",id:"trustedcerts",level:3},{value:"Methods",id:"methods",level:2},{value:"defaultFindIssuer()",id:"defaultfindissuer",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"certificate",id:"certificate",level:5},{value:"validationEngine",id:"validationengine",level:5},{value:"crypto",id:"crypto",level:5},{value:"Returns",id:"returns-1",level:4},{value:"defaultValues()",id:"defaultvalues",level:3},{value:"Call Signature",id:"call-signature",level:4},{value:"Parameters",id:"parameters-3",level:5},{value:"memberName",id:"membername",level:6},{value:"Returns",id:"returns-2",level:5},{value:"Call Signature",id:"call-signature-1",level:4},{value:"Parameters",id:"parameters-4",level:5},{value:"memberName",id:"membername-1",level:6},{value:"Returns",id:"returns-3",level:5},{value:"Call Signature",id:"call-signature-2",level:4},{value:"Parameters",id:"parameters-5",level:5},{value:"memberName",id:"membername-2",level:6},{value:"Returns",id:"returns-4",level:5},{value:"Call Signature",id:"call-signature-3",level:4},{value:"Parameters",id:"parameters-6",level:5},{value:"memberName",id:"membername-3",level:6},{value:"Returns",id:"returns-5",level:5},{value:"Call Signature",id:"call-signature-4",level:4},{value:"Parameters",id:"parameters-7",level:5},{value:"memberName",id:"membername-4",level:6},{value:"Returns",id:"returns-6",level:5},{value:"Call Signature",id:"call-signature-5",level:4},{value:"Parameters",id:"parameters-8",level:5},{value:"memberName",id:"membername-5",level:6},{value:"Returns",id:"returns-7",level:5},{value:"Call Signature",id:"call-signature-6",level:4},{value:"Parameters",id:"parameters-9",level:5},{value:"memberName",id:"membername-6",level:6},{value:"Returns",id:"returns-8",level:5},{value:"sort()",id:"sort",level:3},{value:"Parameters",id:"parameters-10",level:4},{value:"passedWhenNotRevValues",id:"passedwhennotrevvalues",level:5},{value:"crypto",id:"crypto-1",level:5},{value:"Returns",id:"returns-9",level:4},{value:"verify()",id:"verify",level:3},{value:"Parameters",id:"parameters-11",level:4},{value:"parameters",id:"parameters-12",level:5},{value:"crypto",id:"crypto-2",level:5},{value:"Returns",id:"returns-10",level:4},{value:"defaultFindOrigin()",id:"defaultfindorigin",level:3},{value:"Parameters",id:"parameters-13",level:4},{value:"certificate",id:"certificate-1",level:5},{value:"validationEngine",id:"validationengine-1",level:5},{value:"Returns",id:"returns-11",level:4}];function h(e){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",header:"header",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"certificatechainvalidationengine",children:"CertificateChainValidationEngine"})}),"\n",(0,s.jsxs)(i.p,{children:["Represents a chain-building engine for ",(0,s.jsx)(i.a,{href:"/docs/api/classes/Certificate",children:"Certificate"})," certificates."]}),"\n",(0,s.jsx)(i.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-js",metastring:"The following example demonstrates how to verify certificate chain",children:'const rootCa = pkijs.Certificate.fromBER(certRaw1);\nconst intermediateCa = pkijs.Certificate.fromBER(certRaw2);\nconst leafCert = pkijs.Certificate.fromBER(certRaw3);\nconst crl1 = pkijs.CertificateRevocationList.fromBER(crlRaw1);\nconst ocsp1 = pkijs.BasicOCSPResponse.fromBER(ocspRaw1);\n\nconst chainEngine = new pkijs.CertificateChainValidationEngine({\n  certs: [rootCa, intermediateCa, leafCert],\n  crls: [crl1],\n  ocsps: [ocsp1],\n  checkDate: new Date("2015-07-13"), // optional\n  trustedCerts: [rootCa],\n});\n\nconst chain = await chainEngine.verify();\n'})}),"\n",(0,s.jsx)(i.h2,{id:"constructors",children:"Constructors"}),"\n",(0,s.jsx)(i.h3,{id:"new-certificatechainvalidationengine",children:"new CertificateChainValidationEngine()"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"new CertificateChainValidationEngine"}),"(",(0,s.jsx)(i.code,{children:"parameters"}),"): ",(0,s.jsx)(i.a,{href:"/docs/api/classes/CertificateChainValidationEngine",children:(0,s.jsx)(i.code,{children:"CertificateChainValidationEngine"})})]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Constructor for CertificateChainValidationEngine class"}),"\n",(0,s.jsx)(i.h4,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsx)(i.h5,{id:"parameters-1",children:"parameters"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"/docs/api/interfaces/CertificateChainValidationEngineParameters",children:(0,s.jsx)(i.code,{children:"CertificateChainValidationEngineParameters"})})," = ",(0,s.jsx)(i.code,{children:"{}"})]}),"\n",(0,s.jsx)(i.h4,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"/docs/api/classes/CertificateChainValidationEngine",children:(0,s.jsx)(i.code,{children:"CertificateChainValidationEngine"})})}),"\n",(0,s.jsx)(i.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(i.h3,{id:"certs",children:"certs"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"certs"}),": ",(0,s.jsx)(i.a,{href:"/docs/api/classes/Certificate",children:(0,s.jsx)(i.code,{children:"Certificate"})}),"[]"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Array with certificate chain. Could be only one end-user certificate in there!"}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"checkdate",children:"checkDate"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"checkDate"}),": ",(0,s.jsx)(i.code,{children:"Date"})]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"The date at which the check would be"}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"crls",children:"crls"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"crls"}),": ",(0,s.jsx)(i.a,{href:"/docs/api/classes/CertificateRevocationList",children:(0,s.jsx)(i.code,{children:"CertificateRevocationList"})}),"[]"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Array of all CRLs for all certificates from certificate chain"}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"findissuer",children:"findIssuer"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"findIssuer"}),": ",(0,s.jsx)(i.a,{href:"/docs/api/globals#findissuercallback",children:(0,s.jsx)(i.code,{children:"FindIssuerCallback"})})]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"The date at which the check would be"}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"findorigin",children:"findOrigin"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"findOrigin"}),": ",(0,s.jsx)(i.a,{href:"/docs/api/globals#findorigincallback",children:(0,s.jsx)(i.code,{children:"FindOriginCallback"})})]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"The date at which the check would be"}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"ocsps",children:"ocsps"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"ocsps"}),": ",(0,s.jsx)(i.a,{href:"/docs/api/classes/BasicOCSPResponse",children:(0,s.jsx)(i.code,{children:"BasicOCSPResponse"})}),"[]"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Array of all OCSP responses"}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"trustedcerts",children:"trustedCerts"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"trustedCerts"}),": ",(0,s.jsx)(i.a,{href:"/docs/api/classes/Certificate",children:(0,s.jsx)(i.code,{children:"Certificate"})}),"[]"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Array of pre-defined trusted (by user) certificates"}),"\n",(0,s.jsx)(i.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(i.h3,{id:"defaultfindissuer",children:"defaultFindIssuer()"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"defaultFindIssuer"}),"(",(0,s.jsx)(i.code,{children:"certificate"}),", ",(0,s.jsx)(i.code,{children:"validationEngine"}),", ",(0,s.jsx)(i.code,{children:"crypto"}),"): ",(0,s.jsx)(i.code,{children:"Promise"}),"<",(0,s.jsx)(i.a,{href:"/docs/api/classes/Certificate",children:(0,s.jsx)(i.code,{children:"Certificate"})}),"[]>"]}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,s.jsx)(i.h5,{id:"certificate",children:"certificate"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"/docs/api/classes/Certificate",children:(0,s.jsx)(i.code,{children:"Certificate"})})}),"\n",(0,s.jsx)(i.h5,{id:"validationengine",children:"validationEngine"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"/docs/api/classes/CertificateChainValidationEngine",children:(0,s.jsx)(i.code,{children:"CertificateChainValidationEngine"})})}),"\n",(0,s.jsx)(i.h5,{id:"crypto",children:"crypto"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"/docs/api/interfaces/ICryptoEngine",children:(0,s.jsx)(i.code,{children:"ICryptoEngine"})})," = ",(0,s.jsx)(i.code,{children:"..."})]}),"\n",(0,s.jsx)(i.h4,{id:"returns-1",children:"Returns"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"Promise"}),"<",(0,s.jsx)(i.a,{href:"/docs/api/classes/Certificate",children:(0,s.jsx)(i.code,{children:"Certificate"})}),"[]>"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"defaultvalues",children:"defaultValues()"}),"\n",(0,s.jsx)(i.h4,{id:"call-signature",children:"Call Signature"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"defaultValues"}),"(",(0,s.jsx)(i.code,{children:"memberName"}),"): ",(0,s.jsx)(i.a,{href:"/docs/api/classes/Certificate",children:(0,s.jsx)(i.code,{children:"Certificate"})}),"[]"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Returns default values for all class members"}),"\n",(0,s.jsx)(i.h5,{id:"parameters-3",children:"Parameters"}),"\n",(0,s.jsx)(i.h6,{id:"membername",children:"memberName"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:'"trustedCerts"'})}),"\n",(0,s.jsx)(i.p,{children:"String name for a class member"}),"\n",(0,s.jsx)(i.h5,{id:"returns-2",children:"Returns"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"/docs/api/classes/Certificate",children:(0,s.jsx)(i.code,{children:"Certificate"})}),"[]"]}),"\n",(0,s.jsx)(i.p,{children:"Default value"}),"\n",(0,s.jsx)(i.h4,{id:"call-signature-1",children:"Call Signature"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"defaultValues"}),"(",(0,s.jsx)(i.code,{children:"memberName"}),"): ",(0,s.jsx)(i.a,{href:"/docs/api/classes/Certificate",children:(0,s.jsx)(i.code,{children:"Certificate"})}),"[]"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Returns default values for all class members"}),"\n",(0,s.jsx)(i.h5,{id:"parameters-4",children:"Parameters"}),"\n",(0,s.jsx)(i.h6,{id:"membername-1",children:"memberName"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:'"certs"'})}),"\n",(0,s.jsx)(i.p,{children:"String name for a class member"}),"\n",(0,s.jsx)(i.h5,{id:"returns-3",children:"Returns"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"/docs/api/classes/Certificate",children:(0,s.jsx)(i.code,{children:"Certificate"})}),"[]"]}),"\n",(0,s.jsx)(i.p,{children:"Default value"}),"\n",(0,s.jsx)(i.h4,{id:"call-signature-2",children:"Call Signature"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"defaultValues"}),"(",(0,s.jsx)(i.code,{children:"memberName"}),"): ",(0,s.jsx)(i.a,{href:"/docs/api/classes/CertificateRevocationList",children:(0,s.jsx)(i.code,{children:"CertificateRevocationList"})}),"[]"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Returns default values for all class members"}),"\n",(0,s.jsx)(i.h5,{id:"parameters-5",children:"Parameters"}),"\n",(0,s.jsx)(i.h6,{id:"membername-2",children:"memberName"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:'"crls"'})}),"\n",(0,s.jsx)(i.p,{children:"String name for a class member"}),"\n",(0,s.jsx)(i.h5,{id:"returns-4",children:"Returns"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"/docs/api/classes/CertificateRevocationList",children:(0,s.jsx)(i.code,{children:"CertificateRevocationList"})}),"[]"]}),"\n",(0,s.jsx)(i.p,{children:"Default value"}),"\n",(0,s.jsx)(i.h4,{id:"call-signature-3",children:"Call Signature"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"defaultValues"}),"(",(0,s.jsx)(i.code,{children:"memberName"}),"): ",(0,s.jsx)(i.a,{href:"/docs/api/classes/BasicOCSPResponse",children:(0,s.jsx)(i.code,{children:"BasicOCSPResponse"})}),"[]"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Returns default values for all class members"}),"\n",(0,s.jsx)(i.h5,{id:"parameters-6",children:"Parameters"}),"\n",(0,s.jsx)(i.h6,{id:"membername-3",children:"memberName"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:'"ocsps"'})}),"\n",(0,s.jsx)(i.p,{children:"String name for a class member"}),"\n",(0,s.jsx)(i.h5,{id:"returns-5",children:"Returns"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"/docs/api/classes/BasicOCSPResponse",children:(0,s.jsx)(i.code,{children:"BasicOCSPResponse"})}),"[]"]}),"\n",(0,s.jsx)(i.p,{children:"Default value"}),"\n",(0,s.jsx)(i.h4,{id:"call-signature-4",children:"Call Signature"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"defaultValues"}),"(",(0,s.jsx)(i.code,{children:"memberName"}),"): ",(0,s.jsx)(i.code,{children:"Date"})]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Returns default values for all class members"}),"\n",(0,s.jsx)(i.h5,{id:"parameters-7",children:"Parameters"}),"\n",(0,s.jsx)(i.h6,{id:"membername-4",children:"memberName"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:'"checkDate"'})}),"\n",(0,s.jsx)(i.p,{children:"String name for a class member"}),"\n",(0,s.jsx)(i.h5,{id:"returns-6",children:"Returns"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:"Date"})}),"\n",(0,s.jsx)(i.p,{children:"Default value"}),"\n",(0,s.jsx)(i.h4,{id:"call-signature-5",children:"Call Signature"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"defaultValues"}),"(",(0,s.jsx)(i.code,{children:"memberName"}),"): ",(0,s.jsx)(i.a,{href:"/docs/api/globals#findorigincallback",children:(0,s.jsx)(i.code,{children:"FindOriginCallback"})})]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Returns default values for all class members"}),"\n",(0,s.jsx)(i.h5,{id:"parameters-8",children:"Parameters"}),"\n",(0,s.jsx)(i.h6,{id:"membername-5",children:"memberName"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:'"findOrigin"'})}),"\n",(0,s.jsx)(i.p,{children:"String name for a class member"}),"\n",(0,s.jsx)(i.h5,{id:"returns-7",children:"Returns"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"/docs/api/globals#findorigincallback",children:(0,s.jsx)(i.code,{children:"FindOriginCallback"})})}),"\n",(0,s.jsx)(i.p,{children:"Default value"}),"\n",(0,s.jsx)(i.h4,{id:"call-signature-6",children:"Call Signature"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"defaultValues"}),"(",(0,s.jsx)(i.code,{children:"memberName"}),"): ",(0,s.jsx)(i.a,{href:"/docs/api/globals#findissuercallback",children:(0,s.jsx)(i.code,{children:"FindIssuerCallback"})})]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Returns default values for all class members"}),"\n",(0,s.jsx)(i.h5,{id:"parameters-9",children:"Parameters"}),"\n",(0,s.jsx)(i.h6,{id:"membername-6",children:"memberName"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:'"findIssuer"'})}),"\n",(0,s.jsx)(i.p,{children:"String name for a class member"}),"\n",(0,s.jsx)(i.h5,{id:"returns-8",children:"Returns"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"/docs/api/globals#findissuercallback",children:(0,s.jsx)(i.code,{children:"FindIssuerCallback"})})}),"\n",(0,s.jsx)(i.p,{children:"Default value"}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"sort",children:"sort()"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"sort"}),"(",(0,s.jsx)(i.code,{children:"passedWhenNotRevValues"}),", ",(0,s.jsx)(i.code,{children:"crypto"}),"): ",(0,s.jsx)(i.code,{children:"Promise"}),"<",(0,s.jsx)(i.a,{href:"/docs/api/classes/Certificate",children:(0,s.jsx)(i.code,{children:"Certificate"})}),"[]>"]}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"parameters-10",children:"Parameters"}),"\n",(0,s.jsx)(i.h5,{id:"passedwhennotrevvalues",children:"passedWhenNotRevValues"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"boolean"})," = ",(0,s.jsx)(i.code,{children:"false"})]}),"\n",(0,s.jsx)(i.h5,{id:"crypto-1",children:"crypto"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"/docs/api/interfaces/ICryptoEngine",children:(0,s.jsx)(i.code,{children:"ICryptoEngine"})})," = ",(0,s.jsx)(i.code,{children:"..."})]}),"\n",(0,s.jsx)(i.h4,{id:"returns-9",children:"Returns"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"Promise"}),"<",(0,s.jsx)(i.a,{href:"/docs/api/classes/Certificate",children:(0,s.jsx)(i.code,{children:"Certificate"})}),"[]>"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"verify",children:"verify()"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"verify"}),"(",(0,s.jsx)(i.code,{children:"parameters"}),", ",(0,s.jsx)(i.code,{children:"crypto"}),"): ",(0,s.jsx)(i.code,{children:"Promise"}),"<",(0,s.jsx)(i.a,{href:"/docs/api/interfaces/CertificateChainValidationEngineVerifyResult",children:(0,s.jsx)(i.code,{children:"CertificateChainValidationEngineVerifyResult"})}),">"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Major verification function for certificate chain."}),"\n",(0,s.jsx)(i.h4,{id:"parameters-11",children:"Parameters"}),"\n",(0,s.jsx)(i.h5,{id:"parameters-12",children:"parameters"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"/docs/api/interfaces/CertificateChainValidationEngineVerifyParams",children:(0,s.jsx)(i.code,{children:"CertificateChainValidationEngineVerifyParams"})})," = ",(0,s.jsx)(i.code,{children:"{}"})]}),"\n",(0,s.jsx)(i.h5,{id:"crypto-2",children:"crypto"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"/docs/api/interfaces/ICryptoEngine",children:(0,s.jsx)(i.code,{children:"ICryptoEngine"})})," = ",(0,s.jsx)(i.code,{children:"..."})]}),"\n",(0,s.jsx)(i.p,{children:"Crypto engine"}),"\n",(0,s.jsx)(i.h4,{id:"returns-10",children:"Returns"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"Promise"}),"<",(0,s.jsx)(i.a,{href:"/docs/api/interfaces/CertificateChainValidationEngineVerifyResult",children:(0,s.jsx)(i.code,{children:"CertificateChainValidationEngineVerifyResult"})}),">"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"defaultfindorigin",children:"defaultFindOrigin()"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"static"})," ",(0,s.jsx)(i.strong,{children:"defaultFindOrigin"}),"(",(0,s.jsx)(i.code,{children:"certificate"}),", ",(0,s.jsx)(i.code,{children:"validationEngine"}),"): ",(0,s.jsx)(i.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"parameters-13",children:"Parameters"}),"\n",(0,s.jsx)(i.h5,{id:"certificate-1",children:"certificate"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"/docs/api/classes/Certificate",children:(0,s.jsx)(i.code,{children:"Certificate"})})}),"\n",(0,s.jsx)(i.h5,{id:"validationengine-1",children:"validationEngine"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"/docs/api/classes/CertificateChainValidationEngine",children:(0,s.jsx)(i.code,{children:"CertificateChainValidationEngine"})})}),"\n",(0,s.jsx)(i.h4,{id:"returns-11",children:"Returns"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:"string"})})]})}function o(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);