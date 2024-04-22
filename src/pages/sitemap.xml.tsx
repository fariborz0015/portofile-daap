import { MENU_LINKS } from "@/lib/data/content/menu";

 





 

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }: any) {
  
  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(`
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
              http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
              <url>
              <loc>https://fariborz.vercel.app/</loc>
              <lastmod>2024-04-22T03:36:45+00:00</lastmod>
              <priority>1.00</priority>
            </url>
            <url>
              <loc>https://fariborz.vercel.app/assets/cv/fariborz-shalghooni-front-end.pdf</loc>
              <lastmod>2024-04-22T03:36:45+00:00</lastmod>
              <priority>0.80</priority>
            </url>
       <!--We manually set the two URLs we know already-->
       ${MENU_LINKS
         .map((item,index) => {
           return `
         <url>
             <loc>${`https://fariborz.vercel.app/#${item.id}`}</loc>
             <lastmod>2024-04-22T03:36:45+00:00</lastmod>
             <priority>0.80</priority>
         </url>
       `;
         })
         .join("")}
     </urlset>

     `);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;


