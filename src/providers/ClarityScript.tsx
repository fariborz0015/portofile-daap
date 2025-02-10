import Script from "next/script";
import React from "react";

const ClarityScript = () => {
  return (
    <Script
      id="clarityscript"
      crossOrigin="anonymous"
      src="https://www.clarity.ms/tag/q7dnsn6pa8"
      data-site-id="q7dnsn6pa8"
      data-app-id="q7dnsn6pa8"
      dangerouslySetInnerHTML={{
        __html: `
           (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "q7dnsn6pa8");
        
        
        `,
      }}
    />
  );
};

export default ClarityScript;
