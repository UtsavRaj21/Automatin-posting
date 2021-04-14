const puppy = require("puppeteer");
const data=require("./data.json");

async function main(){ 
    let browser = await puppy.launch({
    headless  : false,
    defaultViewport : false,
    args: ['--start-maximized'] 
});

 const key=process.argv[2];

let tab;

let pages = await browser.pages();
tab = pages[0];  

await tab.goto("https://www.reddit.com/login/?dest=https%3A%2F%2Fwww.reddit.com%2F");

await tab.type("#loginUsername",data.redId);
await tab.type("#loginPassword",data.redPass);
await tab.click(".AnimatedForm__submitButton.m-full-width");

await new Promise(done => setTimeout(() => done(), 12000));
await tab.reload();

await tab.waitForSelector("#header-search-bar",{visible:true});

await tab.type("#header-search-bar",key);
await tab.keyboard.press("Enter");

await tab.waitForSelector(".ei8_Bq_te0jjwNIqmk8Tw._3MfNPE_vLKliHPkiYMAtZm");
let buttons = await tab.$$(".ei8_Bq_te0jjwNIqmk8Tw._3MfNPE_vLKliHPkiYMAtZm");

let address = await tab.evaluate(function(ele){
        return ele.getAttribute('href');
    },buttons[0]);

 await tab.goto("https://www.reddit.com"+address);

 await tab.waitForSelector("._2_tDEnGMLxpM6uOa2kaDB3.ImageBox-image.media-element._1XWObl-3b9tPy64oaG6fax");
 let post = await tab.$$("._2_tDEnGMLxpM6uOa2kaDB3.ImageBox-image.media-element._1XWObl-3b9tPy64oaG6fax");
 
 let postLink = await tab.evaluate(function(ele){
         return ele.getAttribute('src');
     },post[0]);
 
  await tab.goto(postLink);

await tab.keyboard.down('Control');
  await tab.keyboard.press('KeyC');
  await tab.keyboard.up('Control');


await tab.goto("https://www.facebook.com/");

await tab.type("#email",data.fbId);
await tab.type("#pass",data.fbPass);
await tab.click("._42ft._4jy0._6lth._4jy6._4jy1.selected._51sy");

await tab.waitForSelector(".oajrlxb2.gs1a9yip.g5ia77u1.mtkw9kbi.tlpljxtp.qensuy8j.ppp5ayq2.goun2846.ccm00jje.s44p3ltw.mk2mc5f4.rt8b4zig.n8ej3o3l.agehan2d.sk4xxmp2.rq0escxv.nhd2j8a9.a8c37x1j.mg4g778l.btwxx1t3.pfnyh3mw.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.tgvbjcpo.hpfvmrgz.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.l9j0dhe7.i1ao9s8h.esuyzwwr.f1sip0of.du4w35lb.lzcic4wl.abiwlrkh.p8dawk7l.ue3kfks5.pw54ja7n.uo3d90p7.l82x9zwi");
let group = await tab.$$(".oajrlxb2.gs1a9yip.g5ia77u1.mtkw9kbi.tlpljxtp.qensuy8j.ppp5ayq2.goun2846.ccm00jje.s44p3ltw.mk2mc5f4.rt8b4zig.n8ej3o3l.agehan2d.sk4xxmp2.rq0escxv.nhd2j8a9.a8c37x1j.mg4g778l.btwxx1t3.pfnyh3mw.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.tgvbjcpo.hpfvmrgz.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.l9j0dhe7.i1ao9s8h.esuyzwwr.f1sip0of.du4w35lb.lzcic4wl.abiwlrkh.p8dawk7l.ue3kfks5.pw54ja7n.uo3d90p7.l82x9zwi");

let grouplink = await tab.evaluate(function(ele){
        return ele.getAttribute('href');
    },group[3]);

 await tab.goto(grouplink);


await tab.waitForSelector("div[data-visualcompletion='ignore-dynamic'] a");
let inside = await tab.$$("div[data-visualcompletion='ignore-dynamic'] a");

let insidelink = await tab.evaluate(function(ele){
        return ele.getAttribute('href');
    },inside[3]);

 await tab.goto(insidelink);

 await tab.waitForSelector(".m9osqain.a5q79mjw.jm1wdb64.k4urcfbm");
 await tab.click(".m9osqain.a5q79mjw.jm1wdb64.k4urcfbm");

 await tab.waitForSelector(".o6r2urh6.buofh1pr.datstx6m.l9j0dhe7.oh7imozk.x68sjeil");

 await tab.keyboard.down('Control');
 await tab.keyboard.press('KeyV');
 await tab.keyboard.up('Control');

 await tab.click("div[aria-label='Post']");

  

await tab.goto("https://web.whatsapp.com/");
await tab.keyboard.press("Enter");
await tab.waitForSelector("._1Id11");
await new Promise(done => setTimeout(() => done(), 5000));

await tab.click('span[title="Meme"]');

await tab.waitForSelector("._1JAUF._2x4bz",{visible:true});
await tab.click('._1JAUF._2x4bz');
await tab.keyboard.down('Control');
  await tab.keyboard.press('KeyV');
  await tab.keyboard.up('Control');
  await new Promise(done => setTimeout(() => done(), 3000));
  await tab.keyboard.press("Enter");

  await new Promise(done => setTimeout(() => done(), 2000));

await tab.goto('https://twitter.com/login', {waitUntil: 'networkidle2'});
await tab.keyboard.press("Enter");

 await tab.type('input[type="text"]',data.twitterId);
 await tab.type('input[type="password"]',data.twitterPass);
 await tab.keyboard.press("Tab");
 await tab.keyboard.press("Enter");

 await tab.waitForSelector('.public-DraftStyleDefault-block.public-DraftStyleDefault-ltr',{visible:true});

 await tab.click('.public-DraftStyleDefault-block.public-DraftStyleDefault-ltr');
 await tab.keyboard.down('Control');
   await tab.keyboard.press('KeyV');
   await tab.keyboard.up('Control');
   
   await tab.waitForSelector('.css-18t94o4.css-1dbjc4n.r-urgr8i.r-42olwf.r-sdzlij.r-1phboty.r-rs99b7.r-1w2pmg.r-19u6a5r.r-ero68b.r-1gg2371.r-1ny4l3l.r-1fneopy.r-o7ynqc.r-6416eg.r-lrvibr',{visible:true});
   await tab.click(".css-18t94o4.css-1dbjc4n.r-urgr8i.r-42olwf.r-sdzlij.r-1phboty.r-rs99b7.r-1w2pmg.r-19u6a5r.r-ero68b.r-1gg2371.r-1ny4l3l.r-1fneopy.r-o7ynqc.r-6416eg.r-lrvibr");
   
   await new Promise(done => setTimeout(() => done(), 2000));
   await tab.close();

}
main();


