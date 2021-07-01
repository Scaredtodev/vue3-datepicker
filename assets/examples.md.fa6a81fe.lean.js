import{r as a,a4 as n,o as s,b as t,d as p,w as e,a5 as l,h as o,i as c}from"./app.6788db77.js";import{_ as u}from"./Datepicker.cdb8d20c.js";const i=o('',4),k=o('',4),r=c("Upper limit: "),d=c("Lower limit: "),m=p("p",null,"Result:",-1),g=o('',3),v=c("Disabled date: "),w=p("p",null,"Result:",-1),y=o('',3),_=c("Starting view: "),h=p("code",null,"day",-1),f=c(),D=c("Starting view: "),b=p("code",null,"month",-1),q=c(),V=c("Starting view: "),T=p("code",null,"year",-1),S=c(),x=c("Result: "),C=p("h2",{id:"clearable"},[p("a",{class:"header-anchor",href:"#clearable","aria-hidden":"true"},"#"),c(" Clearable")],-1),A=p("p",null,"Settings:",-1),U=c("Clear date: "),I=p("p",null,"Result:",-1),P=o('',3),R='{"title":"Examples","description":"","frontmatter":{},"headers":[{"level":2,"title":"Styling","slug":"styling"},{"level":2,"title":"Basic usage","slug":"basic-usage"},{"level":2,"title":"Upper and lower limits","slug":"upper-and-lower-limits"},{"level":2,"title":"Disabled dates","slug":"disabled-dates"},{"level":2,"title":"Starting view","slug":"starting-view"},{"level":2,"title":"Clearable","slug":"clearable"}],"relativePath":"examples.md","lastUpdated":1625164902736}',j={};const E=Object.assign(j,{expose:[],setup:function(o){const c=a(new Date),R=a(new Date),j=a(n(new Date,{days:-7})),E=a(n(new Date,{days:7})),N=a(new Date),B=a(n(new Date,{days:1})),z=a(new Date),F=a("day");return(a,n)=>(s(),t("div",null,[i,p(u,{modelValue:c.value,"onUpdate:modelValue":n[1]||(n[1]=a=>c.value=a)},null,8,["modelValue"]),k,p("ul",null,[p("li",null,[r,p(u,{modelValue:j.value,"onUpdate:modelValue":n[2]||(n[2]=a=>j.value=a)},null,8,["modelValue"])]),p("li",null,[d,p(u,{modelValue:E.value,"onUpdate:modelValue":n[3]||(n[3]=a=>E.value=a)},null,8,["modelValue"])])]),m,p(u,{modelValue:R.value,"onUpdate:modelValue":n[4]||(n[4]=a=>R.value=a),"upper-limit":E.value,"lower-limit":j.value},null,8,["modelValue","upper-limit","lower-limit"]),g,p("ul",null,[p("li",null,[v,p(u,{modelValue:B.value,"onUpdate:modelValue":n[5]||(n[5]=a=>B.value=a)},null,8,["modelValue"])])]),w,p(u,{modelValue:N.value,"onUpdate:modelValue":n[6]||(n[6]=a=>N.value=a),disabledDates:{dates:[B.value]}},null,8,["modelValue","disabledDates"]),y,p("ul",null,[p("li",null,[p("label",null,[_,h,f,e(p("input",{type:"radio","onUpdate:modelValue":n[7]||(n[7]=a=>F.value=a),value:"day"},null,512),[[l,F.value]])])]),p("li",null,[p("label",null,[D,b,q,e(p("input",{type:"radio","onUpdate:modelValue":n[8]||(n[8]=a=>F.value=a),value:"month"},null,512),[[l,F.value]])])]),p("li",null,[p("label",null,[V,T,S,e(p("input",{type:"radio","onUpdate:modelValue":n[9]||(n[9]=a=>F.value=a),value:"year"},null,512),[[l,F.value]])])])]),p("p",null,[x,p(u,{modelValue:z.value,"onUpdate:modelValue":n[10]||(n[10]=a=>z.value=a),"starting-view":F.value},null,8,["modelValue","starting-view"])]),C,A,p("ul",null,[p("li",null,[U,p(u,{clearable:!0})])]),I,p(u,{modelValue:N.value,"onUpdate:modelValue":n[11]||(n[11]=a=>N.value=a),clearable:!0},null,8,["modelValue"]),P]))}});export default E;export{R as __pageData};